// With multiple collections, one for Workouts, another for Days, after getting Workout from select form
// fill in second select form with Days from that Workout by querying and matching Id's 

import React from "react";
import WorkoutForm from "./WorkoutForm";

function SelectWorkoutDropdown() {

  return (
    <React.Fragment>
      <div>
        <select id="select-workout">
            <option value="Gettin Stable">
              Gettin Stable
            </option>
            <option>
              Hilton Hotel Gym
            </option>
            <option>
              Hypertrophy
            </option>
        </select>
      </div>

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