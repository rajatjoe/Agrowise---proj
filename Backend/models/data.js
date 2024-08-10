// ./models/data.js
const mongoose = require('mongoose');

const FarmSchema = new mongoose.Schema({
    farmName: {
        type: String,
        required: true
    },
    cropType: {
        type: String,
        required: true
    },
    growthStage: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    plantingDate: {
        type: Date, 
        required: true
    },
}, {
    collection: "userdata"
});

module.exports = mongoose.model("Farm", FarmSchema);