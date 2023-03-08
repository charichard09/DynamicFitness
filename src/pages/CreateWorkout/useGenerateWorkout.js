import React, { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function useGenerateWorkout(workout) {
  const [generatedWorkout, setGeneratedWorkout] = useState([]);

  const firestore = useFirestore();
  const exerciseCollection = collection(firestore, "exercises");
  const exerciseQuery = query(exerciseCollection, where("difficulty", "==", workout.fitnessLevel), where("equipmentNeeded", "array-contains-any", workout.equipment));

  const { status, data } = useFirestoreCollectionData(exerciseQuery, { idField: "id" });

  // 1 core, 1 shoulder, 2 back, 1 chest, 2 leg
  useEffect(() => {
    let workoutArray = [];
    
    // set each exercise to x sets and y reps based on goals
    if (workout.goals === "stability") {
      data.map(exercise => workoutArray.push({ ...exercise, sets: 3, reps: 15 }));
    } else if (workout.goals === "muscular-development") {
      data.map(exercise => workoutArray.push({ ...exercise, sets: 3, reps: 10 }));
    } else if (workout.goals === "maximal-strength") {
      data.map(exercise => workoutArray.push({ ...exercise, sets: 5, reps: 4 }));
    } else if (workout.goals === "power") {
      data.map(exercise => workoutArray.push({ ...exercise, sets: 3, reps: 9 }));
    }

    console.log(workoutArray);
    setGeneratedWorkout(workoutArray);
  }, [workout.goals, data]);
  
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  console.log(generatedWorkout);
  return generatedWorkout;
}

export default useGenerateWorkout;



  // commented out display of query results
  // return(
  //   <React.Fragment>
  //     <ul>
  //       {data.map(exercise => (
  //         <div key={exercise.id}>
  //           <li>{exercise.name}</li>
  //           <img src={exercise.image[0]} alt="exercise in motion 1"></img>
  //           <img src={exercise.image[1]} alt="exercise in motion 2"></img>
            
  //           {/* <img href={exercise.img} alt={exercise.name} /> */}
  //         </div>
  //       ))}
  //     </ul>
  //   </React.Fragment>
  // )