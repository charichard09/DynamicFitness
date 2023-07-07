import React, { useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { auth } from "../../firebase";

export default function DisplayCalories() {
  const firestore = useFirestore();
  const calories = collection(firestore, 'calories');
  const caloriesQuery = query(calories, where('userId', '==', auth.currentUser.uid), orderBy('date', 'desc'), limit(7));
  const { data: caloriesData } = useFirestoreCollectionData(caloriesQuery, { idField: 'id' });

  // hard coded for now, allow users to update later
  let weeklyCalorieGoal = 14000;

  const weeklyCaloriesCollection = collection(firestore, 'weeklyCalories');
  const weeklyCaloriesQuery = query(weeklyCaloriesCollection, where('userId', '==', auth.currentUser.uid), orderBy('endWeek', 'desc'), limit(1));
  const { data: weeklyCaloriesData } = useFirestoreCollectionData(weeklyCaloriesQuery, { idField: 'id' });
  console.log("weeklyCaloriesData: ", weeklyCaloriesData);
  
  const todaysDate = new Date();
  let weeklyCalories = ["na", "na", "na", "na", "na", "na", "na"];
  
  if (caloriesData) {
    for (let i = todaysDate.getDay() - 1; i >= 0; i--) {
      weeklyCalories[i] = "test";
    }
  }

  return (
    <React.Fragment>
      <h4>Calories:</h4>
      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-96 overflow-scroll">
        <p>Current Total Calories: 0/{weeklyCalorieGoal}</p>
        <br />
        <p>Monday: {weeklyCalories[0]}</p>
        <p>Tuesday: {weeklyCalories[1]}</p>
        <p>Wednesday: {weeklyCalories[2]}</p>
        <p>Thursday: {weeklyCalories[3]}</p>
        <p>Friday: {weeklyCalories[4]}</p>
        <p>Saturday: {weeklyCalories[5]}</p>
        <p>Sunday: {weeklyCalories[6]}</p>
        <br />
        <p>
          Total Calories Previous Week of { weeklyCaloriesData ? new Date(weeklyCaloriesData[0].startWeek.seconds * 1000).toLocaleDateString() : "N/A" } - { weeklyCaloriesData ? new Date(weeklyCaloriesData[0].endWeek.seconds * 1000).toLocaleDateString() : "N/A"}:</p>
        <p>{weeklyCaloriesData ? weeklyCaloriesData[0].totalCalories : "N/A"}/{weeklyCalorieGoal}</p>
      </div>
    </React.Fragment>
  );
}