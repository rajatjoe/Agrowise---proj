import React from 'react';
import image from '../images/daniel-fazio-oK9EKfqv8HE-unsplash.jpg';
const AgroWiseHeader = () => {
  return (
    <div className="argoh">
      <div className='argoh-inner'>
        <h1>Welcome to AgroWise</h1>
        <p>
          "At AgroWise, we combine the power of technology and agriculture to help farmers make smarter decisions. Our crop recommendation system analyzes your local soil conditions, climate data, and seasonal patterns to provide personalized crop suggestions that optimize for yield, sustainability, and profitability."
        </p>
      </div>
      <div>
        <img src={image} loading='lazy' alt="imagxZe" className='image' />
      </div>
    </div>
  );
};

export default AgroWiseHeader;