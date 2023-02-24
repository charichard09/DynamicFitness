import React from 'react';
import SelectWorkoutDropdown from './SelectWorkoutDropdown';

function StartWorkout() {

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <h3 style={{margin: 0}}>Select a workout:</h3>
      <SelectWorkoutDropdown />
    </div>
  );
}

export default StartWorkout;