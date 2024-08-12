const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const util = require('util');

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://127.0.0.1:5001']
}

const app = express();
app.use(cors(corsOption));  
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const mongoUrl = "mongodb://localhost:27017/";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error connecting to MongoDB:", e);
    });

try {
    require('./models/data');
} catch (error) {
    console.error('Error requiring data model:', error);
}

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

app.post("/get_recommendations", async (req, res) => {
    try {
        const { userData, farmData } = req.body;
        const response = await axios.post("http://127.0.0.1:5001/get_recommendations", { userData, farmData });
        
        // Convert response data to a string safely
        const responseString = util.inspect(response.data, { depth: null });

        // Ensure the directory exists
        const logDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }

        // Write the log file
        fs.writeFile(path.join(logDir, "get_reccom.log"), responseString, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Failed to load recommendations');
        
        // Handle the error log
        const errorString = util.inspect(error, { depth: null });
        fs.writeFile(path.join(__dirname, 'logs', "error1.log"), errorString, (err) => {
            if (err) {
                console.error('Error writing to error log file:', err);
            }
        });
    }
});

app.post("/get_conditions", async (req, res) => {
    try {
        const { userData, farmData } = req.body;
        const response = await axios.post("http://127.0.0.1:5001/get_conditions", { userData, farmData });

        // Convert response data to a string safely
        const responseString = util.inspect(response.data, { depth: null });

        // Ensure the directory exists
        const logDir = path.join(__dirname, 'logs');
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }

        // Write the log file
        fs.writeFile(path.join(logDir, "get_conditions.log"), responseString, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
        res.send(response.data);
    } catch (error) {
        // Handle the error log
        const errorString = util.inspect(error, { depth: null });
        fs.writeFile(path.join(__dirname, 'logs', "error2.log"), errorString, (err) => {
            if (err) {
                console.error('Error writing to error log file:', err);
            }
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
