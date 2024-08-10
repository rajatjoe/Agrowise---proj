const User = require("../models/User");

exports.postData = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { farmName, cropType, growthStage, location, plantationDate } = req.body;
    if ( farmName || cropType || growthStage || location || plantationDate) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
        farmName, 
        cropType, 
        growthStage, 
        location, 
        plantationDate,
        
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
