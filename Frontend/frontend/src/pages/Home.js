import React from 'react';
import AgroWiseHeader from '../components/AgroWiseHeader';
import CallToAction from '../components/CallToAction';
import HowItWorks from '../components/HowItWorks';
import WhyChooseAgroWise from '../components/WhyChooseAgroWise';


const Home = () => {
  return (
<<<<<<< HEAD
    <div className='mainContainer'>
      <div className="split">
      <AgroWiseHeader /> {/* Ensure this is correctly placed */}
      <div className="contentWrapper">
        <HowItWorks />
      </div>
      <WhyChooseAgroWise />
      <CallToAction />
=======
    <div className="mainContainer" >
      <AgroWiseHeader/>
      <div className="contentWrapper">
        <HowItWorks />
>>>>>>> 25391c22eefe54048c640bba353272bb6a555c03
      </div>
      <WhyChooseAgroWise />
        <CallToAction />
    </div> 
  );
};

export default Home;