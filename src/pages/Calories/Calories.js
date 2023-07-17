// TODO:
// Add Delete and Update functionality to entries after they are entered
// Have app persist? (store data in local storage)
// if someone does not submit on Sunday, then the previous week's data will be lost. possible fix is check previous weeks Date.toLocaleString end against current dates previous sunday Date.toLocaleString

import React, { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "reactfire";
import { query, where, orderBy, limit } from "firebase/firestore";

export default function Calories() {
  const [calories, setCalories] = useState([]);
  const [dailyCalories, setDailyCalories] = useState({"totalCalories": 0, "date": "n/a", "entries": []});
  let date = new Date();
  const navigate = useNavigate();

  const firestore = useFirestore();

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();
  const formattedDate = yyyy + '-' + mm + '-' + dd;

  // Create state variable for the date input's value
  const [submitDate, setSubmitDate] = useState(formattedDate);

  // Handle changes to the date input's value
  const handleChangeDate = event => {
    setSubmitDate(event.target.value);
  };

  function handleTrack(e) {
    e.preventDefault();
    console.log("Submitted", e.target.food.value, e.target.calories.value, e);
    setCalories(prevState => [...prevState, { food: e.target.food.value, calories: e.target.calories.value }]);
    setDailyCalories(prevState => ({
      ...prevState, 
      "totalCalories" : prevState.totalCalories + parseInt(e.target.calories.value),
      "entries": [...prevState.entries, 
        ...[{
        "food": e.target.food.value,
        "calories": e.target.calories.value
        }]
      ]
    }));
  }

  async function handleSubmitDay() {
    const currentDate = new Date(...submitDate.split("-").map((item, index) => {
        if (index === 1) {
          return item - 1;
        }
        return item;
      })
    );
    console.log("dailyCalories before adding to db: ", dailyCalories);
    await addDoc(collection(db, "calories"), {
      ...dailyCalories,
      userId: auth.currentUser.uid,
      date: currentDate,
    });

    const caloriesCollection = collection(firestore, 'calories');
    const caloriesQuery = query(caloriesCollection, where('userId', '==', auth.currentUser.uid), orderBy('date', 'desc'), limit(7));
    const querySnapshot = await getDocs(caloriesQuery);

    // Transform the data into an array of documents
    const caloriesData = querySnapshot.docs.map(doc => doc.data());

    let totalCalories = 0;
    let caloriesChecked = new Set();
    // if it is Sunday, calculate total calories for the week when submitting 
    // comment it to test logic:
    // if (true) {
    if (currentDate.getDay() === 0) {
      console.log("caloriesData: ", caloriesData);
      for (let i = 0; i < 7; i++) {
        let day = new Date(caloriesData[i].date.seconds * 1000).getDay();
        if (!caloriesChecked.has(day) && day !== 0) {
          console.log("totalCalories", totalCalories);
          totalCalories += caloriesData[i].totalCalories;
        } else {
          totalCalories = totalCalories + 2500 * (6 - i);
          console.log("totalCalories", totalCalories);
          break;
        }
        caloriesChecked.add(day);
      }
      totalCalories += dailyCalories.totalCalories;
      console.log("totalCalories before adding to db", totalCalories);
      let newDate = new Date(currentDate.getTime());
      await addDoc(collection(db, "weeklyCalories"), {
        "totalCalories": totalCalories,
        "userId": auth.currentUser.uid,
        "endWeek": currentDate,
        "startWeek": new Date(newDate.setDate(newDate.getDate() - 6)),
      });
    }
    navigate('/my-profile');
  }

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <div className="pl-5 py-3"> 
        <label htmlFor="date">Date:</label>
        <br />
        <input type="date" id="date" defaultValue={submitDate} placeholder={submitDate} onChange={handleChangeDate} />
        <br />
        <form onSubmit={(e) => {handleTrack(e)}}>
          <label htmlFor="food">Food:</label>
          <br />
          <input type="text" id="food" defaultValue="" placeholder="" />
          <br />
          <label htmlFor="calories">Calories:</label>
          <br />
          <input type="number" id="calories" defaultValue={0} />
          <br />
          <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mr-3 mt-4 mb-1 ml-3 rounded">Track</button>
        </form>
      </div>
      
      <div className="pl-5"> 
        <h3>Daily Log:</h3>
        <div className="flex flex-col">
          {
            calories.map((entry, index) => {
              return (
                <div key={index} className="m-3 border-4 border-black bg-white pl-3 p-1 pb-4 mt-2 mb-5 flex-col h-auto" >
                  <h4 className="text-2x1">{entry.food}</h4>
                  <h4 className="text-2x1">{entry.calories} Calories</h4>
                </div>
              )
            })
          }
        </div>

        <h3>Current Total Calorie Intake:</h3>
        <div className="flex flex-col">
          {dailyCalories.totalCalories}
          <button type="button" onClick={() => handleSubmitDay()} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 mr-3 mt-4 mb-1 ml-3 rounded">Submit Day</button>
        </div>
      </div>
    </div>
  );
}