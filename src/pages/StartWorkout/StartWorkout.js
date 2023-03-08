import React from 'react';
import SelectWorkoutDropdown from './SelectWorkoutDropdown';

function StartWorkout() {
  // get collection of workouts from db where [workoutdb].userId === auth.currentUser.uid
  // display dropdown with list of workouts.name
  // after a user selects a workout, display dropdown of workouts.

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <h3 style={{margin: 0}}>Select a workout:</h3>
      <SelectWorkoutDropdown />
    </div>
  );
}

export default StartWorkout;