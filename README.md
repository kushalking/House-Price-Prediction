# House Price Prediction 🏠💰

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![IBM Cloud](https://img.shields.io/badge/IBM_Cloud-Powered-blue.svg)](https://www.ibm.com/cloud)

Predict real estate prices accurately with this end-to-end machine learning project, leveraging real-world data and IBM Watson's powerful AutoAI.

## Table of Contents
- [Overview](#overview)
- [Data Collection & Preprocessing](#data-collection--preprocessing)
- [IBM Watson AutoAI](#ibm-watson-autoai)
- [Model Selection & Deployment](#model-selection--deployment)
- [Web Application](#web-application)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project combines data collection, preprocessing, automated machine learning with IBM Watson, and a user-friendly web interface for predicting house prices.

## Data Collection & Preprocessing
- **Sources:** 
    - Kaggle datasets
    - Government real estate portals
    - Real estate company websites
- **Preprocessing:**
    - Handling missing values (imputation/removal)
    - Converting text data to numerical format
    - Cleaning and standardizing data

## IBM Watson AutoAI
- **Automated Pipeline:** Leveraged IBM Watson Studio AutoAI to automate:
    - Feature engineering
    - Model selection (Random Forest, XGBoost, etc.)
    - Hyperparameter tuning
- **Train/Test Split:** 90% training data, 10% testing data

## Model Selection & Deployment
- **Best Model:** Random Forest Regressor (RMSE: 53.746)
- **Deployment:** Deployed the optimized model to IBM Cloud for easy access via an API endpoint.

## Web Application
- **Tech Stack:** HTML, CSS, JavaScript
- **Functionality:**
    - User inputs house features (e.g., size, location, rooms)
    - Calls the IBM Cloud model endpoint
    - Displays the predicted house price

## Usage
1. Clone this repository: `git clone https://github.com/your-username/house-price-prediction.git`
2. (Optional) Set up a virtual environment: `python -m venv venv`
3. Launch the web app:
    - Open `index.html` in your web browser
    - Enter house details in the form
    - Click "Predict" to see the estimated price

## Repository Structure
- `data/`: (Optional) Sample data or scripts for fetching data
- `notebooks/`: (Optional) Jupyter notebooks for exploration and analysis
- `app/`: HTML, CSS, JavaScript files for the web application
- `model/`: (Optional) Model files or artifacts (if not using IBM Cloud deployment)




## Deployment Endpoint Url :
[Link](https://us-south.ml.cloud.ibm.com/ml/v4/deployments/2a0c52c5-766a-451c-a1bf-697416a0f320/predictions?version=2021-05-01)

### Repository link :
[Link](https://github.com/kushalking/House-Price-Prediction)


## Screenshots

[![2024-08-04-02-13-07.png](https://i.postimg.cc/QtG4sxh5/2024-08-04-02-13-07.png)](https://postimg.cc/kVsFvCVX)


[![2024-08-04-23-34-24.png](https://i.postimg.cc/SRXJrqYT/2024-08-04-23-34-24.png)](https://postimg.cc/q6TJJPLy)



## Contributing
Feel free to fork and submit pull requests!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


