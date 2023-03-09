import React, { useEffect, useState } from 'react';
import SelectWorkoutDropdown from './SelectWorkoutDropdown';
import SelectSplitDropdown from './SelectSplitDropdown';
import Stopwatch from './Stopwatch';
import WorkoutForm from './WorkoutForm';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { auth } from '../../firebase';

function StartWorkout() {
  const [nameOfWorkout, setNameOfWorkout] = useState(null);
  const [allSplitsOfWorkout, setAllSplitsOfWorkout] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [splitOfWorkout, setSplitOfWorkout] = useState(null);
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);

  // get collection of workouts from db where [workoutdb].userId === auth.currentUser.uid
  const firestore = useFirestore();
  const userCreatedWorkoutsCollection = collection(firestore, 'userCreatedWorkouts');
  const userCreatedWorkoutsQuery = query(userCreatedWorkoutsCollection, where('userId', '==', auth.currentUser.uid));

  const { data } = useFirestoreCollectionData(userCreatedWorkoutsQuery, { idField: 'id' });

  useEffect(() => {
    if (workout) {
      setAllSplitsOfWorkout(workout.split);
    }
  }, [nameOfWorkout, workout, allSplitsOfWorkout]);

  // display dropdown with list of matching workouts.names
  // after a user clicks 'select' on a workout.name, next display dropdown of that workout objects.split (A, B, C).
  function handleSelectingWorkout(selectedWorkout) {
    setNameOfWorkout(selectedWorkout);

    // find matching name to workout object
    setWorkout(data.find(workout => workout.name === selectedWorkout));
  }

  function handleSelectingSplit (selectedSplit) {
    setSplitOfWorkout(selectedSplit);
    setShowWorkoutForm(true);
    console.log("selectedSplitChosen is an array of all exercise objects for X Day:", splitOfWorkout);
  }

  return (
    <div className="overflow-auto w-full h-screen flex-auto" style={{ "backgroundColor": "RGB(255, 205, 41)"}}>
      <h3 className="pl-2 text-2xl font-bold pt-2 mb-3" >Select a workout:</h3>
      <SelectWorkoutDropdown allWorkouts={data} onSelectingWorkout={handleSelectingWorkout} />
      {nameOfWorkout ? <SelectSplitDropdown splits={allSplitsOfWorkout} onSelectingSplit={handleSelectingSplit} /> : null }
      {showWorkoutForm ? <WorkoutForm splitOfWorkout={splitOfWorkout} workout={workout} nameOfWorkout={nameOfWorkout}  /> : null}
    </div>
  );
}

export default StartWorkout;