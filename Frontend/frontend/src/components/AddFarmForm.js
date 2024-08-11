import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #222;
  color: #eee;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-radius: 12px;
  width: 600px;
  border: 2px solid white; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const FormGroup = styled.div`
  width: 400px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #555;
  border-radius: 8px;
  width: 400px;
  background: #333;
  color: #eee;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #555;
  border-radius: 8px;
  width: 400px;
  background: #333;
  color: #eee;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.2s;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  &[type="button"] {
    background-color: #555;
    color: #eee;
  }

  &[type="button"]:hover {
    background-color: #666;
    transform: scale(1.05);
  }
`;

const Error = styled.div`
  color: red;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;

const AddFarmForm = ({ onClose }) => {
  const [location, setLocation] = useState(null);
  const [farmName, setFarmName] = useState('');
  const [cropType, setCropType] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [plantingDate, setPlantingDate] = useState('');
  const [soilData, setSoilData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loadingSoil, setLoadingSoil] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      }, () => {
        alert("Failed to get location.");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      setLoadingWeather(true);
      fetchWeatherData();
    }
  }, [location]);

  useEffect(() => {
    if (location) {
      setLoadingSoil(true);
      fetchSoilType();
    }
  }, [weatherData]);

  const fetchSoilType = async () => {
    if (!location) return;

    const { latitude, longitude } = location;
    const url = `https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${longitude}&lat=${latitude}&property=bdod&property=cec&property=cfvo&property=clay&property=nitrogen&property=ocd&property=ocs&property=phh2o&property=sand&property=silt&property=soc&property=wv0010&property=wv0033&property=wv1500&depth=0-5cm&depth=0-30cm&depth=5-15cm&depth=15-30cm&depth=30-60cm&depth=60-100cm&depth=100-200cm&value=Q0.5&value=Q0.05&value=Q0.95&value=mean&value=uncertainty;`

    try {
      const response = await axios.get(url);
      setSoilData(response.data);
    } catch (error) {
      setError("Failed to retrieve soil data: " + (error.response ? error.response.status : error.message));
    } finally {
      setLoadingSoil(false);
    }
  };

  const fetchWeatherData = async () => {
    if (!location) return;

    const { latitude, longitude } = location;
    const apiKey = '110373276c613ce995737f649444fd55';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      setError("Failed to retrieve weather data: " + (error.response ? error.response.status : error.message));
    } finally {
      setLoadingWeather(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!weatherData) {
      alert("Please wait for the soil and weather data to load.");
      return;
    }

    const userData = {
      location,
      farmName,
      cropType,
      growthStage,
      plantingDate,
    };
    
    const farmData = {
      soilData,
      weatherData
    }

    try {
      await axios.post('http://10.200.23.112:5000/api/addFarm', userData);
      const response = await axios.post("http://127.0.0.1:5001/get_recommendations",{userData,farmData})
      const response1 = await axios.post("http://127.0.0.1:5001/get_conditions",{userData,farmData})
      console.log("Recommendations Response:", response.data);
      console.log("Conditions Response:", response1.data);
      alert("Farm added successfully!");
      
      onClose();
    } catch (error) {
      setError("Failed to add farm: " + (error.response ? error.response.status : error.message));
    }
  };

  return (
    <Popup>
      <Form onSubmit={submitHandler}>
        <h2 style={{ textAlign: 'center' }}>Add Farm</h2>
        <FormGroup>
          <Label>Farm Name:</Label>
          <Input
            type="text"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Crop Type:</Label>
          <Input
            type="text"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Growth Stage:</Label>
          <Select
            value={growthStage}
            onChange={(e) => setGrowthStage(e.target.value)}
            required
          >
            <option value="">Select Stage</option>
            <option value="seed">Seed</option>
            <option value="plantation">Plantation</option>
            <option value="growing">Growing</option>
            <option value="harvesting">Harvesting</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Planting Date:</Label>
          <Input
            type="date"
            value={plantingDate}
            onChange={(e) => setPlantingDate(e.target.value)}
            required
          />
        </FormGroup>
        {error && <Error>{error}</Error>}
        {(loadingWeather) && <Loader>Loading data...</Loader>}
        <div>
          <Button type="submit">Add Farm</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </div>
      </Form>
    </Popup>
  );
};

export default AddFarmForm;
