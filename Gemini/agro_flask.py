
from flask import Flask, request, jsonify
import google.generativeai as genai
import os
import pandas as pd
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Google Generative AI with API key from environment variable
genai_api_key = os.getenv('AIzaSyA7X260R0YSK_xoLUC5Q-p4pvbINlD-cEY')
genai.configure(api_key=genai_api_key)

# Load the CSV file once to avoid reloading in every request
df = pd.read_csv('Gemini/Crop_Recommendation.csv')

@app.route('/get_conditions', methods=['POST'])
def get_conditions():
    data = request.json

    user_data = data.get('userData')
    farm_data = data.get('farmData')

    input_crop = user_data.get('cropType')
    latitude = user_data.get('latitude')
    longitude = user_data.get('longitude')
    stage = user_data.get('growthStage')

    conditions_prompt = f"""
    {{For the crop '{input_crop}', provide the necessary conditions for optimal growth in the location on {latitude} and {longitude} and is in the {stage} of production.
    Tell the forward plan. Include:
    - Soil Type
    - Irrigation Needs
    - Climate Preferences
    - Common Pests and Diseases
    - Recommended Fertilizers
    - Planting Techniques
    - Nitrogen, Phosphorus, Potassium, Temperature, Humidity, pH Value, Rainfall requirements for the crop from the data provided.

    Output the conditions in JSON format with the following keys:
    - soil_type
    - irrigation_needs
    - climate_preferences
    - pests_and_diseases
    - recommended_fertilizers
    - planting_techniques

    Also, tell if it is practically possible to grow the crop in that region if it is in the initial stages (if seeding is not yet done).}}
    """
    response = genai.generate_text(conditions_prompt)
    return jsonify({'generated_text': response['text']})

@app.route('/get_recommendations', methods=['POST'])
def get_recommendations():
    data = request.json

    user_data = data.get('userData')
    farm_data = data.get('farmData')

    latitude = user_data.get('latitude')
    longitude = user_data.get('longitude')
    date = user_data.get('plantingDate')
    soil_type = farm_data.get('soilData')
    weather = farm_data.get('weatherData')
    farmer_experience = user_data.get('growthStage').lower()

    recommendation_prompt = f"""
    Based on previous recommendations and current conditions, provide updated and specific crop recommendations and cultivation tips for a farmer in location defined by the given latitudes and longitudes:
    - Latitude: {latitude}
    - Longitude: {longitude}
    - Date: {date}
    - Soil type: {soil_type}
    - Weather: {weather}
    - Experience: {farmer_experience.capitalize()}
    - Goal: Profitable crop

    Output the recommendations in JSON format with the following format:
    "recommended_crops": {
        "short_term": {
            "crop": "",
            "yield": "",
            "price_per_quintal": ""
        },
        "medium_term": {
            "crop": "",
            "yield": "",
            "price_per_quintal": ""
        }
    },
    "cultivation_tips": [
        {
            "tip": "",
            "explanation": ""
        }
    ],
    "additional_considerations": [
        {
            "consideration": "",
            "explanation": ""
        }
    ]
    Also include yield, price per quintal with the crops according to government data or the frequent data (if government data not available) of the country of the location detected by the latitude and longitude. Also, tell what location was detected.
    """

    if farmer_experience == "novice":
        recommendation_prompt += """
        Include basic explanations for each cultivation tip, focusing on first-time implementation.
        """
    elif farmer_experience == "intermediate":
        recommendation_prompt += """
        Provide explanations that assume a good understanding of basic farming practices.
        """
    else:  # advanced
        recommendation_prompt += """
        Provide advanced tips and techniques, assuming a high level of expertise.
        """

    response = genai.generate_text(recommendation_prompt)
    return jsonify({'generated_text': response['text']})

if __name__ == '__main__':
    app.run(debug=True, port=5001)

