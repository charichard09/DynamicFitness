import React, { useState } from "react";
import imageRockportWalkTestChart from "../../assets/Rockport-Test.png";

function FitnessLevelForm(props) {
  const [fitnessLevel, setFitnessLevel] = useState(() => "beginner");

  const handleFitnessLevelChange = (event) => {
    setFitnessLevel(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitFitnessLevelForm(fitnessLevel);
  }

  return (
    <React.Fragment>
      <h3 style={{margin: 0}}>What is your fitness level?</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form onSubmit={handleSubmit}>
          <input type="radio" id="beginner" name="fitnessLevel" value="beginner" checked={fitnessLevel === "beginner"} onChange={handleFitnessLevelChange} />
          <label htmlFor="beginner">Beginner</label>
          <br />
          <input type="radio" id="intermediate" name="fitnessLevel" value="intermediate" checked={fitnessLevel === "intermediate"} onChange={handleFitnessLevelChange} />
          <label htmlFor="intermediate">Intermediate</label>
          <br />
          <input type="radio" id="advanced" name="fitnessLevel" value="advanced" checked={fitnessLevel === "advanced"} onChange={handleFitnessLevelChange} />
          <label htmlFor="advanced">Advanced</label>
          <br />
          <button type="submit">submit</button>
        </form>
          <button type="button" onClick={() => props.onClickingNext("goals")}>Next</button>
      </div>
      
      <div>
        <ul>
          <li>
            Beginner: Someone who is new to exercise or has not exercised regularly in a while. At this level, it is important to start
            slowly and focus on building a foundation of cardiovascular fitness, strength, and flexibility.
          </li>
          <li>
            Beginner: Someone who is new to exercise or has not exercised regularly in a while. At this level, it is important to start
            Intermediate: Someone who has been exercising regularly for a few months to a year and has developed some cardiovascular fitness,
            strength, and endurance. At this level, a person should be able to perform a moderate-intensity workout for 30-60 minutes without
            excessive fatigue.
          </li>
          <li>
          Advanced: Someone who has been exercising regularly for over a year and has a high level of cardiovascular fitness, strength, and
          endurance. At this level, a person should be able to perform high-intensity workouts for extended periods of time and may be able to
          perform advanced exercises, such as plyometrics, Olympic lifting, or high-level gymnastics movements.
          </li>
        </ul>
        <p>Tip: If you are uncertain, you can use the Rockport Walk Test to assess your current fitness level</p>
      </div>

      <div>
        <p>The Rockport Walk Test is a moderate exercise test used to estimate cardiorespiratory fitness. Here are the step-by-step instructions:</p>
        <ol>

          <li>Before beginning the test, make sure you are properly attired with comfortable clothing and shoes suitable for walking. You should 
            also have a stopwatch or timer and a flat, measured walking course that is one mile long.</li>
          <li>Before starting the test, take a resting heart rate and record it.</li>
          <li>Begin walking the one-mile course at a pace that is brisk but sustainable for you. You should aim to complete the mile as quickly as 
            possible without running.</li>
          <li>After finishing the walk, take your heart rate again immediately and record it.</li>
          <li>
            Using the time it took you to complete the mile and your heart rate before and after the test, calculate your estimated maximal oxygen 
            consumption (VO2max) using the following formula:
            <ul>
              <li>
                VO2max = 132.853 - (0.0769 x weight in pounds) - (0.3877 x age) + (6.315 x gender: 0 for females, 1 for males) - (3.2649 x time 
                in minutes) - (0.1565 x heart rate)
              </li>
            </ul>
          </li>
          <li>Your estimated VO2max is a measure of your cardiorespiratory fitness. Compare it to the norms for your age and gender to assess 
            your level of fitness.</li>
        </ol>
        <img src={`${imageRockportWalkTestChart}`} alt="Rockport Walk Test Chart" style={{ width: "50vh" }} />
      </div>
    </React.Fragment>
  );
}

export default FitnessLevelForm;

    