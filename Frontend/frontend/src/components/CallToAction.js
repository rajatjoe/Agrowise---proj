import React from 'react';
import '../css/AgroWise.module.css';

const CallToAction = () => {
  return (
    <section className="callToAction">
      <h2 className="sectionTitle">Ready to Grow Smarter?</h2>
      <p className="ctaText">
        Join the future of farming with AgroWise. Sign up today and start optimizing your crops with the power of data.
      </p>
      <button className="ctaButton" onClick={() => console.log('Sign up clicked')}>
        Sign Up Now
      </button>
    </section>
  );
};

export default CallToAction;