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
    if (generatedWorkout.length === 2 && Array.isArray(generatedWorkout[0])) {
      workout = { ...workout, split: { "ADay": generatedWorkout[0], "BDay": generatedWorkout[1] }}
      ADay = generatedWorkout[0];
      BDay = generatedWorkout[1];
    } else if (generatedWorkout.length === 3 && Array.isArray(generatedWorkout[0])) {
      workout = { ...workout, split: { "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2] }}
      ADay = generatedWorkout[0];
      BDay = generatedWorkout[1];
      CDay = generatedWorkout[2];
    } else if (generatedWorkout.length === 5 && Array.isArray(generatedWorkout[0])) {
      workout = { ...workout, split: { "ADay": generatedWorkout[0], "BDay": generatedWorkout[1], "CDay": generatedWorkout[2], "DDay": generatedWorkout[3], "EDay": generatedWorkout[4] }}
      ADay = generatedWorkout[0];
      BDay = generatedWorkout[1];
      CDay = generatedWorkout[2];
      DDay = generatedWorkout[3];
      EDay = generatedWorkout[4];
    } else if (generatedWorkout.length >= 1) {
      workout = { ...workout, split: { "ADay": generatedWorkout }}
      console.log("generatedWorkout 1", generatedWorkout);
      ADay = generatedWorkout;
    }
  }

  function handleClickNext() {
    props.onClickingFormNavigation("name")
    props.setWorkout(workout);
  }

  return (
    <React.Fragment>     
      <div >
        <h3 className="pl-2 text-2xl font-bold">Review your workout</h3>
        {ADay ? <h4 className="m-3">A Day</h4> : null}
        {
          ADay ?
          (ADay.map(exercise =>
          <div className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-10 flex-col h-auto" key={exercise.id}>
            <h4>{exercise.name}</h4>
            <div className="flex flex-row">
              <img
              src={exercise.image[0]}
              alt="exercise in motion 1"
              style={{ width: "300px", height: "300px" }} // change 300px to desired size
              />
              <img
              src={exercise.image[1]}
              alt="exercise in motion 2"
              className="ml-3"
              style={{ width: "300px", height: "300px" }} // change 300px to desired size
              />
              <p className="pl-4">Sets per workout: {exercise ? exercise.sets : null}</p>
              <p className="pl-4">Reps per workout: {exercise ? exercise.reps : null}</p>
            </div>
          </div>)) : (<p>Loading...</p>)
        }
        {BDay ? <h4 className="m-3" >B Day</h4> : null}
        {
          BDay ? (BDay.map(exercise =>
            <div className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-10 flex-col h-auto" key={exercise.id}>
              <h4>{exercise.name}</h4>
              <div className="flex flex-row">
                <img
                  src={exercise.image[0]}
                  alt="exercise in motion 1"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <img
                  src={exercise.image[1]}
                  alt="exercise in motion 2"
                  className="ml-3"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <p className="pl-4">Sets per workout: {exercise ? exercise.sets : null}</p>
                <p className="pl-4">Reps per workout: {exercise ? exercise.reps : null}</p>
              </div>
            </div>)) : null
        }
        {CDay ? <h4 className="m-3" >C Day</h4> : null}
        {
          CDay ? (CDay.map(exercise =>
            <div className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-10 flex-col h-auto" key={exercise.id}>
              <h4>{exercise.name}</h4>
              <div className="flex flex-row">
                <img
                  src={exercise.image[0]}
                  alt="exercise in motion 1"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <img
                  src={exercise.image[1]}
                  alt="exercise in motion 2"
                  className="ml-3"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <p className="pl-4">Sets per workout: {exercise ? exercise.sets : null}</p>
                <p className="pl-4">Reps per workout: {exercise ? exercise.reps : null}</p>
              </div>
            </div>)) : null
        }
        {DDay ? <h4 className="m-3" >D Day</h4> : null}
        {
          DDay ? (DDay.map(exercise =>
            <div className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-10 flex-col h-auto" key={exercise.id}>
              <h4>{exercise.name}</h4>
              <div className="flex flex-row">
                <img
                  src={exercise.image[0]}
                  alt="exercise in motion 1"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <img
                  src={exercise.image[1]}
                  alt="exercise in motion 2"
                  className="ml-3"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <p className="pl-4">Sets per workout: {exercise ? exercise.sets : null}</p>
                <p className="pl-4">Reps per workout: {exercise ? exercise.reps : null}</p>
              </div>
            </div>)) : null
        }
        {EDay ? <h4 className="m-3" >E Day</h4> : null}
        {
          EDay ? (EDay.map(exercise =>
            <div className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-10 flex-col h-auto" key={exercise.id}>
              <h4>{exercise.name}</h4>
              <div className="flex flex-row">
                <img
                  src={exercise.image[0]}
                  alt="exercise in motion 1"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <img
                  src={exercise.image[1]}
                  alt="exercise in motion 2"
                  className="ml-3"
                  style={{ width: "300px", height: "300px" }} // change 300px to desired size
                />
                <p className="pl-4">Sets per workout: {exercise ? exercise.sets : null}</p>
                <p className="pl-4">Reps per workout: {exercise ? exercise.reps : null}</p>
              </div>
            </div>)) : null
        }
        <div className="flex justify-between">
          <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-6 rounded" onClick={() => props.onClickingFormNavigation("availability")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-flex mr-2 pb-0.5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Back
            </button>
          <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mr-6 mt-4 mb-1 ml-3 rounded" onClick={handleClickNext}>
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right inline-flex ml-2 pb-0.5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReviewWorkout;