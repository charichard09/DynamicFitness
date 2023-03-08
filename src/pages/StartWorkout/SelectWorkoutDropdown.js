import React from "react";

function SelectWorkoutDropdown(props) {
  const { workouts, onSelectingWorkout } = props; 

  function handleChange(event) {
    const selectedWorkout = event.target.value;
    onSelectingWorkout(selectedWorkout);
  }

  return (
    <React.Fragment>
      <form>
        <select id="select-workout" name="selectWorkout" onChange={handleChange}>
          <option>Available Workouts</option>
          {/* make sure workouts is not null, if not null map through workouts creating an option for each workout */}
          {workouts && workouts.map((workout) => (
            <option key={workout.id} value={workout.name}>{workout.name}</option>
          ))}
        </select>
      </form>
    </React.Fragment>
  );
}

export default SelectWorkoutDropdown;