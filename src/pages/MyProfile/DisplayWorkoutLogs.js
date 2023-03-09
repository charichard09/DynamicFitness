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
      <div style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
        {workoutLogsData.map(workoutLog => (
          <div key={workoutLog.id}>
            <p>
              {new Date(workoutLog.date.seconds * 1000).toLocaleDateString()}
            </p>
            <p>
              Workout Name: {workoutLog.nameOfWorkout}   
            </p>
            <p>
              Split Day: {workoutLog.split}
            </p>
            <button onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
            {clickDetails ? <p>get previous workout where this id === previousWorkout.id in db</p> : null}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default DisplayWorkoutLogs;