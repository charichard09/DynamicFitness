// Add Delete and Update functionality to entries after they are entered
// Have app persist? (store data in local storage)

import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Calories() {
  const [calories, setCalories] = useState([]);
  const [dailyCalories, setDailyCalories] = useState({"totalCalories": 0, "date": "n/a", "entries": []});
  let date = new Date();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const day = days[date.getDay() - 1];
  const navigate = useNavigate();

  function handleTrack(e) {
    e.preventDefault();
    console.log("Submitted", e.target.food.value, e.target.calories.value, e.target.date.value, e);
    setCalories(prevState => [...prevState, { food: e.target.food.value, calories: e.target.calories.value, date: e.target.date.value }]);
    setDailyCalories(prevState => ({
      ...prevState, 
      "totalCalories" : prevState.totalCalories + parseInt(e.target.calories.value),
      "date": e.target.date.value,
      "entries": [...prevState.entries, 
        ...[{
        "food": e.target.food.value,
        "calories": e.target.calories.value
        }]
      ]
    }));
  }

  async function handleSubmitDay() {
    // setDailyCalories, add user id, send to db, reroute? 
    console.log("dailyCalories before adding to db: ", dailyCalories);
    await addDoc(collection(db, "calories"), {
      ...dailyCalories,
      userId: auth.currentUser.uid,
    });
    navigate('/my-profile');
  }

  return (
    <div style={{ "backgroundColor": "RGB(255, 205, 41)", "height": "100vh" }}>
      <h3 style={{margin: 0}}>Tracking Calories For {`${day}, ${months[date.getMonth()]} ${date.getFullYear()}`}</h3>
      <form onSubmit={(e) => {handleTrack(e)}}>
        <label htmlFor="food">Food:</label>
        <br />
        <input type="text" id="food" defaultValue="" placeholder="" />
        <br />
        <label htmlFor="calories">Calories:</label>
        <br />
        <input type="number" id="calories" defaultValue={0} />
        <br />
        <input hidden type="text" id="date" defaultValue={`${day}, ${date.getMonth()}, ${date.getFullYear()}`} />
        <br />
        <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mr-3 mt-4 mb-1 ml-3 rounded">Track</button>
      </form>
      
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
        <button type="button" onClick={() => handleSubmitDay()} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mr-3 mt-4 mb-1 ml-3 rounded">Submit Day</button>
      </div>
    </div>
  );
}