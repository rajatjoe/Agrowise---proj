import React from 'react';
// import '../css/AgroWise.module.css';

const HowItWorks = () => {
  const steps = [
    "Input Your Location and Soil Data: Enter your geographic location and basic soil information, or let us do the work through GPS and soil data integration.",
    "Analyze Environmental Conditions: Our system processes real-time climate data and historical weather patterns to assess your farm's specific needs.",
    "Get Tailored Crop Recommendations: Receive a list of crops best suited to your land, with insights on how to maximize yield and sustainability.",
    "Plan for Success: Utilize our additional tools to monitor market trends, plan crop rotations, and access sustainable farming practices."
  ];

  return (
    <div className="howItWorks">
      <h2 className="sectionTitle">How AgroWise Works:</h2>
      <ol className="stepsList">
        {steps.map((step, index) => (
          <li key={index} className="step">{index+1}.{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default HowItWorks;