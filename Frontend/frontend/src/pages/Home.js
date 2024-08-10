import React from "react";
import AgroWiseHeader from "../components/AgroWiseHeader";
import CallToAction from "../components/CallToAction";
import HowItWorks from "../components/HowItWorks";
import WhyChooseAgroWise from "../components/WhyChooseAgroWise";

const Home = () => {
  return (
    <div className='mainContainer'>
      <div className="split">
      <AgroWiseHeader /> {/* Ensure this is correctly placed */}
      <div className="contentWrapper">
        <HowItWorks />
      </div>
      <WhyChooseAgroWise />
      <CallToAction />
      </div>
    </div>
  );
};

export default Home;