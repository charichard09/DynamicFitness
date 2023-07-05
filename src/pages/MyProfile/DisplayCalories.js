import React, { useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { auth } from "../../firebase";

export default function DisplayCalories() {
  // const [weeklyCalories, setWeeklyCalories] = useState(["na", "na", "na", "na", "na", "na", "na"]);
  const firestore = useFirestore();
  const calories = collection(firestore, 'calories');
  const caloriesQuery = query(calories, where('userId', '==', auth.currentUser.uid), orderBy('date', 'desc'), limit(7));

  const { data: caloriesData } = useFirestoreCollectionData(caloriesQuery, { idField: 'id' });
  console.log("caloriesQuery:", caloriesData);

  // hard coded for now, allow users to update later
  let weeklyCalorieGoal = 2000;

  // check the current date
  // then check the date of up to previous 7 days
  // get those dates, fill in the blanks of "na"
  const todaysDate = new Date();
  console.log("todays date", todaysDate.getDay());
  let weeklyCalories = ["na", "na", "na", "na", "na", "na", "na"];
  // do i want logic to take todays Day i.e. Tuesday, then calculate the previous 7 days from that?

  if (caloriesData) {
    for (let i = todaysDate.getDay() - 1; i >= 0; i--) {
        weeklyCalories[i] = "test";
    }
  }

  return (
    <React.Fragment>
      <h4>Calories:</h4>
      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-96 overflow-scroll">
        <p>Calories: 2000/{weeklyCalorieGoal}</p>
        <br />
        <p>Monday: {weeklyCalories[0]}</p>
        <p>Tuesday: {weeklyCalories[1]}</p>
        <p>Wednesday: {weeklyCalories[2]}</p>
        <p>Thursday: {weeklyCalories[3]}</p>
        <p>Friday: {weeklyCalories[4]}</p>
        <p>Saturday: {weeklyCalories[5]}</p>
        <p>Sunday: {weeklyCalories[6]}</p>
        <br />
        <p>Total: {weeklyCalories[6]}</p>
      </div>
    </React.Fragment>
  );
}