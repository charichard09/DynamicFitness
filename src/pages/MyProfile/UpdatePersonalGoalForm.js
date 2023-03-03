import React from 'react';
import { useState } from 'react';

function UpdatePersonalGoalForm(props) {
  const [clickUpdate, setClickUpdate] = useState(false);

  return(
    <React.Fragment>
      <h4>Personal Goal:</h4>
      {/* <p>Exercise is a personal journey of improving yourself. Here is a place you can write down your personal goals.</p> */}
      <p>{props.personalGoal}</p>
      <button onClick={() => {setClickUpdate(!clickUpdate)}}>Update Personal Goal</button>
      {clickUpdate ? 
        <form onSubmit={props.doUpdatePersonalGoal}>
          <textarea type="text" name="personalGoal" placeholder="Personal Goal">
          </textarea>
          <br />
          <button type="submit">Update</button>
        </form>: null}
    </React.Fragment>
  );
}

export default UpdatePersonalGoalForm;