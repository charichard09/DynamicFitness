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
    </React.Fragment>
  );
}

export default NameForm;