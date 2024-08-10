import React, { useState, useEffect } from 'react';
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
  border: 2px solid white; /* White border */
  display:flex;
  justify-content: center;
  align-items: center; /* Center align content */ 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align form inputs */
  width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 400px; /* Ensure full width */
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
    const farmData = {
      location,
      farmName,
      cropType,
      growthStage,
      plantingDate,
    };

    // Here, you can integrate the Gemini API to track the crop stage.
    // Example: await trackCropStageWithGeminiAPI(farmData);

    console.log(farmData);
    onClose();
  };

  return (
    <Popup>
      <Form onSubmit={submitHandler}>
        <h2 style={{ textAlign: 'center' }}>Add Farm</h2> {/* Center align heading */}
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
