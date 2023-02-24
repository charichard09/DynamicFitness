import React from "react";
import { useState } from "react";
import Stopwatch from "./Stopwatch";

function WorkoutForm() {
  const [clickDetails, setClickDetails] = useState(false);
  
  const handleClickDetails = (e) => {
    e.preventDefault();
    setClickDetails(!clickDetails);
  }

  return (
    <React.Fragment>
      
      <h4>"[x] Day"</h4>
      <div style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
        <h4>Cable Flies</h4>
        <form>
          <label>Weight </label>
          <br/>
          <input type="text" name="weight" />
          <br/>

          <p>Set 1</p>
          <label>Reps </label>
          <br/>
          <input type="text" name="reps-set1" />
          <br />
          <label>Rest </label>
          <br/>
          <input type="text" name="rest-set1" />

          <br/>
          <p>Set 2</p>
          <label>Reps </label>
          <br/>
          <input type="text" name="reps-set2" />
          <br />
          <label>Rest </label>
          <br/>
          <input type="text" name="rest-set2" />

          <br/>
          <p>Set 3</p>
          <label>Reps </label>
          <br/>
          <input type="text" name="reps-set3" />
          <br />
          <label>Rest </label>
          <br/>
          <input type="text" name="rest-set3" />

          <br/>
          <button onClick={handleClickDetails}>Description/Instructions</button>
          {clickDetails ? 
          <div>
            <p>
              Description: Description: Cable flies are a strength training exercise that primarily target the muscles of the chest,
              specifically the pectoralis major.
            </p>
            <p>
              Instructions:
              1. Stand in the center of the cable machine and grasp the handles or D-handles, one in each hand.
              2. Step forward with one foot to create a stable stance, and bend your elbows slightly.
              3. Keeping your back straight and your core engaged, bring your hands together in front of your chest.
              4. Make sure your arms are parallel to the floor at the end of the movement.
              5. Pause for a moment, then slowly release the handles back to the starting position, keeping your arms slightly bent throughout the movement.
              6. Repeat for the desired number of repetitions.
            </p>
            <p>
              Tips: 
              Substitute Cable Machines for Resistance Bands
            </p>
          </div> : null}
          
          <br />
          <button type="submit">Finish Workout</button>
        </form>
      </div>

      <Stopwatch />
    </React.Fragment>
  );
}

export default WorkoutForm;