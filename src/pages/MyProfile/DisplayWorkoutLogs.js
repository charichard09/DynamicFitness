import React from 'react';
import { useState } from 'react';

function DisplayWorkoutLogs() {
  const [clickDetails, setClickDetails] = useState(false);

  return(
    <React.Fragment>
      <h4>Workout Logs:</h4>
      <div style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
        <p>
          Wednesday, February 22nd, 2023, 7:34am
        </p>
        <p>
          Workout: “Gettin Stable”   Split Day: B Day
        </p>
        <button onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
        {clickDetails ? <p>get previous workout where this id === previousWorkout.id in db</p> : null}

        <p>
          Tuesday, February 21st, 2023, 5:30am
        </p>
        <p>
          Workout: “Gettin Stable”   Split Day: A Day
        </p>
        <button onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
        {clickDetails ? <p>get previous workout where this id === previousWorkout.id in db</p> : null}
      </div>
    </React.Fragment>
  );
}

export default DisplayWorkoutLogs;