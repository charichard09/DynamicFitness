import React from 'react';

function ReviewWorkout(props) {
  return (
    <React.Fragment>
      <h3>Review your workout</h3>
      <p>Here is a summary of a your recommended workout. You are welcome to change anything. Once you are satisfied with your workout, click "Next".</p>
      <p>form to update current object here</p>
      <button type="button" onClick={() => props.onClickingNext("equipment")}>Back</button>
      <button type="button" onClick={() => props.onClickingNext("'reviewWorkout'")}>Next</button>
    </React.Fragment>
  );
}

export default ReviewWorkout;