import React, { useState } from "react";

function AvailabilityForm(props) {
  const [showNextButton, setShowNextButton] = useState(true);

  return (
    <React.Fragment>
      <h3 className="pl-2">What is your availability?</h3>

      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-auto" >
        <form onSubmit={props.onSubmitAvailabilityForm}>
          <label>Days available during the week (1-7):</label>
          <br />
          <input className="border-2 border-neutral-900" type="number" name="days" max={7} min={1}></input>
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
          <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => setShowNextButton(false)}>Submit</button>
        </form>
        <button type="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("equipment")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-flex mr-2 pb-0.5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          Back
        </button>
        <button type="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("reviewWorkout")} hidden={showNextButton}>
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right inline-flex ml-2 pb-0.5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </button>
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