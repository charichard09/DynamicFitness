import React from "react";

function SelectWorkoutDropdown(props) {
  const { splits } = props; 

  return (
    <React.Fragment>
      <form onSubmit={props.onClickingSubmit}>
        <select id="select-split">
          {/* make sure workouts is not null, if not null map through workouts creating an option for each workout */}
          {splits && splits.map((split) => (
            <option key={split.id} value={split.id}>{split[0].name}</option>
          ))}
        </select>
        <button type="submit">Select</button>
      </form>
    </React.Fragment>
  );
}

export default SelectWorkoutDropdown;