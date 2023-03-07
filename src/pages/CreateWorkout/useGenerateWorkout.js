import React, { useEffect } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function useGenerateWorkout(workout) {

  const firestore = useFirestore();
  const exerciseCollection = collection(firestore, "exercises");
  const exerciseQuery = query(exerciseCollection, where("difficulty", "<=", workout.fitnessLevel), where("equipmentNeeded", "array-contains-any", workout.equipment));

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
          <div key={exercise.id}>
            <li>{exercise.name}</li>
            <img src={exercise.image[0]} alt="exercise in motion 1"></img>
            <img src={exercise.image[1]} alt="exercise in motion 2"></img>
            
            {/* <img href={exercise.img} alt={exercise.name} /> */}
          </div>
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