import React, { useEffect, useState } from 'react';
import SelectWorkoutDropdown from './SelectWorkoutDropdown';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { auth } from '../../firebase';
import SelectSplitDropdown from './SelectSplitDropdown';

function StartWorkout() {
  const [nameOfWorkout, setNameOfWorkout] = useState(null);
  const [splitOfWorkout, setSplitOfWorkout] = useState(null);
  const [splitDropdownHidden, setSplitDropdownHidden] = useState(true);
  const [workout, setWorkout] = useState(null);

  // get collection of workouts from db where [workoutdb].userId === auth.currentUser.uid
  const firestore = useFirestore();
  const userCreatedWorkoutsCollection = collection(firestore, 'userCreatedWorkouts');
  const userCreatedWorkoutsQuery = query(userCreatedWorkoutsCollection, where('userId', '==', auth.currentUser.uid));

  const { data } = useFirestoreCollectionData(userCreatedWorkoutsQuery, { idField: 'id' });
  // let tempObjectOfWorkouts = {};
  // if (data) {
  //   data.forEach(workout => {
  //     tempObjectOfWorkouts[workout.name] = workout;
  //   });
  // }

  useEffect(() => {
    setSplitDropdownHidden(false);
    console.log("workout: ", workout);
    if (workout) {
      setSplitOfWorkout(workout.split);
    }
    console.log("splitOfWorkout: ", splitOfWorkout);
  }, [nameOfWorkout, workout, splitOfWorkout]);

  // display dropdown with list of matching workouts.names
  // after a user clicks 'select' on a workout.name, next display dropdown of that workout objects.split (A, B, C).
  function handleSelectingWorkout(selectedWorkout) {
    console.log("selected workout:", selectedWorkout);
    console.log(data)
    setNameOfWorkout(selectedWorkout);

    // find matching name to workout object
    setWorkout(data.find(workout => workout.name === selectedWorkout));
    
  }

  function handleSelectingSplit (selectedSplit) {
    console.log("selected split:", selectedSplit);
    setSplitOfWorkout(selectedSplit);
  }

  console.log("splitOfWorkout: ", splitOfWorkout);

  // after a user clicks 'select' on a split, next display that split's exercises with the ability to see, edit sets and reps and other details



  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      {/* {data ? data.map(workout => (<p key={workout.id}>{workout.split.ADay[0].name}</p>)) : null} */}
      <h3 style={{margin: 0}}>Select a workout:</h3>
      <SelectWorkoutDropdown allWorkouts={data} onSelectingWorkout={handleSelectingWorkout}/>
      {splitOfWorkout ? <SelectSplitDropdown splits={splitOfWorkout} onSelectingSplit={handleSelectingSplit}/> : null }
    </div>
  );
}

export default StartWorkout;