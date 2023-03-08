import { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { query, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function useGenerateWorkout(workout) {
  const [generatedWorkout, setGeneratedWorkout] = useState([]);

  const firestore = useFirestore();
  const exerciseCollection = collection(firestore, "exercises");
  const exerciseQuery = query(exerciseCollection, where("difficulty", "==", workout.fitnessLevel), where("equipmentNeeded", "array-contains-any", workout.equipment));
  const { status, data } = useFirestoreCollectionData(exerciseQuery, { idField: "id" });
  
  useEffect(() => {
    // if (data) will make sure none of this block of code will run until data is loaded
    if (data) {
      const workoutArray = generateWorkoutArrayWithGoals(data, workout.goals);
      const dividedWorkoutArray = divideWorkoutArray(workoutArray, workout.availability);

    // TODO: filter out exercises that are add more than 1 core, 1 shoulder, 2 back, 1 chest, or 2 leg

    setGeneratedWorkout(dividedWorkoutArray);
  }

  }, [data, workout.goals, workout.availability]);

  // set each exercise to x sets and y reps based on goals
  function generateWorkoutArrayWithGoals(data, goals) {
    let workoutArray = [];
    data.forEach(exercise => {
      switch (goals) {
        case "stability":
          workoutArray.push({ ...exercise, sets: 3, reps: 15 });
          break;
        case "muscular-development":
          workoutArray.push({ ...exercise, sets: 3, reps: 10 });
          break;
        case "maximal-strength":
          workoutArray.push({ ...exercise, sets: 5, reps: 4 });
          break;
        case "power":
          workoutArray.push({ ...exercise, sets: 3, reps: 9 });
          break;
        default:
          break;
      }
    });
    return workoutArray;
  }

  function divideWorkoutArray(workoutArray, availability) {
    let dividedWorkoutArray = [];
    let ADay = [];
    let BDay = [];
    let CDay = [];
    let DDay = [];
    let EDay = [];
    if ((parseInt(availability.days) <= 3 && !availability.consecutive) || availability.days === "1") {
        // code full body workout 
      console.log(workoutArray);
    } else if ((parseInt(availability.days) % 2 === 0) || availability.days === "7") {
      // code 2 day split, upper body/shoulders, lower body/core/back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "back" || exercise.primaryMuscleGroup === "core" || exercise.primaryMuscleGroup === "lower body") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "shoulders" || exercise.primaryMuscleGroup === "chest") {
          BDay.push(exercise);
        }
      });
      dividedWorkoutArray = [[...ADay], [...BDay]];
    } else if (parseInt(availability.days) % 3 === 0) {
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
      dividedWorkoutArray = [[...ADay], [...BDay], [...CDay]];
    } else if (availability.days === "5") {
      // code 5 day split, chest, shoulders, lower body, core, back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "chest") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "shoulders") {
          BDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "lower body") {
          CDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "core") {
          DDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "back") {
          EDay.push(exercise);
        }
      });
      dividedWorkoutArray = [[...ADay], [...BDay], [...CDay], [...DDay], [...EDay]];
    }

    return dividedWorkoutArray;
  }
  
  if (status === "success") {
    return generatedWorkout;
  }
}

export default useGenerateWorkout;