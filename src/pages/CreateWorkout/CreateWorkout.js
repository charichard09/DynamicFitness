import React, { useEffect, useState } from 'react';
import FitnessLevelForm from './FitnessLevelForm';
import GoalsForm from './GoalsForm';
import EquipmentForm from './EquipmentForm';
import AvailabilityForm from './AvailabilityForm';
import NameForm from './NameForm';
import ReviewWorkout from './ReviewWorkout';
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";

function CreateWorkout() {
  const [viewForm, setViewForm] = useState(() => 'fitnessLevel');
  const [workout, setWorkout] = useState({});

  const handleClickingFormNavigation = (page) => {
    setViewForm(page);
  }

  const handleSubmitFitnessLevelForm = (fitnessLevelInput) => {
    setWorkout(prevState => ({ ...prevState, fitnessLevel: fitnessLevelInput }));
  }
  
  const handleSubmitGoalsForm = (goals) => {
    setWorkout(prevState => ({ ...prevState, goals: goals }));
  }
  
  const handleSubmitEquipmentForm = (equipment) => {
    setWorkout(prevState => ({ ...prevState, equipment: equipment }));
  }

  const handleSubmitAvailabilityForm = (event) => {
    event.preventDefault();
    setWorkout(prevState => ({ ...prevState, availability: { days: event.target.days.value, consecutive: event.target.consecutive.checked } }));
  }
  
  const handleSubmitNameForm = (event) => {
    event.preventDefault();
    setWorkout(prevState => ({ ...prevState, name: event.target.name.value }));
    addWorkoutToFirestoreUserCreatedWorkouts(workout);
  }

  const addWorkoutToFirestoreUserCreatedWorkouts = async (workout) => {
    console.log("workout before adding to db:", workout);
    await setDoc(doc(db, "userCreatedWorkouts", auth.currentUser.uid), {
      ...workout, 
      userId: auth.currentUser.uid
    });
  }

  useEffect(() => {
    console.log("per form entry:", workout);
  }, [workout]);

  let formToRender = null;
  if (viewForm === 'fitnessLevel') {
    formToRender = <FitnessLevelForm onClickingFormNavigation={handleClickingFormNavigation} onSubmitFitnessLevelForm={handleSubmitFitnessLevelForm} />;
  } else if (viewForm === 'goals') {
    formToRender = <GoalsForm onClickingFormNavigation={handleClickingFormNavigation} onSubmitGoalsForm={handleSubmitGoalsForm} />;
  } else if (viewForm === 'equipment') {
    formToRender = <EquipmentForm onClickingFormNavigation={handleClickingFormNavigation} onSubmitEquipmentForm={handleSubmitEquipmentForm} />;
  } else if (viewForm === 'availability') {
    formToRender = <AvailabilityForm onClickingFormNavigation={handleClickingFormNavigation} onSubmitAvailabilityForm={handleSubmitAvailabilityForm} />;
  } else if (viewForm === 'reviewWorkout') {
    formToRender = <ReviewWorkout onClickingFormNavigation={handleClickingFormNavigation} workout={workout} setWorkout={setWorkout}/>;
  } else if (viewForm === 'name') {
    formToRender = <NameForm onClickingFormNavigation={handleClickingFormNavigation} onSubmitNameForm={handleSubmitNameForm} workout={workout}/>;
  }

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      {formToRender}   
    </div>
  );
}

export default CreateWorkout;