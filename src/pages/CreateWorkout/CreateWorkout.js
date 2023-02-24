import React from 'react';
import FitnessLevelForm from './FitnessLevelForm';

function CreateWorkout() {
  
  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <h3 style={{margin: 0}}>What is your fitness level? (dynamic)</h3>
      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <FitnessLevelForm />
      </div>

    </div>
  );
}

export default CreateWorkout;