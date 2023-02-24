import React, { useState } from 'react';
import FitnessLevelForm from './FitnessLevelForm';
import GoalsForm from './GoalsForm';
import EquipmentForm from './EquipmentForm';

function CreateWorkout() {
  const [viewForm, setViewForm] = useState(() => 'fitnessLevel');

  const handleClickingNext =  (page) => {
    setViewForm(page);
  }


  let formToRender = null;
  if (viewForm === 'fitnessLevel') {
    formToRender = <FitnessLevelForm onClickingNext={handleClickingNext} />;
  } else if (viewForm === 'goals') {
    formToRender = <GoalsForm onClickingNext={handleClickingNext}/>;
  } else if (viewForm === 'equipment') {
    formToRender = <EquipmentForm onClickingNext={handleClickingNext}/>;
  }

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      {formToRender}   
    </div>
  );
}

export default CreateWorkout;