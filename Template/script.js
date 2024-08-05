const API_KEY = "EUxA6CSQF6uNLcR4IlkMaRYbSVaVn7yhrsswAIoSWORz";

async function getToken() {
    console.log('Fetching token...');
    // Please use a local or cloud-based CORS proxy because I couldn't find any option in IBM Cloud for enabling CORS.
    const response = await fetch("http://localhost:8080/https://iam.cloud.ibm.com/identity/token", {
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
    console.log('Token fetched:', data.access_token);
    return data.access_token;
}

async function apiPost(scoring_url, token, payload) {
    console.log('Sending prediction request...');
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
    console.log('Prediction received:', data);
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
    const bathroom = parseInt(document.getElementById("bathroom").value);
    const balcony = parseInt(document.getElementById("balcony").value);

    const payload = {
        "input_data": [
            {
                "fields": ["Size", "location", "Floor", "Transaction", "Furnishing", "Bathroom", "Balcony"],
                "values": [
                    [bhk, location, floor, transactionType, furnishing, bathroom, balcony]
                ]
            }
        ]
    };

    try {
        const token = await getToken();
        // Please use a local or cloud-based CORS proxy because I couldn't find any option in IBM Cloud for enabling CORS.
        const scoring_url = "http://localhost:8080/https://us-south.ml.cloud.ibm.com/ml/v4/deployments/613e95b2-e926-4e1a-b28a-928c9a821d56/predictions?version=2021-05-01";
        const prediction = await apiPost(scoring_url, token, payload);
        
        const resultContainer = document.getElementById("result");
        const predictionValue = prediction.predictions[0].values[0][0];
        const formattedValue = predictionValue.toFixed(2); // Convert to 2 decimal places
        resultContainer.textContent = `Predicted Price: ${formattedValue} lakh`;
        resultContainer.classList.add("visible");
    } catch (error) {
        console.error('Error:', error);
    }
});
