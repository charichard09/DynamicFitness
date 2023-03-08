import React from 'react';
import useGenerateWorkout from './useGenerateWorkout';

function ReviewWorkout(props) {
  let { workout } = props;
  const generatedWorkout = useGenerateWorkout(workout);


  if (generatedWorkout.length === 2) {
      workout = { ...workout, "ADay": generatedWorkout[0], "BDay": generatedWorkout[1] }
  } else if (generatedWorkout.length === 3) {
      workout = { ...workout, "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2] }
  }
  
  return (
    <React.Fragment>
      {/* {generatedWorkout.length > 0 ? (generatedWorkout.forEach(day => day.map(exercise => (
        <div key={exercise.id}>
          <h4>{exercise.name}</h4>
          <img src={exercise.image[0]} alt="exercise in motion 1" />
          <img src={exercise.image[1]} alt="exercise in motion 2" />
        </div>
        ))
      )) : (
        <p>Loading...</p>
      )
    } */}
      <h3>Review your workout</h3>
      <p>Here is a summary of a your recommended workout. You are welcome to change anything.</p>
      
      <button type="button" onClick={() => props.onClickingFormNavigation("availability")}>Back</button>
      <button type="button" onClick={() => props.onClickingFormNavigation("name")}>Next</button>
    </React.Fragment>
  );
}

export default ReviewWorkout;