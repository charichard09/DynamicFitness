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
      <div className="h-screen">
        <h3 className="pl-2 text-2xl font-bold">What equipment do you have access to?</h3>
        <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-auto" >
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
            {/* <input type="checkbox" id="kettlebells" name="kettlebells" value="kettlebells" onChange={handleEquipmentChange} />
            <label htmlFor="kettlebells">Kettlebells</label>
            <br /> */}
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
            <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => setShowNextButton(false)}>Submit</button>
          </form>
          <div className="flex justify-between">
            <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("goals")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-flex mr-2 pb-0.5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Back
            </button>
            <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mr-3 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("availability")} hidden={showNextButton}>
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right inline-flex ml-2 pb-0.5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <p className="mx-12 my-8">
          There are a myriad of exercise equipment and machines that I have chosen to leave out for now. You may find some of these as "alternatives" to exercises such as a 
          stability balls that can add controlled instability to exercises or kettlebells for deadlifts. For now the equipment listed are the most common and most versatile.
        </p>
      </div>
    </React.Fragment>
  );
}

export default EquipmentForm;