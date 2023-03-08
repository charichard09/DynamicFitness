import React from 'react';
import useGenerateWorkout from './useGenerateWorkout';

function ReviewWorkout(props) {
  let { workout } = props;
  const generatedWorkout = useGenerateWorkout(workout);


  let ADay = null;
  let BDay = null;
  let CDay = null;
  let DDay = null;
  let EDay = null;
  if (generatedWorkout.length === 2) {
    workout = { ...workout, "ADay": generatedWorkout[0], "BDay": generatedWorkout[1] }
    ADay = generatedWorkout[0];
    BDay = generatedWorkout[1];
    console.log("ADay: ", ADay);
    console.log("BDay: ", BDay);
  } else if (generatedWorkout.length === 3) {
    workout = { ...workout, "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2] }
    ADay = generatedWorkout[0];
    BDay = generatedWorkout[1];
    CDay = generatedWorkout[2];
  } else if (generatedWorkout.length === 1) {
    ADay = generatedWorkout[0];
  } else if (generatedWorkout.length === 5) {
    workout = { ...workout, "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2], "DDay": generatedWorkout[3], "EDay": generatedWorkout[4] }
    ADay = generatedWorkout[0];
    BDay = generatedWorkout[1];
    CDay = generatedWorkout[2];
    DDay = generatedWorkout[3];
    EDay = generatedWorkout[4];
  }

  return (
    <React.Fragment>
      <h3>Review your workout</h3>
      <p>Here is a summary of a your recommended workout. You are welcome to change anything.</p>

      {/* code jsx display for all A, B, C days on here and how they will look when "starting" a workout */}
      {ADay ? <h4>A Day</h4> : null}
      { 
        ADay ? 
        (ADay.map(exercise => 
          <div key={exercise.id}>
          <h4>{exercise.name}</h4>
          <img src={exercise.image[0]} alt="exercise in motion 1" />
          <img src={exercise.image[1]} alt="exercise in motion 2" />
        </div>)) : (<p>Loading...</p>)
      }
      {BDay ? <h4>B Day</h4> : null}
      {
        BDay ? (BDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img src={exercise.image[0]} alt="exercise in motion 1" />
            <img src={exercise.image[1]} alt="exercise in motion 2" />
          </div>)) : null
      }
      {CDay ? <h4>C Day</h4> : null}
      {
        CDay ? (CDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img src={exercise.image[0]} alt="exercise in motion 1" />
            <img src={exercise.image[1]} alt="exercise in motion 2" />
          </div>)) : null
      }
      {DDay ? <h4>D Day</h4> : null}
      {
        DDay ? (DDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img src={exercise.image[0]} alt="exercise in motion 1" />
            <img src={exercise.image[1]} alt="exercise in motion 2" />
          </div>)) : null
      }
      {EDay ? <h4>E Day</h4> : null}
      {
        EDay ? (EDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img src={exercise.image[0]} alt="exercise in motion 1" />
            <img src={exercise.image[1]} alt="exercise in motion 2" />
          </div>)) : null
      }
      <button type="button" onClick={() => props.onClickingFormNavigation("availability")}>Back</button>
      <button type="button" onClick={() => props.onClickingFormNavigation("name")}>Next</button>
    </React.Fragment>
  );
}

export default ReviewWorkout;