import React, { useState } from "react";

function DetailsButton(props) {
  const [showDetails, setShowDetails] = useState(true);
  const { exercise } = props;

  return(
    <React.Fragment>
      <button type="button" onClick={() => setShowDetails(!showDetails)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mb-4 mx-3 rounded">Details</button>
      <div className="mx-12 mb-4" hidden={showDetails}>
        <p>Instructions:</p>
          <ol>
            {exercise.instruction.map(e => {
              return <li key={e}>{"- " + e}</li>
            })}
          </ol>

          <br />
          <p>description: {exercise.description}</p>

          <br />
          <p>equipment needed: {exercise.equipmentNeeded.map(e => e + " ")}</p>

          <br />
          <p>alternatives: {exercise.alternatives ? exercise.alternatives.map(e => e + ", ") : null}</p>
      </div>
    </React.Fragment>
  );
}

export default DetailsButton;