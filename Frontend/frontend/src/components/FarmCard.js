import React, { useState } from 'react';

const FarmCard = ({ farm }) => {
  const [showCropDetails, setShowCropDetails] = useState(false);
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);
  const [showSoilDetails, setShowSoilDetails] = useState(false);
  const [showAerialView, setShowAerialView] = useState(false);

  return (
    <div className="farm-card">
      <h2>{farm.farmName}</h2>

      <div >
        <button onClick={() => setShowCropDetails(!showCropDetails)}>
          {showCropDetails ? 'Hide Crop Details' : 'Show Crop Details'}
        </button>
        {showCropDetails && (
          <div className="dropdown-content">
            <p><strong>Crop Type:</strong> {farm.cropDetails.cropType}</p>
            <p><strong>Growth Stage:</strong> {farm.cropDetails.growthStage}</p>
            <p><strong>Plantation Date:</strong> {new Date(farm.cropDetails.plantationDate).toDateString()}</p>
            <div>
              <strong>Steps to Take Now:</strong>
              <ul>
                {farm.cropDetails.stepsToTakeNow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Suggestions for Stage:</strong>
              <ul>
                {farm.cropDetails.suggestionsForStage.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowWeatherDetails(!showWeatherDetails)}>
          {showWeatherDetails ? 'Hide Weather Details' : 'Show Weather Details'}
        </button>
        {showWeatherDetails && (
          <div className="dropdown-content">
            <p><strong>Average Temperature:</strong> {farm.weatherDetails.averageTemperature}</p>
            <p><strong>Rainfall:</strong> {farm.weatherDetails.rainfall}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowSoilDetails(!showSoilDetails)}>
          {showSoilDetails ? 'Hide Soil Details' : 'Show Soil Details'}
        </button>
        {showSoilDetails && (
          <div className="dropdown-content">
            <p><strong>Soil Type:</strong> {farm.soilDetails.soilType}</p>
            <p><strong>Soil pH:</strong> {farm.soilDetails.soilPH}</p>
            <p><strong>Soil Nutrients:</strong> Nitrogen: {farm.soilDetails.soilNutrients.Nitrogen}, Phosphorus: {farm.soilDetails.soilNutrients.Phosphorus}, Potassium: {farm.soilDetails.soilNutrients.Potassium}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowAerialView(!showAerialView)}>
          {showAerialView ? 'Hide Aerial View' : 'Show Aerial View'}
        </button>
        {showAerialView && (
          <div className="dropdown-content">
            <img src={farm.aerialViewImage} alt="Aerial View" />
          </div>
        )}
      </div>

      <div className='latlong'>
        <strong>Location:</strong> Latitude: {farm.location.latitude}, Longitude: {farm.location.longitude}
      </div>
    </div>
  );
};

export default FarmCard;
