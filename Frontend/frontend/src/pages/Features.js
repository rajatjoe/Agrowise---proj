import React, { useState } from 'react';
import AddFarmForm from '../components/AddFarmForm';
import styled from 'styled-components';
import { farmData } from '../assets/data/farmData';
import FarmCard from '../components/FarmCard';

const Features = () => {
    const [showAddFarmForm, setShowAddFarmForm] = useState(false);

    const addFarmHandler = () => {
        setShowAddFarmForm(true);
    };

    const closeFormHandler = () => {
        setShowAddFarmForm(false);
    };


    return (

        <div className='feature-container'>


            <div className='feature-section-top'>

                <div className='feat-top-sect-heading'>
                    KEEP TRACK OF ALL YOUR FARMS:
                </div>


                <div className='farmBtn' onClick={addFarmHandler}>
                    FARM ADD +
                </div>
            </div>
            {showAddFarmForm && (
                <AddFarmForm onClose={closeFormHandler} />
            )}

            <div className='feature-section-farms'>
                <div className='farm-det'>FARMS :-</div>

                <div className='farm-container'>
                    {farmData.map((farm, index) => (
                        <FarmCard key={index} farm={farm} />
                    ))}

                    {/* YAHA PE AYEGA DATA MONGO SE 
                        use map and then use useffect to fetch the current info of the data */}
                </div>
            </div>



        </div>

    );
};

export default Features;