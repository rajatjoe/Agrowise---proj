import React from 'react';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

const sugData = [
  {
    "location": {
      "latitude": 23.0490112,
      "longitude": 72.5549056
    },
    "soil_type": "Sandy loam",
    "crops": [
      "Wheat",
      "Barley",
      "Mustard",
      "Cumin",
      "Coriander"
    ],
    "irrigation_facilities": [
      "Canal",
      "Tubewell",
      "Borewell"
    ]
  }
];

const Suggestion = () => {

  const suggBtnHandler = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Initialize Google Generative AI with the API key directly
          const genAI = new GoogleGenerativeAI('AIzaSyBLL8MMqLP7xH_ub47hFyUExUSc8rOCk80'); // Replace with your actual Google API key
          const model = await genAI.getGenerativeModel({ model: 'gemini-pro' });

          // Generate the prompt
          const prompt = `At latitude ${latitude} and longitude ${longitude}, provide details such as soil type, crops that can be grown, and irrigation facilities, all in JSON format.`;

          // Get the AI-generated content
          const result = await model.generateContent(prompt);
          const aiText = await result.response.text();
          console.log('AI Generated Text:', aiText);

          // Make a POST request to Gemini API with the generated content
          const geminiResponse = await axios.post('https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-bison:generateText', {
            lat: latitude,
            lon: longitude,
            prompt: aiText
          });

          const geminiData = geminiResponse.data;
          console.log('Crop cultivation data:', geminiData);
          // Here you can process the data and update your UI accordingly
        } catch (error) {
          if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
          } else if (error.request) {
            console.error('Error request:', error.request);
          } else {
            console.error('Error message:', error.message);
          }
          console.error('Error config:', error.config);
        }
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className='sug-container'>
      {/* sug-left */}
      <div className='sug-left'>
        <div className='sug-left-heading'>
          FARM ANALYSER
        </div>
        <div className='sug-desc'>
          Our service begins by gathering information about the user's location using geolocation data. This data is then analyzed to determine the suitability of farming at the specified location. We consider various factors such as soil quality, weather conditions throughout the year, and other environmental factors. Based on this analysis, we provide tailored recommendations to the farmer, which include details about the soil, weather patterns, and the most suitable crops to grow in that area.
        </div>

        <div className='navBtn' onClick={suggBtnHandler}>
          LOCATION ACCESS
        </div>
      </div>

      {/* sug-right */}
      <div className='sug-right'>
        <div className='sug-right-heading'>
          FARM ANALYSIS
        </div>
        {sugData.map((data, index) => (
          <div key={index} className='data-section sug-hs'>
            <div className='data-title'>Location:</div>
            <div className='data-item'>Latitude: {data.location.latitude}</div>
            <div className='data-item'>Longitude: {data.location.longitude}</div>

            <div className='data-title sug-hs'>Soil Type:</div>
            <div className='data-item'>{data.soil_type}</div>

            <div className='data-title sug-hs'>Crops That Can Be Grown:</div>
            <ul className='data-list'>
              {data.crops.map((crop, cropIndex) => (
                <li key={cropIndex} className='data-list-item'>{crop}</li>
              ))}
            </ul>

            <div className='data-title sug-hs'>Irrigation Facilities:</div>
            <ul className='data-list'>
              {data.irrigation_facilities.map((facility, facilityIndex) => (
                <li key={facilityIndex} className='data-list-item'>{facility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestion;
