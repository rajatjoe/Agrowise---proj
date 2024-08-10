import React from 'react';
import '../css/AgroWise.module.css';
import image from '../images/daniel-fazio-oK9EKfqv8HE-unsplash.jpg';
const AgroWiseHeader = () => {
  return (
    <div className="argoh">
        <h1>Welcome to AgroWise</h1>
        <p>
          "At AgroWise, we combine the power of technology and agriculture to help farmers make smarter decisions. Our crop recommendation system analyzes your local soil conditions, climate data, and seasonal patterns to provide personalized crop suggestions that optimize for yield, sustainability, and profitability."
        </p>
      <div>
        <img src={image} loading='lazy' alt="image" className='image' />
      </div>
    </div>
  );
};

export default AgroWiseHeader;