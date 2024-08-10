import React from 'react';
import AgroWiseHeader from '../components/AgroWiseHeader';
import CallToAction from '../components/CallToAction';
import HowItWorks from '../components/HowItWorks';
import WhyChooseAgroWise from '../components/WhyChooseAgroWise';


const Home = () => {
  return (
    <div className="mainContainer" >
      <div className='home-intro'>
        <AgroWiseHeader />
      </div>
      <div className="contentWrapper">
        <HowItWorks />
      </div>

      <div>
        <WhyChooseAgroWise />
      </div>
      <div>
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;