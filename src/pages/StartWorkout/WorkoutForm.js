import React, { useEffect } from "react";
import { useState } from "react";
import Stopwatch from "./Stopwatch";

function WorkoutForm(props) {
  const [clickDetails, setClickDetails] = useState(false);
  const [workoutTracker, setWorkoutTracker] = useState({});
  const { splitOfWorkout, workout } = props;

  const workoutArray = workout.split[splitOfWorkout];
  
  const handleClickDetails = (e) => {
    e.preventDefault();
    setClickDetails(!clickDetails);
  }

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

  useEffect(() => {
    console.log("workoutTracker: ", workoutTracker);
  }, [workoutTracker])

  return (
    <React.Fragment>
      {workoutArray ? workoutArray.map((exercise) => (
        <div key={exercise.id} style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
          <h4>{exercise.name}</h4>

          <img
          src={exercise.image[0]}
          alt="exercise in motion 1"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
          />
          <img
            src={exercise.image[1]}
            alt="exercise in motion 2"
            style={{ width: "300px", height: "300px" }} // change 300px to desired size
          />

          <form onSubmit={handleSavingWorkout}>
            <input type="text" name="name" defaultValue={exercise.name} hidden={true}/>
            <input type="text" name="sets" defaultValue={exercise.sets} hidden={true}/>
            <label>Weight </label>
            <br/>
            <input type="text" name="weight" />
            <br/>
            {/* Array.from will create an array of elements based on the arg 1 number of sets for the exercise, and arg2 map function to return components each time */}
            {Array.from(Array(exercise.sets), (set, index) => {
              return (
                <React.Fragment key={index}>
                  <label>Set {index + 1}:</label>
                  <br />
                  <label>Reps: </label>
                  <input type="text" name={`set${index + 1}-reps`} placeholder={exercise.reps} />
                  <br />
                </React.Fragment>
              )
            })}
            <button type="submit" >Track</button>
          </form>

        </div>
      )) : null}
      <button type="button">Finish Workout</button>

      {/* example */}
      <div style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
        <h4>Cable Flies</h4>
        <form>
          <label>Weight </label>
          <br/>
          <input type="text" name="weight" />
          <br/>

          <p>Set 1</p>
          <label>Reps </label>
          <br/>
          <input type="text" name="reps-set1" />
          <br />
          <label>Rest </label>
          <br/>
          <input type="text" name="rest-set1" />

          <br/>
          <p>Set 2</p>
          <label>Reps </label>
          <br/>
          <input type="text" name="reps-set2" />
          <br />
          <label>Rest </label>
          <br/>
          <input type="text" name="rest-set2" />

          <br/>
          <p>Set 3</p>
          <label>Reps </label>
          <br/>
          <input type="text" name="reps-set3" />
          <br />
          <label>Rest </label>
          <br/>
          <input type="text" name="rest-set3" />

          <br/>
          <button onClick={handleClickDetails}>Description/Instructions</button>
          {clickDetails ? 
          <div>
            <p>
              Description: Description: Cable flies are a strength training exercise that primarily target the muscles of the chest,
              specifically the pectoralis major.
            </p>
            <p>
              Instructions:
              1. Stand in the center of the cable machine and grasp the handles or D-handles, one in each hand.
              2. Step forward with one foot to create a stable stance, and bend your elbows slightly.
              3. Keeping your back straight and your core engaged, bring your hands together in front of your chest.
              4. Make sure your arms are parallel to the floor at the end of the movement.
              5. Pause for a moment, then slowly release the handles back to the starting position, keeping your arms slightly bent throughout the movement.
              6. Repeat for the desired number of repetitions.
            </p>
            <p>
              Tips: 
              Substitute Cable Machines for Resistance Bands
            </p>
          </div> : null}
          
          <br />
          
        </form>
      </div>

      <Stopwatch />
    </React.Fragment>
  );
}

export default WorkoutForm;