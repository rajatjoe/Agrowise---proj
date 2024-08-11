const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
require("../models/data");

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all origins

const mongoUrl = "mongodb+srv://22bcm053:LuGRCsOmyNkxjyEd@cluster0.2kijy.mongodb.net/farmerdata?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error connecting to MongoDB:", e);
    });


const Farm = mongoose.model("Farm");

app.get('/', (req, res) => {
    res.send({ status: "Server is running" });
});

app.post('/api/addFarm', async (req, res) => {
    const { location, farmName, cropType, growthStage, plantingDate } = req.body;

    if (!location || !farmName || !cropType || !growthStage || !plantingDate) {
        return res.status(400).send('Missing required fields');
    }

    try {
        await Farm.create({
            farmName,
            cropType,
            growthStage,
            latitude: location.latitude,
            longitude: location.longitude,
            plantingDate: plantingDate
        });
        res.status(201).send('Farm added successfully');
    } catch (error) {
        console.error('Error adding farm:', error); 
        res.status(500).send('Failed to add farm');
    }
});

// require("dotenv").config();

const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
