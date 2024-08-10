import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #222;
  color: #eee;
  ${'' /* padding: 20px; */}
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-radius: 12px;
  width: 90vw; /* Adjust width to be responsive */
  max-width: 600px; /* Set a maximum width */
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Stretch inputs to fill available width */
`;

const FormGroup = styled.div`
  ${'' /* margin-bottom: 16px; */}
`;

const Label = styled.label`
  ${'' /* margin-bottom: 8px; */}
  font-weight: bold;
  font-size: 14px; /* Slightly smaller font size */
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px; /* Slightly smaller font size */
  border: 1px solid #555;
  border-radius: 8px;
  width: 100%; /* Full width of the parent */
  background: #333;
  color: #eee;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px; /* Slightly smaller font size */
  border: 1px solid #555;
  border-radius: 8px;
  width: 100%; /* Full width of the parent */
  background: #333;
  color: #eee;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 14px; /* Slightly smaller font size */
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.2s;
  margin-bottom:10px;

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

const AddFarmForm = ({ onClose }) => {
  const [location, setLocation] = useState(null);
  const [farmName, setFarmName] = useState('');
  const [cropType, setCropType] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [plantingDate, setPlantingDate] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (!location) {
      alert("Location is not available.");
      return;
    }
  
    const farmData = {
      location,
      farmName,
      cropType,
      growthStage,
      plantingDate,
    };
  
    try {
      const response = await fetch('/api/v1/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(farmData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const result = await response.json();
      console.log(result);
      onClose();
    } catch (error) {
      console.error('Error:', error);
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
        <div>
          <Button type="submit">Add Farm</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </div>
      </Form>
    </Popup>
  );
};

export default AddFarmForm;
