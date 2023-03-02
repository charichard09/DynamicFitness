import React from 'react';
import DisplayWorkoutLogs from './DisplayWorkoutLogs';
import DisplayCollectionWorkouts from './DisplayCollectionWorkouts';
import UpdatePersonalGoalForm from './UpdatePersonalGoalForm';
import { auth } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useFirestoreDocData, useFirestore } from 'reactfire';


function MyProfile() {
  const { status, data } = useFirestoreDocData(doc(useFirestore(), "users", auth.currentUser.uid))

  function handleUpdatePersonalGoal(e) {
    e.preventDefault();
    const personalGoalInput = e.target.elements.personalGoal.value;
    updatePersonalGoal(personalGoalInput);
  }

  async function updatePersonalGoal(newPersonalGoal) {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      personalGoal: newPersonalGoal
    });
    // setPersonalGoal(newPersonalGoal);
  }

  return (
    <React.Fragment>
      <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
        <div>         
          <span>[Img img] {auth.currentUser.email}</span>
          {status === "success" ? <UpdatePersonalGoalForm doUpdatePersonalGoal={handleUpdatePersonalGoal} personalGoal={data.personalGoal}/> : <p>loading...</p>}
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