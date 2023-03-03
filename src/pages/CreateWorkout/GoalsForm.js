import React, { useState } from "react";
import imageOPTModel from "../../assets/OPT-model.png";

function GoalsForm(props) {
  const [goals, setGoals] = useState(() => "stability");

  const handleGoalsChange = (event) => {
    setGoals(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitGoalsForm(goals);
  };

  return (
    <React.Fragment>
      <h3 style={{margin: 0}}>What of these fitness goals do you align with the most?</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form onSubmit={handleSubmit}>
          <input type="radio" id="stability" name="stability" value="stability" checked={goals === "stability"} onChange={handleGoalsChange} />
          <label htmlFor="stability">Stability</label>
          <br />
          <input type="radio" id="endurance" name="fitnessLevel" value="endurance" checked={goals === "endurance"} onChange={handleGoalsChange} />
          <label htmlFor="endurance">Endurance</label>
          <br />
          <input type="radio" id="muscular-development" name="fitnessLevel" value="muscular-development" checked={goals === "muscular-development"} onChange={handleGoalsChange} />
          <label htmlFor="muscular-development">Muscular Development</label>
          <br />
          <input type="radio" id="maximal-strength" name="fitnessLevel" value="maximal-strength" checked={goals === "maximal-strength"} onChange={handleGoalsChange} />
          <label htmlFor="maximal-strength">Maximal Strength</label>
          <br />
          <input type="radio" id="power" name="fitnessLevel" value="power" checked={goals === "power"} onChange={handleGoalsChange} />
          <label htmlFor="power">Power</label>
          <br />
          <button type="submit">Submit</button>
        </form>
          <button type="button" onClick={() => props.onClickingNext("fitnessLevel")}>Back</button>
          <button type="button" onClick={() => props.onClickingNext("equipment")}>Next</button>
      </div>
      
      <div>
        <ul>
          <li>
            Stability: 
            <ul>
              <li>The ability to maintain a stable position or posture while moving or while holding a position. This is important for</li>
              <li>Example goals that align with this are...</li>
            </ul>
          </li>
          <li>
            Endurance: 
            <ul>
              <li>...</li>
              <li>Example goals that align with this are...</li>
            </ul>
          </li>
          <li>
            Muscular Development: 
            <ul>
              <li>...</li>
              <li>Example goals that align with this are...</li>
            </ul>
          </li>
          <li>
            Maximal Strength: 
            <ul>
              <li>...</li>
              <li>Example goals that align with this are...</li>
            </ul>
          </li>
          <li>
            Power: 
            <ul>
              <li>...</li>
              <li>Example goals that align with this are...</li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <p>Goal alignments are based on the National Academy of Sports Medicine’s Optimum Performance Training (OPT) model.</p>
        <ul>
          <li>
            The NASM OPT model is a comprehensive training system that helps fitness professionals design safe and effective exercise programs 
            for their clients.
          </li>
          <li>
            The NASM OPT model is based on the principle of progressive overload, which means gradually increasing the intensity, volume, or 
            complexity of exercises to ensure continued improvements in strength, endurance, and overall fitness. The model is also designed to be 
            flexible and adaptable, allowing fitness professionals to customize exercise programs to meet the unique needs and goals of their clients.
          </li>
        </ul>
        <img src={`${imageOPTModel}`} alt="OPT Model" style={{ width: "50vh" }} />
      </div>
    </React.Fragment>
  );
}

export default GoalsForm;