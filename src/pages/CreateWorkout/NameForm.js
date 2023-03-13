import React, { useState } from "react";

function NameForm(props) {
  const [showProgressiveOverloadInfo, setShowProgressiveOverloadInfo] = useState(true);
  const [showWarmUpInfo, setShowWarmUpInfo] = useState(true);
  const [showProperFormInfo, setShowProperFormInfo] = useState(true);
  const [showBracingInfo, setShowBracingInfo] = useState(true);

  return (
    <React.Fragment>
      <h3 className="pl-2 text-2xl font-bold">Give your workout a name!</h3>

      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-auto" >
        <form onSubmit={props.onSubmitNameForm}>
          <label htmlFor="name">Congratulations! You’re almost done! Now to just give your new workout a name then select create a workout!</label>
          <br />
          <input className="border-2 border-neutral-900" type="text" id="name"></input>
          <br />
          <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" type="submit">Create Workout</button>
        </form>
        <div className="flex justify-start">
          <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("reviewWorkout")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-flex mr-2 pb-0.5" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Back
          </button>
        </div>
      </div>

      <p className="mx-12 mt-8 mb-4">A few topics and considerations before you begin your new journey!</p>
      <div>
        <button type="button" onClick={() => setShowProgressiveOverloadInfo(!showProgressiveOverloadInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mb-4 mx-12 rounded">Progressive Overload</button>
        <div className="mx-12 mb-4" hidden={showProgressiveOverloadInfo}>
          <ul>
            Progressive overload is a principle of exercise training that involves gradually increasing the demands placed on the body during exercise over
            time. The basic idea is that as the body adapts to a particular workload, you need to increase the workload to continue making progress.
              <li>
                Methods of Progression for Endurance/Stability: Master basic movement patterns, Progress exercises proprioceptively
                (add controlled yet unstable modalities), increase complexity, decrease rest, increase reps or sets, increase weight
              </li>
              <li>
                Methods of Progression for Muscular Development: Increase weight, increase reps, increase sets, decrease rest, increase complexity
              </li>
              <li>
                Methods of Progression for Maximal Strength: Increase weight, increase sets
              </li>
              <li>
                Methods of Progression for Power: Increase weight, increase speed/tempo, increase sets
              </li>
            </ul>
        </div>
      </div>

      <div>
        <button type="button" onClick={() => setShowWarmUpInfo(!showWarmUpInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mb-4 mx-12 rounded">Warm-Up</button>
        <div className="mx-12 mb-4" hidden={showWarmUpInfo}>
          <ul>
              Warm-Ups: A warmup is done prior to a workout session and is used to help prepare the body and mind for physical activity. A warmup is not
              included in your workout but it is recommended to spend 5-10 minutes doing some light cardio and dynamic stretching before your workout.
          </ul>
        </div>
      </div>

      <div>
        <button type="button" onClick={() => setShowProperFormInfo(!showProperFormInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mb-4 mx-12 rounded">Proper Form</button>
        <div className="mx-12 mb-4" hidden={showProperFormInfo}>
          <ul>
            Proper form is essential for any exercise or physical activity, whether you are lifting weights, performing bodyweight exercises, or
            engaging in cardio workouts. Proper form ensures that you engage the intended muscles effectively and efficiently, minimize the risk of
            injury, and maximize the benefits of the exercise.
          </ul>
        </div>
      </div>
      
      <button type="button" onClick={() => setShowBracingInfo(!showBracingInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mb-4 mx-12 rounded">Bracing</button> 
      <div className="mx-12 mb-4" hidden={showBracingInfo}>
        <ul>
          Bracing or activating your core muscles is an essential technique for performing heavy lifts safely and effectively.
          By bracing your core, you'll create a stable base of support for your spine, which will help prevent injury and allow you to lift heavier weights with greater control and efficiency.
            <li>
              Tighten your abdominal muscles as if you were about to take a punch to the stomach. This will engage your transverse abdominis muscle, which is the deepest layer of abdominal muscle.
            </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NameForm;