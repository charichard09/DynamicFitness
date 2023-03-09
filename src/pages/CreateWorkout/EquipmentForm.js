import React, { useState } from "react";

function EquipmentForm(props) {
  const [equipment, setEquipment] = useState(() => []);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleEquipmentChange = (event) => {
    if (event.target.checked) {
      setEquipment(prevState => [...prevState, event.target.value]);
    } else {
      setEquipment(prevState => prevState.filter(e => e !== event.target.value));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitEquipmentForm(equipment);
  }

  return (
    <React.Fragment>
      <h3 className="pl-2">What equipment do you have access to?</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form onSubmit={handleSubmit}>
          <input type="checkbox" id="bodyweight" name="bodyweight" value="bodyweight" onChange={handleEquipmentChange} />
          <label htmlFor="bodyweight">Bodyweight</label>
          <br />
          <input type="checkbox" id="dumbbells" name="dumbbells" value="dumbbells" onChange={handleEquipmentChange} />
          <label htmlFor="dumbbells">Dumbbells</label>
          <br />
          <input type="checkbox" id="barbell" name="barbell" value="barbell" onChange={handleEquipmentChange} />
          <label htmlFor="barbell">Barbell</label>
          <br />
          <input type="checkbox" id="kettlebells" name="kettlebells" value="kettlebells" onChange={handleEquipmentChange} />
          <label htmlFor="kettlebells">Kettlebells</label>
          <br />
          <input type="checkbox" id="pull-up-bar" name="pull-up-bar" value="pull up bar" onChange={handleEquipmentChange} />
          <label htmlFor="pull-up-bar">Pull Up Bar</label>
          <br />
          <input type="checkbox" id="medicine-ball" name="medicine-ball" value="medicine ball" onChange={handleEquipmentChange} />
          <label htmlFor="medicine-ball">Medicine Ball</label>
          <br />
          <input type="checkbox" id="resistance-band" name="resistance-band" value="cable" onChange={handleEquipmentChange} />
          <label htmlFor="resistance-band">Resistance Band</label>
          <br />
          <input type="checkbox" id="cable-machine" name="cable-machine" value="cable" onChange={handleEquipmentChange} />
          <label htmlFor="cable-machine">Cable Machine</label>
          <br />
          <input type="checkbox" id="bench" name="bench" value="bench" onChange={handleEquipmentChange} />
          <label htmlFor="bench">Bench</label>
          <br />
          <input type="checkbox" id="rack" name="rack" value="rack" onChange={handleEquipmentChange} />
          <label htmlFor="rack">Barbell Rack or Powercage</label>
          <br />
          {/* <input type="checkbox" id="other" name="other" value="other" onChange={handleEquipmentChange} />
          <label htmlFor="other">Other</label>
          <br /> */}
          <button type="submit" onClick={() => setShowNextButton(false)}>Submit</button>
        </form>
          <button type="button" onClick={() => props.onClickingFormNavigation("goals")}>Back</button>
          <button type="button" onClick={() => props.onClickingFormNavigation("availability")} hidden={showNextButton}>Next</button>
      </div>
    </React.Fragment>
  );
}

export default EquipmentForm;