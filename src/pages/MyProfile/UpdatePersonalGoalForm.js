import React from 'react';
import { useState } from 'react';

function UpdatePersonalGoalForm(props) {
  const [clickUpdate, setClickUpdate] = useState(false);

  return(
    <React.Fragment>
      <h4 className="pl-2 text-2xl font-bold">Personal Goal:</h4>
      {/* <p>Exercise is a personal journey of improving yourself. Here is a place you can write down your personal goals.</p> */}
      <p className="pl-4 pt-2 pb-4">{props.personalGoal}</p>
      <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 mt-2 mb-1 ml-1 rounded" onClick={() => {setClickUpdate(!clickUpdate)}}>Update Personal Goal</button>
      {clickUpdate ? 
        <form onSubmit={props.doUpdatePersonalGoal}>
          <textarea type="text" name="personalGoal" placeholder="Personal Goal">
          </textarea>
          <br />
          <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 mt-2 mb-1 ml-1 rounded" type="submit">Update</button>
        </form>: null}
    </React.Fragment>
  );
}

export default UpdatePersonalGoalForm;