import React from 'react';
import SelectWorkoutDropdown from './SelectWorkoutDropdown';

function StartWorkout() {
  // get collection of workouts from db where [workoutdb].userId === auth.currentUser.uid
  // display dropdown with list of matching workouts.names
  // after a user clicks 'select' on a workout.name, next display dropdown of that workout objects.split (A, B, C).
  // after a user clicks 'select' on a split, next display that split's exercises with the ability to see, edit sets and reps and other details

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <h3 style={{margin: 0}}>Select a workout:</h3>
      <SelectWorkoutDropdown />
    </div>
  );
}

export default StartWorkout;