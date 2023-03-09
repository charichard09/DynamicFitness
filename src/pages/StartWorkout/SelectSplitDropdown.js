import React from "react";

function SelectSplitDropdown(props) {
  const { splits, onSelectingSplit } = props; 

  function handleChange(event) {
    const selectedSplit = event.target.value;
    onSelectingSplit(selectedSplit);
  }

  return (
    <React.Fragment>
      <form>
        <select id="select-split" name="selectSplit" onChange={handleChange}>
          <option key={1}>Available Splits</option>
          {/* make sure workouts is not null, if not null map through workouts creating an option for each workout */}
          {splits && Object.entries(splits).map(([key, value]) => (
            <option key={key.id} value={key}>{key}</option>
          ))}
        </select>
      </form>
    </React.Fragment>
  );
}

export default SelectSplitDropdown;