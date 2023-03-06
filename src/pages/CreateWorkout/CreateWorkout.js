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

  const handleClickingNext = (page) => {
    setViewForm(page);
  }

  const onSubmitFitnessLevelForm = (fitnessLevelInput) => {
    setWorkout(prevState => ({ ...prevState, fitnessLevel: fitnessLevelInput }));
  }
  
  const onSubmitGoalsForm = (goals) => {
    setWorkout(prevState => ({ ...prevState, goals: goals }));
  }
  
  const onSubmitEquipmentForm = (equipment) => {
    setWorkout(prevState => ({ ...prevState, equipment: equipment }));
  }

  const onSubmitAvailabilityForm = (event) => {
    event.preventDefault();
    setWorkout(prevState => ({ ...prevState, availability: { days: event.target.days.value, length: event.target.length.value } }));
  }
  
  const onSubmitNameForm = (event) => {
    event.preventDefault();
    setWorkout(prevState => ({ ...prevState, name: event.target.name.value }));
  }

  useEffect(() => {
    console.log(workout);
  }, [workout]);

  let formToRender = null;
  if (viewForm === 'fitnessLevel') {
    formToRender = <FitnessLevelForm onClickingNext={handleClickingNext} onSubmitFitnessLevelForm={onSubmitFitnessLevelForm} />;
  } else if (viewForm === 'goals') {
    formToRender = <GoalsForm onClickingNext={handleClickingNext} onSubmitGoalsForm={onSubmitGoalsForm} />;
  } else if (viewForm === 'equipment') {
    formToRender = <EquipmentForm onClickingNext={handleClickingNext} onSubmitEquipmentForm={onSubmitEquipmentForm} />;
  } else if (viewForm === 'availability') {
    formToRender = <AvailabilityForm onClickingNext={handleClickingNext} onSubmitAvailabilityForm={onSubmitAvailabilityForm} />;
  } else if (viewForm === 'reviewWorkout') {
    formToRender = <ReviewWorkout onClickingNext={handleClickingNext} />;
  } else if (viewForm === 'name') {
    formToRender = <NameForm onClickingNext={handleClickingNext} onSubmitNameForm={onSubmitNameForm} />;
  }

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      {formToRender}   
    </div>
  );
}

export default CreateWorkout;