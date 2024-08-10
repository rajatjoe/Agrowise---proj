import React from 'react'
import axios from 'axios';

const Suggestion = () => {


  const suggBtnHandler = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
  
        try {
          // Replace with the actual Gemini API endpoint and necessary headers
          const response = await axios.get('https://api.gemini.com/endpoint', {
            params: {
              lat: latitude,
              lon: longitude
            },
            headers: {
              'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
              'Content-Type': 'application/json'
            } 
          });
  
          const data = response.data;
          console.log('Crop cultivation data:', data);
          // Process the data as required and update your UI
        } catch (error) {
          console.error('Error fetching data from Gemini API:', error);
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
          Analyze your farm's soil, water, and pesticides for optimal management strategies.
        </div>

        <div className='navBtn' onClick={suggBtnHandler}>
          LOCATION ACCESS
        </div>
      </div>

      {/* sug-right */}
      <div className='sug-right'>


      </div>
    </div>
  )
}

export default Suggestion