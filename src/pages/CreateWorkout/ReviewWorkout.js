import React from 'react';
import useGenerateWorkout from './useGenerateWorkout';

function ReviewWorkout(props) {
  const { workout } = props;
  const generatedWorkout = useGenerateWorkout(workout);

  return (
    <React.Fragment>
      <p>{generatedWorkout}</p>
      <h3>Review your workout</h3>
      <p>Here is a summary of a your recommended workout. You are welcome to change anything. Once you are satisfied with your workout, click "Next".</p>
      <p>Dev Note: Allow users to create their own "Other" or personal exercise with sets, reps tracking</p>
      <p>form to update current object here</p>
      <button type="button" onClick={() => props.onClickingFormNavigation("availability")}>Back</button>
      <button type="button" onClick={() => props.onClickingFormNavigation("name")}>Next</button>
    </React.Fragment>
  );
}

export default ReviewWorkout;