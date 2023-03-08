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
    // if (data) will make sure none of this block of code will run until data is loaded
    if (data) {
      if (workout.goals === "stability") {
        data.map(exercise => workoutArray.push({ ...exercise, sets: 3, reps: 15 }));
      } else if (workout.goals === "muscular-development") {
        data.map(exercise => workoutArray.push({ ...exercise, sets: 3, reps: 10 }));
      } else if (workout.goals === "maximal-strength") {
        data.map(exercise => workoutArray.push({ ...exercise, sets: 5, reps: 4 }));
      } else if (workout.goals === "power") {
        data.map(exercise => workoutArray.push({ ...exercise, sets: 3, reps: 9 }));
      }

    // based on user availability, divide workouts into workout.availability.days
    let ADay = [];
    let BDay = [];
    let CDay = [];
    if ((parseInt(workout.availability.days) <= 3 && workout.availability.consecutive) || workout.availability.days === "1") {
      // code full body workout 
    } else if ((parseInt(workout.availability.days) % 2 === 0) || workout.availability.days === "7") {
      // code 2 day split, upper body/shoulders, lower body/core/back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "back" || exercise.primaryMuscleGroup === "core" || exercise.primaryMuscleGroup === "lower body") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "shoulders" || exercise.primaryMuscleGroup === "chest") {
          BDay.push(exercise);
        }
      });
      workoutArray = [[...ADay], [...BDay]];
    } else if (parseInt(workout.availability.days) % 3 === 0) {
      // code 3 day split, upper body/shoulders, lower body, core/back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "chest" || exercise.primaryMuscleGroup === "shoulders") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "core" || exercise.primaryMuscleGroup === "back") {
          BDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "lower body") {
          CDay.push(exercise);
        }
      });
      workoutArray = [[...ADay], [...BDay], [...CDay]];
    }

    // filter out exercises that are add more than 1 core, 1 shoulder, 2 back, 1 chest, or 2 leg
  }

    setGeneratedWorkout(workoutArray);
  }, [data, workout.availability.consecutive, workout.availability.days, workout.fitnessLevel, workout.equipment, workout.goals]);
  
  if (status === "loading") {
    return <p>Loading...</p>;
  }

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