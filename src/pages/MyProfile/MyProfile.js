import React from 'react';
import DisplayWorkoutLogs from './DisplayWorkoutLogs';
import DisplayCollectionWorkouts from './DisplayCollectionWorkouts';
import UpdatePersonalGoalForm from './UpdatePersonalGoalForm';
import { auth } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import thorImage from '../../assets/thor.jpg';

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
        <div className="items-center flex">         
          <img style={{ "paddingLeft": "1.5em", "paddingRight": "1.5em", display: "flex"}} src={thorImage} alt="thor" className="rounded-full h-60 p-5"></img>
          <div className="justify-center">{status === "success" ? <UpdatePersonalGoalForm doUpdatePersonalGoal={handleUpdatePersonalGoal} personalGoal={data.personalGoal}/> : <p>loading...</p>}</div>
        </div>
        <div className="pl-14 pb-5">{auth.currentUser.email}</div>

        <div className="pl-5"> 
          <DisplayCollectionWorkouts />
        </div>

        <div className="pl-5 pt-5">
          <DisplayWorkoutLogs />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyProfile;