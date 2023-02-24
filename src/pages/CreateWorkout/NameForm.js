import React from "react";

function NameForm(props) {
  return (
    <React.Fragment>
      <h3 style={{margin: 0}}>What is your availability?</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form>
          <label htmlFor="name">Congratulations! You’re almost done! Now to just give your new workout a name:</label>
          <input type="text" id="name"></input>
          <br />
          <button type="button" onClick={() => props.onClickingNext("availability")}>Back</button>
          <button type="button">Create Workout</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default NameForm;