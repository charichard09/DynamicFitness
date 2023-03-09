import React, { useState } from "react";

function AvailabilityForm(props) {
  const [showNextButton, setShowNextButton] = useState(true);

  return (
    <React.Fragment>
      <h3 className="pl-2">What is your availability?</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form onSubmit={props.onSubmitAvailabilityForm}>
          <label>Days available during the week (1-7):</label>
          <br />
          <input type="number" name="days" max={7} min={1}></input>
          <p>
            This will determine your split. We do away with days of the week and implement alphabetical sequences.By inputting 4 days, 
            you will have a 4 day split known as A, B, C, D day. This allows you to be flexible with your sessions so if you skip a day, 
            you always know if you did B day previously, then the next time you do C day.
          </p>
          {/* <label>What is the max length you prefer to exercise per day? (30min, 60min, 90min, 120min):</label>
          <br />
          <input type="number" name="length"></input>
          <p>For example, if I have 45minutes to spare in my days to workout, I would select 60min</p> */}
          <br />
          <label>If you have 2 or 3 days available and any of them are consecutive days check this box</label>
          <br />
          <input type="checkbox" name="consecutive"></input>
          <p>
            For example, if you are only available on Monday, Wednesday, and Friday, then don't check this box. But if your days available are
            Monday, Tuesday, and Thursday, then Monday and Tuesday are consecutive so do check this box.
          </p>
          <button type="submit" onClick={() => setShowNextButton(false)}>Submit</button>
        </form>
        <button type="button" onClick={() => props.onClickingFormNavigation("equipment")}>Back</button>
        <button type="button" onClick={() => props.onClickingFormNavigation("reviewWorkout")} hidden={showNextButton}>Next</button>
      </div>
      <p>Unsure? Here are some recommendations based on training status:</p>
      <ul>
        <li>Beginner: 2-3 sessions per week</li>
        <li>Intermediate: 3-4 sessions per week</li>
        <li>Advanced: 4-6 sessions per week</li>
      </ul>
    </React.Fragment>
  );
}

export default AvailabilityForm;