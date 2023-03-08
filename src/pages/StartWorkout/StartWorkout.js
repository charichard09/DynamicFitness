import React from 'react';
import SelectWorkoutDropdown from './SelectWorkoutDropdown';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { auth } from '../../firebase';

function StartWorkout() {
  // get collection of workouts from db where [workoutdb].userId === auth.currentUser.uid

  const firestore = useFirestore();
  const userCreatedWorkoutsCollection = collection(firestore, 'userCreatedWorkouts');
  console.log("userId:", auth.currentUser.uid)
  const userCreatedWorkoutsQuery = query(userCreatedWorkoutsCollection, where('userId', '==', auth.currentUser.uid));
  const { data } = useFirestoreCollectionData(userCreatedWorkoutsQuery, { idField: 'id' });
  
  let tempObjectOfWorkouts = {};
  if (data) {
    console.log("data:", data);
    data.forEach(workout => {
      tempObjectOfWorkouts[workout.name] = workout;
    });
    console.log("tempObjectOfWorkouts:", tempObjectOfWorkouts);
  }

  // display dropdown with list of matching workouts.names



  // after a user clicks 'select' on a workout.name, next display dropdown of that workout objects.split (A, B, C).
  // after a user clicks 'select' on a split, next display that split's exercises with the ability to see, edit sets and reps and other details

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      {data ? data.map(workout => (<p key={workout.id}>{workout.split.ADay[0].name}</p>)) : null}
      <h3 style={{margin: 0}}>Select a workout:</h3>
      <SelectWorkoutDropdown />
    </div>
  );
}

export default StartWorkout;