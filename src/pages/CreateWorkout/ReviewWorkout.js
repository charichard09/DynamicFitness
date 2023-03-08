import React from 'react';
import useGenerateWorkout from './useGenerateWorkout';

function ReviewWorkout(props) {
  const { workout } = props;
  const generatedWorkout = useGenerateWorkout(workout);

  return (
    <React.Fragment>
      {/* {generatedWorkout} */}
      {generatedWorkout.length > 0 ? (generatedWorkout.map(exercise => (
        <div key={exercise.id}>
          <h4>{exercise.name}</h4>
          <img src={exercise.image[0]} alt="exercise in motion 1" />
          <img src={exercise.image[1]} alt="exercise in motion 2" />
        </div>
        ))
      ) : (
        <p>Loading...</p>
      )
    }
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