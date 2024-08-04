const API_KEY = "EUxA6CSQF6uNLcR4IlkMaRYbSVaVn7yhrsswAIoSWORz";

async function getToken() {
    const response = await fetch("https://iam.cloud.ibm.com/identity/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`
    });

    if (!response.ok) {
        throw new Error("Failed to fetch token");
    }

    const data = await response.json();
    return data.access_token;
}

async function apiPost(scoring_url, token, payload) {
    const response = await fetch(scoring_url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Failed to fetch prediction");
    }

    const data = await response.json();
    return data;
}

document.getElementById("houseForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    // Gather input values
    const bhk = parseInt(document.getElementById("bhk").value);
    const location = parseInt(document.getElementById("location").value); // Ensure location is provided as an integer
    const floor = parseInt(document.getElementById("floor").value);
    const transactionType = parseInt(document.getElementById("transaction").value);
    const furnishing = parseInt(document.getElementById("furnishing").value);
    const balcony = parseInt(document.getElementById("balcony").value);

    const payload = {
        "input_data": [
            {
                "fields": ["bhk", "location", "floor", "transaction", "furnishing", "balcony"],
                "values": [
                    [bhk, location, floor, transactionType, furnishing, balcony]
                ]
            }
        ]
    };

    try {
        const token = await getToken();
        const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/2a0c52c5-766a-451c-a1bf-697416a0f320/predictions?version=2021-05-01";
        const prediction = await apiPost(scoring_url, token, payload);
        
        const resultContainer = document.getElementById("result");
        resultContainer.textContent = `Predicted Price: ${prediction.predictions[0].values[0][0]}`;
        resultContainer.classList.add("visible");
    } catch (error) {
        console.error(error);
    }
});
