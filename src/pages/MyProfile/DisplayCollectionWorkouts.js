import React from 'react';
// import EditWorkoutForm from './EditWorkoutForm';
import { useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { deleteDoc, doc } from 'firebase/firestore';
import { auth } from '../../firebase';
import { db } from '../../firebase';

function DisplayCollectionWorkouts() {
  const [clickDetails, setClickDetails] = useState(false);
  const [clickEdit, setClickEdit] = useState(false);

  // get collection of workouts from db where [workoutdb].userId === auth.currentUser.uid
  const firestore = useFirestore();
  const userCreatedWorkoutsCollection = collection(firestore, 'userCreatedWorkouts');
  const userCreatedWorkoutsQuery = query(userCreatedWorkoutsCollection, where('userId', '==', auth.currentUser.uid));

  const { data } = useFirestoreCollectionData(userCreatedWorkoutsQuery, { idField: 'id' });
  
  async function handleDeleteWorkout(id) {
    // delete workout from db
    await deleteDoc(doc(db, "userCreatedWorkouts", id));
  }


  return(
    <React.Fragment>
      <h4>Collection of Workouts:</h4>
      <div style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
        {data.map(workout => (
          <div key={workout.id}>
            <h4>
              {workout.name}
            </h4>
            <p>goals: {workout.goals}</p>
            <button onClick={() => {setClickEdit(!clickEdit)}}>Edit</button>
            <button onClick={() => {handleDeleteWorkout(workout.id)}}>Delete</button>
            <button onClick={() => {setClickDetails(!clickDetails)}}>click here for more details</button>
            {clickDetails ? <p>get workout where this id === workout.id in db</p> : null}
          </div>
        ))}
      </div>
    
    </React.Fragment>
  );
}

export default DisplayCollectionWorkouts;