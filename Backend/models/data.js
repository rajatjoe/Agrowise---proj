const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    plantationDate: {
        type: Number,
        required: true
    },
    soildata: {
        type: String,
        required: true
    },
    weatherdata: {
        type: String,
        required: true
    }
}, {
    collection: "userdata"
});

mongoose.model("userdata", UserDataSchema);