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

  if (generatedWorkout) {
    if (generatedWorkout.length === 2) {
      workout = { ...workout, split: { "ADay": generatedWorkout[0], "BDay": generatedWorkout[1] }}
      ADay = generatedWorkout[0];
      BDay = generatedWorkout[1];
    } else if (generatedWorkout.length === 3) {
      workout = { ...workout, split: { "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2] }}
      ADay = generatedWorkout[0];
      BDay = generatedWorkout[1];
      CDay = generatedWorkout[2];
    } else if (generatedWorkout.length === 5) {
      workout = { ...workout, split: { "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2], "DDay": generatedWorkout[3], "EDay": generatedWorkout[4] }}
      ADay = generatedWorkout[0];
      BDay = generatedWorkout[1];
      CDay = generatedWorkout[2];
      DDay = generatedWorkout[3];
      EDay = generatedWorkout[4];
    } else {
      workout = { ...workout, split: { "ADay": generatedWorkout }}
      ADay = generatedWorkout;
    }
  }

  function handleClickNext() {
    props.onClickingFormNavigation("name")
    props.setWorkout(workout);
  }

  return (
    <React.Fragment>
      {/* temp spot for buttons */}
      <button type="button" onClick={() => props.onClickingFormNavigation("availability")}>Back</button>
      <button type="button" onClick={handleClickNext}>Next</button>
      
      <h3>Review your workout</h3>
      <p>Here is a summary of a your recommended workout.</p>

      {/* code jsx display for all A, B, C days on here and how they will look when "starting" a workout */}
      {ADay ? <h4>A Day</h4> : null}
      { 
        ADay ? 
        (ADay.map(exercise => 
          <div key={exercise.id}>
          <h4>{exercise.name}</h4>
          <img
          src={exercise.image[0]}
          alt="exercise in motion 1"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
        <img
          src={exercise.image[1]}
          alt="exercise in motion 2"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
        </div>)) : (<p>Loading...</p>)
      }
      {BDay ? <h4>B Day</h4> : null}
      {
        BDay ? (BDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img
          src={exercise.image[0]}
          alt="exercise in motion 1"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
        <img
          src={exercise.image[1]}
          alt="exercise in motion 2"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
          </div>)) : null
      }
      {CDay ? <h4>C Day</h4> : null}
      {
        CDay ? (CDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img
          src={exercise.image[0]}
          alt="exercise in motion 1"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
        <img
          src={exercise.image[1]}
          alt="exercise in motion 2"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
          </div>)) : null
      }
      {DDay ? <h4>D Day</h4> : null}
      {
        DDay ? (DDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img
          src={exercise.image[0]}
          alt="exercise in motion 1"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
        <img
          src={exercise.image[1]}
          alt="exercise in motion 2"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
          </div>)) : null
      }
      {EDay ? <h4>E Day</h4> : null}
      {
        EDay ? (EDay.map(exercise =>
          <div key={exercise.id}>
            <h4>{exercise.name}</h4>
            <img
          src={exercise.image[0]}
          alt="exercise in motion 1"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
        <img
          src={exercise.image[1]}
          alt="exercise in motion 2"
          style={{ width: "300px", height: "300px" }} // change 300px to desired size
        />
          </div>)) : null
      }
      {/* <button type="button" onClick={() => props.onClickingFormNavigation("availability")}>Back</button>
      <button type="button" onClick={handleClickNext}>Next</button> */}
    </React.Fragment>
  );
}

export default ReviewWorkout;