import React, { useState } from "react";
import imageRockportWalkTestChart from "../../assets/Rockport-Test.png";

function FitnessLevelForm(props) {
  const [fitnessLevel, setFitnessLevel] = useState(() => 1);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleFitnessLevelChange = (event) => {
    setFitnessLevel(parseInt(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitFitnessLevelForm(fitnessLevel);
  }

  return (
    <React.Fragment>
      <div >
        <h3><span className="pl-2 text-2xl font-bold">What is your fitness level?</span></h3>
        <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-auto" >
          <form onSubmit={handleSubmit} >
            <input type="radio" id="beginner" name="fitnessLevel" value={1} checked={fitnessLevel === 1} onChange={handleFitnessLevelChange} />
            <label htmlFor="beginner">Beginner</label>
            <br />
            <input type="radio" id="intermediate" name="fitnessLevel" value={2} checked={fitnessLevel === 2} onChange={handleFitnessLevelChange} />
            <label htmlFor="intermediate">Intermediate</label>
            <br />
            <input type="radio" id="advanced" name="fitnessLevel" value={3} checked={fitnessLevel === 3} onChange={handleFitnessLevelChange} />
            <label htmlFor="advanced">Advanced</label>
            <br />
            <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => setShowNextButton(false)}>submit</button>
          </form>
          <div className="flex justify-end">
            <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mr-3 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("goals")} hidden={showNextButton}>
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right inline-flex ml-2 pb-0.5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div>
          <ul>
            <li>
              Beginner: Someone who is new to exercise or has not exercised regularly in a while. At this level, it is important to start
              slowly and focus on building a foundation of strength, flexibility, mobility, and cardiovascular fitness.
            </li>
            <li>
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
          <p>The Rockport Walk Test is a simple moderate-level exercise test used to estimate cardiorespiratory fitness. Here are the step-by-step instructions:</p>
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
      </div>
    </React.Fragment>
  );
}

export default FitnessLevelForm;

    