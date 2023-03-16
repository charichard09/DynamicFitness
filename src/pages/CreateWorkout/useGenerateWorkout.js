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

  // if "bench" or "rack" are not selected equipment, filter out any exercises that require them
  // if (!workout.equipment.includes("bench") && !workout.equipment.includes("rack")) filter new array for exercises that don't require bench or rack
  function filterWorkoutArray(workoutArray, workoutParam) {
    let filteredWorkoutArray = workoutArray;
    
    workoutArray.forEach(exercise => {
      if (!workoutParam.equipment.includes("bench") && exercise.equipmentNeeded.includes("bench")) {
        filteredWorkoutArray = workoutArray.filter(exercise => !exercise.equipmentNeeded.includes("bench")
        );
      }
    });
    
    filteredWorkoutArray.forEach(exercise => {
      if (!workoutParam.equipment.includes("rack") && exercise.equipmentNeeded.includes("rack")) {
        filteredWorkoutArray = filteredWorkoutArray.filter(exercise => !exercise.equipmentNeeded.includes("rack")
        );
      }
    });
    
    // TODO: filter out exercises that are add more than 1 core, 1 shoulder, 2 back, 1 chest, or 2 leg 
    
    return filteredWorkoutArray;
  }

  function divideWorkoutArray(workoutArray, availability) {
    let dividedWorkoutArray = [];
    let ADay = [];
    let BDay = [];
    let CDay = [];
    let DDay = [];
    let EDay = [];

    if ((parseInt(availability.days) <= 3 && !availability.consecutive) || availability.days === "1") {
        dividedWorkoutArray = workoutArray.filter(exercise => {
          if (exercise.primaryMuscleGroup === "biceps" || exercise.primaryMuscleGroup === "triceps" || exercise.primaryMuscleGroup === "glutes" || exercise.primaryMuscleGroup === "calves") {
            return null;
          } else {
            return exercise;
          }
        });
    } else if ((parseInt(availability.days) % 2 === 0) || availability.days === "7") {
      // code 2 day split, upper body/shoulders, lower body/core/back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "back" || exercise.primaryMuscleGroup === "core" || exercise.primaryMuscleGroup === "lower body" || exercise.primaryMuscleGroup === "triceps") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "shoulders" || exercise.primaryMuscleGroup === "chest" || exercise.primaryMuscleGroup === "biceps" || exercise.primaryMuscleGroup === "glutes") {
          BDay.push(exercise);
        }
      });
      dividedWorkoutArray = [[...ADay], [...BDay]];
    } else if (parseInt(availability.days) % 3 === 0) {
      // code 3 day split, upper body/shoulders, lower body, core/back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "chest" || exercise.primaryMuscleGroup === "shoulders" || exercise.primaryMuscleGroup === "biceps") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "core" || exercise.primaryMuscleGroup === "back" || exercise.primaryMuscleGroup === "triceps") {
          BDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "lower body" || exercise.primaryMuscleGroup === "glutes" || exercise.primaryMuscleGroup === "calves") {
          CDay.push(exercise);
        }
      });
      dividedWorkoutArray = [[...ADay], [...BDay], [...CDay]];
    } else if (availability.days === "5") {
      // code 5 day split, chest, shoulders, lower body, core, back
      workoutArray.forEach(exercise => {
        if (exercise.primaryMuscleGroup === "chest" || exercise.primaryMuscleGroup === "biceps") {
          ADay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "shoulders" || exercise.primaryMuscleGroup === "triceps") {
          BDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "lower body") {
          CDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "core" || exercise.primaryMuscleGroup === "glutes") {
          DDay.push(exercise);
        } else if (exercise.primaryMuscleGroup === "back" || exercise.primaryMuscleGroup === "calves") {
          EDay.push(exercise);
        }
      });
      dividedWorkoutArray = [[...ADay], [...BDay], [...CDay], [...DDay], [...EDay]];
    }

    return dividedWorkoutArray;
  }


  useEffect(() => {
    // if (data) will make sure none of this block of code will run until data is loaded
    if (data) {
      const workoutArray = generateWorkoutArrayWithGoals(data, workout.goals);
      console.log("workoutArray:", workoutArray);

      const filteredWorkoutArray = filterWorkoutArray(workoutArray, workout);
      console.log("filteredWorkoutArray:", filteredWorkoutArray);

      const dividedWorkoutArray = divideWorkoutArray(filteredWorkoutArray, workout.availability);
      console.log("dividedWorkoutArray:", dividedWorkoutArray);

      setGeneratedWorkout(dividedWorkoutArray);
    }
  }, [data, workout.goals, workout.availability, workout]);
  
  if (status === "success" && generatedWorkout.length > 0) {
    console.log("generatedWorkout at the end of useGeneratedWorkout:", generatedWorkout);

    return generatedWorkout;
  }
}

export default useGenerateWorkout;