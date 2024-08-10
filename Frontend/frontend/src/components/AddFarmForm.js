import React, { useState } from 'react';

const AddFarmForm = ({ onClose }) => {
  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => {
          console.error('Error obtaining location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (location) {
      // Fetch weather data based on location
      const weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_WEATHER_API_KEY&q=${location.latitude},${location.longitude}`);
      const weatherData = await weatherResponse.json();
      console.log('Weather Data:', weatherData);

      // Use Gemini API to suggest crops
      const geminiResponse = await fetch('https://gemini-api.com/suggest-crops', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_GEMINI_API_KEY`
        },
        body: JSON.stringify({
          location: location,
          weather: weatherData,
          startDate: startDate,
          additionalDetails: additionalDetails
        })
      });

      const cropSuggestions = await geminiResponse.json();
      console.log('Crop Suggestions:', cropSuggestions);
    }

    onClose();
  };

  return (
    <div className="add-farm-form">
      <h2>Add Farm</h2>
      <button onClick={handleGetLocation}>Get Location</button>
      {location && (
        <p>
          Location: Latitude {location.latitude}, Longitude {location.longitude}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          Additional Details:
          <textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddFarmForm;
