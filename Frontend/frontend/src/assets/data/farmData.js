export const farmData = [
    {
        "farmName": "Green Valley Farm",
        "cropDetails": {
            "cropType": "Wheat",
            "growthStage": "Tillering",
            "plantationDate": "2024-04-15",
            "stepsToTakeNow": [
                "Monitor for pest infestations and apply pesticides if necessary.",
                "Ensure proper irrigation to maintain soil moisture.",
                "Apply nitrogen fertilizer to promote healthy growth."
            ],
            "suggestionsForStage": [
                "Check for signs of nutrient deficiencies and address accordingly.",
                "Avoid waterlogging and ensure proper drainage.",
                "Conduct soil testing to determine nutrient levels."
            ]
        },
        "soilDetails": {
            "soilType": "Loam",
            "soilPH": "6.5",
            "soilNutrients": {
                "Nitrogen": "Medium",
                "Phosphorus": "High",
                "Potassium": "Medium"
            }
        },
        "weatherDetails": {
            "averageTemperature": "20°C",
            "rainfall": "300mm/year"
        },
        "equipmentDetails": {
            "irrigationFacilities": "Sprinkler system"
        },
        "aerialViewImage": "../images/arielview.jpg",
        "location": {
            "latitude": 23.0490112,
            "longitude": 72.5549056
        }
    },
    {
        "farmName": "Sunny Acres Farm",
        "cropDetails": {
            "cropType": "Corn",
            "growthStage": "Vegetative",
            "plantationDate": "2024-05-10",
            "stepsToTakeNow": [
                "Apply herbicides to control weeds.",
                "Ensure consistent watering to support rapid growth.",
                "Conduct foliar feeding with micronutrients."
            ],
            "suggestionsForStage": [
                "Check for signs of pest and disease outbreaks.",
                "Optimize soil aeration to promote root development.",
                "Monitor soil moisture levels regularly."
            ]
        },
        "soilDetails": {
            "soilType": "Clay loam",
            "soilPH": "6.8",
            "soilNutrients": {
                "Nitrogen": "High",
                "Phosphorus": "Medium",
                "Potassium": "High"
            }
        },
        "weatherDetails": {
            "averageTemperature": "25°C",
            "rainfall": "400mm/year"
        },
        "equipmentDetails": {
            "irrigationFacilities": "Drip irrigation"
        },
        "aerialViewImage": "https://maps.googleapis.com/maps/api/staticmap?center=36.7783,-119.4179&zoom=14&size=600x300&key=YOUR_API_KEY",
        "location": {
            "latitude": 36.7783,
            "longitude": -119.4179
        }
    }
];
