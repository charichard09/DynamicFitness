import React from "react";

function FitnessLevelForm() {
  return (
    <React.Fragment>
      <form>
        <input type="radio" id="beginner" name="fitnessLevel" value="beginner" />
        <label for="beginner">Beginner</label>
        <br />
        <input type="radio" id="intermediate" name="fitnessLevel" value="intermediate" />
        <label for="intermediate">Intermediate</label>
        <br />
        <input type="radio" id="advanced" name="fitnessLevel" value="advanced" />
        <label for="advanced">Advanced</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default FitnessLevelForm;

    