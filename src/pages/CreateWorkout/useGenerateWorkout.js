import React, { useEffect } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function useGenerateWorkout(workout) {
  const [generatedWorkout, setGeneratedWorkout] = React.useState(workout);

  const firestore = useFirestore();
  const exerciseCollection = collection(firestore, "exercises");
  const exerciseQuery = query(exerciseCollection, where("difficulty", "==", "medium"));

  console.log(exerciseQuery);
  const { status, data } = useFirestoreCollectionData(exerciseQuery, { idField: "id" });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return(
    <React.Fragment>
      <ul>
        {data.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </React.Fragment>
  )


  // useEffect(() => {
  //   setGeneratedWorkout(prev => ({ ...prev, test: "test" }));
  // }
  // , []);

  // return generatedWorkout;
}

export default useGenerateWorkout;