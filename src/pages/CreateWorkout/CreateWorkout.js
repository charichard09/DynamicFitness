import React, { useEffect, useState } from 'react';
import FitnessLevelForm from './FitnessLevelForm';
import GoalsForm from './GoalsForm';
import EquipmentForm from './EquipmentForm';
import AvailabilityForm from './AvailabilityForm';
import NameForm from './NameForm';
import ReviewWorkout from './ReviewWorkout';

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
    setWorkout(prevState => ({ ...prevState, availability: { days: event.target.days.value, length: event.target.length.value } }));
  }
  
  const handleSubmitNameForm = (event) => {
    event.preventDefault();
    setWorkout(prevState => ({ ...prevState, name: event.target.name.value }));
  }

  useEffect(() => {
    console.log(workout);
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
    formToRender = <ReviewWorkout onClickingFormNavigation={handleClickingFormNavigation} />;
  } else if (viewForm === 'name') {
    formToRender = <NameForm onClickingFormNavigation={handleClickingFormNavigation} onSubmitNameForm={handleSubmitNameForm} />;
  }

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      {formToRender}   
    </div>
  );
}

export default CreateWorkout;