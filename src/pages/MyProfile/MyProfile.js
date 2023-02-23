import React from 'react';
import DisplayWorkoutLogs from './DisplayWorkoutLogs';
import DisplayCollectionWorkouts from './DisplayCollectionWorkouts';
import UpdatePersonalGoalForm from './UpdatePersonalGoalForm';

function MyProfile() {

  return (
    <React.Fragment>
      <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
        <div>         
          <span>[Img img] [auth.currentUser.name]</span>
          <UpdatePersonalGoalForm />
        </div>
        
        <div>
          <DisplayCollectionWorkouts />
        </div>

        <div>
          <DisplayWorkoutLogs />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyProfile;