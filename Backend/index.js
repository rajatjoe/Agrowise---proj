const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
    console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
  });
  
  dbConnect();