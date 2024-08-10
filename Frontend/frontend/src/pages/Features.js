import React, { useState } from 'react';
import AddFarmForm from '../components/AddFarmForm';

const Features = () => {
    const [showAddFarmForm, setShowAddFarmForm] = useState(false);

    const addFarmHandler = () => {
        setShowAddFarmForm(true);
    };

    const closeFormHandler = () => {
        setShowAddFarmForm(false);
    };


    return (
        <div>
            <div className='feature-container'>


                <div className='feature-section-top'>
                    <div className='farmBtn' onClick={addFarmHandler}>
                        FARM ADD +
                    </div>
                </div>
                {showAddFarmForm && (
                    <AddFarmForm onClose={closeFormHandler} />
                )}

                <div className='feature-section-farms'>
                    <div className='farm-det'>FARM DETAILS</div>

                    <div className='farm-container'>
                        {/* YAHA PE AYEGA DATA MONGO SE 
                        use map and then use useffect to fetch the current info of the data */}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Features;
