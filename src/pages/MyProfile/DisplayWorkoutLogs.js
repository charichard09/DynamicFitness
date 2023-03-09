import React from 'react';
import { useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { auth } from '../../firebase';

function DisplayWorkoutLogs() {
  const [clickDetails, setClickDetails] = useState(false);

  const firestore = useFirestore();

  const workoutLogs = collection(firestore, 'workoutLogs');
  const workoutLogsQuery = query(workoutLogs, where('userId', '==', auth.currentUser.uid));

  const { data: workoutLogsData } = useFirestoreCollectionData(workoutLogsQuery, { idField: 'id' });
  console.log("workoutLogsData:", workoutLogsData);

  return(
    <React.Fragment>
      <h4>Workout Logs:</h4>
      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-auto">
        {workoutLogsData ? workoutLogsData.map(workoutLog => (
          <div className="py-2" key={workoutLog.id}>
            <p>
              {new Date(workoutLog.date.seconds * 1000).toLocaleDateString()}
            </p>
            <p>
              Workout Name: {workoutLog.nameOfWorkout}   
            </p>
            <p>
              Split Day: {workoutLog.split}
            </p>
            <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-14 rounded" onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
            {clickDetails ? <p>get previous workout where this id === previousWorkout.id in db</p> : null}
          </div>
        )) : null }
      </div>
    </React.Fragment>
  );
}

export default DisplayWorkoutLogs;