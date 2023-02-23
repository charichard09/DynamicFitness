import React from 'react';
import { useState } from 'react';

function UpdatePersonalGoalForm() {
  const [clickUpdate, setClickUpdate] = useState(false);

  return(
    <React.Fragment>
      <h4>Personal Goal:</h4>
      <p>Exercise is a personal journey of improving yourself. Here is a place you can write down your personal goals.</p>
      <button onClick={() => {setClickUpdate(!clickUpdate)}}>Update Personal Goal</button>
      {clickUpdate ? <p>[Form updatePersonalGoalForm]</p> : null}
    </React.Fragment>
  );
}

export default UpdatePersonalGoalForm;