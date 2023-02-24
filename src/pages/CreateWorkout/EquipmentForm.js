import React from "react";

function EquipmentForm(props) {
  return (
    <React.Fragment>
      <h3 style={{margin: 0}}>What equipment do you have access to?</h3>

      <div style={{ backgroundColor: "white", marginLeft: "1em", marginRight: "1em", padding: ".5em" }}>
        <form>
          <input type="checkbox" id="dumbbells" name="dumbbells" value="dumbbells" />
          <label htmlFor="dumbbells">Dumbbells</label>
          <br />
          <input type="checkbox" id="barbell" name="barbell" value="barbell" />
          <label htmlFor="barbell">Barbell</label>
          <br />
          <input type="checkbox" id="kettlebells" name="kettlebells" value="kettlebells" />
          <label htmlFor="kettlebells">Kettlebells</label>
          <br />
          <input type="checkbox" id="medicine-ball" name="medicine-ball" value="medicine-ball" />
          <label htmlFor="medicine-ball">Medicine Ball</label>
          <br />
          <input type="checkbox" id="resistance-band" name="resistance-band" value="resistance-band" />
          <label htmlFor="resistance-band">Resistance Band</label>
          <br />
          <input type="checkbox" id="bodyweight" name="bodyweight" value="bodyweight" />
          <label htmlFor="bodyweight">Bodyweight</label>
          <br />
          <input type="checkbox" id="other" name="other" value="other" />
          <label htmlFor="other">Other</label>
          <br />
          <button type="button" onClick={() => props.onClickingNext("goals")}>Back</button>
          <button type="button">Next</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default EquipmentForm;