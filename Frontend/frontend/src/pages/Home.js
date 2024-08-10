import React from 'react';
import AgroWiseHeader from '../components/AgroWiseHeader';
import CallToAction from '../components/CallToAction';
import HowItWorks from '../components/HowItWorks';
import WhyChooseAgroWise from '../components/WhyChooseAgroWise';


const Home = () => {
  return (
    <div className="mainContainer" >
      <AgroWiseHeader/>
      <div className="contentWrapper">
        <HowItWorks />
      </div>
      <WhyChooseAgroWise />
        <CallToAction />
    </div> 
  );
};

export default Home;