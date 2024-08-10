import React, { useState } from 'react';
import AddFarmForm from '../components/AddFarmForm';

const Features = () => {
  const [showAddFarmForm, setShowAddFarmForm] = useState(false);

  return (
    <div>
      <h1>Features</h1>
      <button onClick={() => setShowAddFarmForm(true)}>Add Farm</button>
      {showAddFarmForm && (
        <AddFarmForm onClose={() => setShowAddFarmForm(false)} />
      )}
    </div>
  );
}

export default Features;
