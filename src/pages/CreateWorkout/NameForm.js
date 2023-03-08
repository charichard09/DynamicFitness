import React from "react";

function NameForm(props) {
  return (
    <React.Fragment>
      <h3 style={{margin: 0}}>Give your workout a name!</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form onSubmit={props.onSubmitNameForm}>
          <label htmlFor="name">Congratulations! You’re almost done! Now to just give your new workout a name then select create a workout!</label>
          <br />
          <input type="text" id="name"></input>
          <br />
          <button type="submit">Create Workout</button>
        </form>
        <button type="button" onClick={() => props.onClickingFormNavigation("reviewWorkout")}>Back</button>
      </div>
        <p>A few reminders and considerations before you begin your new journey!</p>
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

        <ul>
            Warm-Ups: A warmup is done prior to a workout session and is used to help prepare the body and mind for physical activity. A warmup is not 
            included in your workout but it is recommended to spend 5-10 minutes doing some light cardio and dynamic stretching before your workout.
        </ul>

        <ul>
          Proper form is essential for any exercise or physical activity, whether you are lifting weights, performing bodyweight exercises, or 
          engaging in cardio workouts. Proper form ensures that you engage the intended muscles effectively and efficiently, minimize the risk of 
          injury, and maximize the benefits of the exercise.
        </ul>

        <ul>
          Bracing or activating your core muscles is an essential technique for performing heavy lifts safely and effectively. 
          By bracing your core, you'll create a stable base of support for your spine, which will help prevent injury and allow you to lift heavier weights with greater control and efficiency.
            <li>
              Tighten your abdominal muscles as if you were about to take a punch to the stomach. This will engage your transverse abdominis muscle, which is the deepest layer of abdominal muscle.
            </li>
        </ul>
    </React.Fragment>
  );
}

export default NameForm;