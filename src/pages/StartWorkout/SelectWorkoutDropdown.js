// With multiple collections, one for Workouts, another for Days, after getting Workout from select form
// fill in second select form with Days from that Workout by querying and matching Id's 

import React from "react";
import WorkoutForm from "./WorkoutForm";

function SelectWorkoutDropdown(props) {
  const { workouts } = props; 

  return (
    <React.Fragment>
      <form onSubmit={props.onClickingSubmit}>
        <select id="select-workout">
          {/* make sure workouts is not null, if not null map through workouts creating an option for each workout */}
          {workouts && workouts.map((workout) => (
            <option key={workout.id} value={workout.id}>{workout.name}</option>
          ))}
        </select>
        <button type="submit">Select</button>
      </form>

      <div>
        <select id="select-day">
            <option>
              A Day
            </option>
            <option>
              B Day
            </option>
            <option>
              C Day
            </option>
            <option>
              D Day
            </option>
            <option>
              E Day
            </option>
        </select>

        {/* pass in results as props to generate workout form */}
        <WorkoutForm />
        
      </div>
    </React.Fragment>
  );
}

export default SelectWorkoutDropdown;