import React from 'react';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Suggestion = () => {

  const suggBtnHandler = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Initialize Google Generative AI with the API key directly
          const genAI = new GoogleGenerativeAI('AIzaSyA-ExampleGoogleAPIKey'); // Replace with your actual Google API key
          const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-bison' });

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
          }, {
            headers: {
              'Authorization': `Bearer AIzaSyA7X260R0YSK_xoLUC5Q-p4pvbINlD-cEY`, // Replace with your actual Gemini API key
              'Content-Type': 'application/json'
            }
          });

          const geminiData = geminiResponse.data;
          console.log('Crop cultivation data:', geminiData);
          // Here you can process the data and update your UI accordingly
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
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
      </div>
    </div>
  );
}

export default Suggestion;
