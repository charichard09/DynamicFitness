import React from 'react';
import EditWorkoutForm from './EditWorkoutForm';
import { useState } from 'react';

function DisplayCollectionWorkouts() {
  const [clickDetails, setClickDetails] = useState(false);
  const [clickEdit, setClickEdit] = useState(false);
  const [clickDelete, setClickDelete] = useState(false);

  return(
    <React.Fragment>
      <h4>Collection of Workouts:</h4>
      <div style={{backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em"}}>
        <p>
          "Gettin Stable"
          <button onClick={() => {setClickEdit(!clickEdit)}}>Edit</button>
          <button onClick={() => {setClickDelete(!clickDelete)}}>Delete</button>
          {clickEdit ? <EditWorkoutForm /> : null}
        </p>
        <button onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
        {clickDetails ? <p>get workout where this id === workout.id in db</p> : null}

        <p>
          "Hilton Hotel Gym"
          <button onClick={() => {setClickEdit(!clickEdit)}}>Edit</button>
          <button onClick={() => {setClickDelete(!clickDelete)}}>Delete</button>
          {clickEdit ? <EditWorkoutForm /> : null}
        </p>
        <button onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
        {clickDetails ? <p>get workout where this id === workout.id in db</p> : null}

        <p>
          "Hypertrophy"" 
          <button onClick={() => {setClickEdit(!clickEdit)}}>Edit</button>
          <button onClick={() => {setClickDelete(!clickDelete)}}>Delete</button>
          {clickEdit ? <EditWorkoutForm /> : null}
        </p>
        <button onClick={() => {setClickDetails(!clickDetails)}}>click here for details</button>
        {clickDetails ? <p>get workout where this id === workout.id in db</p> : null}
      </div>
      
    </React.Fragment>
  );
}

export default DisplayCollectionWorkouts;