import React, { useEffect } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function useGenerateWorkout(workout) {

  const firestore = useFirestore();
  const exerciseCollection = collection(firestore, "exercises");
  const exerciseQuery = query(exerciseCollection, where("difficulty", "<=", workout.fitnessLevel));

  const { status, data } = useFirestoreCollectionData(exerciseQuery, { idField: "id" });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // calculate workout for chest

  // calculate workout for back

  // calculate workout for legs

  // calculate workout for core/shoulders

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