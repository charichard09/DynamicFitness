import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import Stopwatch from "./Stopwatch";
import DetailsButton from "./DetailsButton";

function WorkoutForm(props) {
  const [workoutTracker, setWorkoutTracker] = useState({});
  const { splitOfWorkout, workout, nameOfWorkout, workoutLogsData } = props;
  const navigate = useNavigate();
  const workoutArray = workout.split[splitOfWorkout];
  const previousWorkout = workoutLogsData.find(workoutLog => workoutLog.nameOfWorkout === nameOfWorkout && workoutLog.split === splitOfWorkout);

  const handleSavingWorkout = (e) => {
    e.preventDefault();
    console.log("sets: ", e.target.sets.value)

    let savedWorkout = {};
    savedWorkout = { name: e.target.name.value, weight: e.target.weight.value };
    savedWorkout.setsArray = Array.from(Array(parseInt(e.target.sets.value)), (set, index) => {
      return {
        set: index + 1,
        reps: e.target[`set${index + 1}-reps`].value
      }
    })

    setWorkoutTracker(prevState => ({ ...prevState, [e.target.name.value]: savedWorkout }));
    console.log("savedWorkout: ", savedWorkout);
  }

  const addWorkoutToWorkoutLogs = async () => {
    console.log("workoutTracker before adding to db: ", workoutTracker);
    const currentDate = new Date();
    await addDoc(collection(db, "workoutLogs"), {
      ...workoutTracker,
      userId: auth.currentUser.uid,
      date: currentDate,
      nameOfWorkout: nameOfWorkout,
      split: splitOfWorkout
    });
    navigate('/my-profile');
  }

  const getPreviousWorkoutWeight = (exerciseName) => {
    if (!previousWorkout) {
      return null
    } else if (previousWorkout.hasOwnProperty(exerciseName)) {
      return previousWorkout[exerciseName].weight;
    } else {
      return null;
    }
  }

  useEffect(() => {
    console.log("workoutTracker: ", workoutTracker);
  }, [workoutTracker])

  return (
    <React.Fragment>
      {workoutArray ? workoutArray.map((exercise) => (
        <div key={exercise.id} className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-10 flex-col h-auto" >
          <h4 className="text-2x1">{exercise.name}</h4>

          <div className="flex flex-col sm:flex-row">
            <img
            src={exercise.image[0]}
            alt="exercise in motion 1"
            className="ml-2"
            style={{ width: "300px", height: "300px" }} // change 300px to desired size
            />
            <img
              src={exercise.image[1]}
              className="ml-2"
              alt="exercise in motion 2"
              style={{ width: "300px", height: "300px" }} // change 300px to desired size
            />
          </div>

          <form onSubmit={handleSavingWorkout}>
            <input type="text" name="name" defaultValue={exercise.name} hidden={true}/>
            <input type="text" name="sets" defaultValue={exercise.sets} hidden={true}/>
            <label>Weight </label>
            <br/>
            <input className="border-2 border-neutral-900" type="text" name="weight" placeholder={getPreviousWorkoutWeight(exercise.name)} />
            <br/>
            {/* Array.from will create an array of elements based on the arg 1 number of sets for the exercise, and arg2 map function to return components each time */}
            {Array.from(Array(exercise.sets), (set, index) => {
              return (
                <React.Fragment key={index}>
                  <label>Set {index + 1}:</label>
                  <br />
                  <label>Reps: </label>
                  <input className="border-2 border-neutral-900" type="text" name={`set${index + 1}-reps`} placeholder={exercise.reps} />
                  <br />
                </React.Fragment>
              )
            })}
            <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 ml-3 mb-3 rounded" >Track</button>
          </form>

          <DetailsButton exercise={exercise}/>
          <Stopwatch />
        </div>
      )) : null}
      
      <div className="justify-center flex">
        <button type="button" onClick={addWorkoutToWorkoutLogs} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-6 mb-10 rounded w-11/12">Finish Workout</button>
      </div>
    </React.Fragment>
  );
}

export default WorkoutForm;