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
      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-5 m-5 flex-col h-96 overflow-scroll">
        {data ? data.map(workout => (
          <div className="py-2" key={workout.id}>
            <h4>
              {workout.name}
            </h4>
            <p>goals: {workout.goals}</p>
            <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 mt-2 mb-1 ml-1 rounded" onClick={() => {setClickEdit(!clickEdit)}}>Edit</button>
            <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 mt-2 mb-1 ml-1 rounded" onClick={() => {handleDeleteWorkout(workout.id)}}>Delete</button>
            <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 mt-2 mb-1 ml-1 rounded" onClick={() => {setClickDetails(!clickDetails)}}>click here for more details</button>
            {clickDetails ? <p>get workout where this id === workout.id in db</p> : null}
          </div>
        )) : null}
      </div>
    
    </React.Fragment>
  );
}

export default DisplayCollectionWorkouts;