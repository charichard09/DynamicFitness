import React, { useState } from "react";
import imageOPTModel from "../../assets/OPT-model.png";

function GoalsForm(props) {
  const [goals, setGoals] = useState(() => "stability");
  const [showNextButton, setShowNextButton] = useState(true);
  const [showStabilityInfo, setShowStabilityInfo] = useState(true);
  const [showMuscularDevelopmentInfo, setShowMuscularDevelopmentInfo] = useState(true);
  const [showStrengthInfo, setShowStrengthInfo] = useState(true);
  const [showPowerInfo, setShowPowerInfo] = useState(true);

  const handleGoalsChange = (event) => {
    setGoals(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitGoalsForm(goals);
  };

  return (
    <React.Fragment>
      <h3 className="pl-2 text-2xl font-bold">What of these fitness goals do you align with the most?</h3>

      <div className="border-4 border-black bg-white pl-3 p-1 pb-2 mt-2 mb-10 m-5 flex-col h-auto" >
        <form onSubmit={handleSubmit}>
          <input type="radio" id="stability" name="stability" value="stability" checked={goals === "stability"} onChange={handleGoalsChange} />
          <label htmlFor="stability">Increasing Stability/Muscular Endurance (recommended for beginners)</label>
          <br />
          <input type="radio" id="muscular-development" name="fitnessLevel" value="muscular-development" checked={goals === "muscular-development"} onChange={handleGoalsChange} />
          <label htmlFor="muscular-development">Increasing Muscular Development</label>
          <br />
          <input type="radio" id="maximal-strength" name="fitnessLevel" value="maximal-strength" checked={goals === "maximal-strength"} onChange={handleGoalsChange} />
          <label htmlFor="maximal-strength">Increasing Maximal Strength</label>
          <br />
          <input type="radio" id="power" name="fitnessLevel" value="power" checked={goals === "power"} onChange={handleGoalsChange} />
          <label htmlFor="power">Increasing Power</label>
          <br />
          <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => setShowNextButton(false)}>Submit</button>
        </form>
          <div className="flex justify-between">
            <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("fitnessLevel")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-flex mr-2 pb-0.5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Back
            </button>
            <button type="button" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 mr-3 px-4 mt-4 mb-1 ml-3 rounded" onClick={() => props.onClickingFormNavigation("equipment")} hidden={showNextButton}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right inline-flex ml-2 pb-0.5" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
                    </button>
          </div>
      </div>
      
      <div className="mx-12 my-8">
      <p>Click here to learn more details about each goal</p>
        <button type="button" onClick={() => setShowStabilityInfo(!showStabilityInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 rounded">Stability/Muscular Endurance</button> 
        <div hidden={showStabilityInfo}>
          <ul>
            <ul>
              <li>
                Increasing the ability to maintain a stable position or posture while moving or holding a position for an extended amount of time. This option is
                highly recommended for if you selected beginner fitness level, or if it has been more than 3 months since you've trained with this goal
                in mind, as this option will give you a workout that will strengthen proper movement patterns, stability, mobility, and prepare your body
                for more advanced exercises.
              </li>
            </ul>
          </ul>

          <br />
          <ul >
            What are goals that align with Stability/Muscular Endurance? 
            <ol>
              <li>
                Improve posture, reduce joint pain, and enhance joint stability: The stabilization phase helps to improve muscular imbalances, correct 
                postural deviations, and improve overall joint health leading to improved posture and reduced joint pain.
              </li>
              <li>
                Building confidence with your gym equipment: The stabilization phase consists of lots of easy and few intermediate exercises that will help you 
                to practice exercises with low weights and high reps until you feel comfortable with the movements and are ready to move on to the next phase.
              </li>
              <li>
                Improve balance and coordination: The exercises in the stabilization phase require a significant amount of neuromuscular control, which can 
                help to improve balance and coordination.
              </li>
              <li> 
                Enhance core strength: The core muscles play a crucial role in stabilizing the spine and pelvis during movement. By improving core strength, 
                individuals can reduce the risk of injury and improve overall stability.
              </li>
              <li>
                Increase muscular endurance: Improve the ability of a muscle or group of muscles to contract repeatedly over an extended period without fatigue. 
                This is important for endurance athletes, such as runners and cyclists, who need to maintain a high level of performance for extended periods.
              </li>
              <li>
                Improve overall fitness and performance: By improving muscular endurance, neuromuscular control, and stability, individuals can improve their 
                overall fitness and performance in other areas of their life, such as sports, recreational activities, or daily tasks.
              </li>
              <li>
                Enhance cardiovascular endurance: The muscular endurance phase involves higher rep ranges and shorter rest periods, which can increase heart 
                rate and improve cardiovascular endurance.
              </li>
              <li>
                Increase calorie burn: The muscle endurance phase can help to increase calorie burn during and after the workout, as the higher intensity and 
                volume of work require more energy to perform. This can be helpful for individuals looking to lose weight or improve body composition.
              </li>
            </ol>
          </ul>
        </div>

        <br />
        <button type="button" onClick={() => setShowMuscularDevelopmentInfo(!showMuscularDevelopmentInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 rounded">Muscular Development</button> 
        <div hidden={showMuscularDevelopmentInfo}>
          <ul>
            <ul>
              <li>
                Muscular Development is designed to promote muscle growth and development through high volume, moderate to high-intensity resistance training.
              </li>
            </ul>
          </ul>

        <br />
        <ul>
          What are goals that align with Muscular Development? 
          <ol>
            <li>
              Increase muscle mass and size: The primary goal of the muscular development phase is to increase muscle mass and size. This can be beneficial for 
              individuals looking to improve their physical appearance or increase their overall strength and power.
            </li>
            <li>
              Improve body composition: The muscular development phase can help to decrease body fat percentage and increase lean muscle mass, which can improve overall 
              body composition and lead to a more toned and defined physique.
            </li>
            <li>
              Improve metabolic rate: Muscle tissue is more metabolically active than fat tissue, meaning that the more muscle mass an individual has, the more 
              calories they burn at rest. Therefore, the muscular development phase can help to increase metabolic rate and aid in long term weight loss or weight 
              management goals.
            </li>
            <li>
              Weight Loss: Though all of these choices will help you burn calories to lose weight, the muscular development phase will help you burn
              calories while focusing on maintaining muscle mass through a calorie defecit needed to lose weight.
            </li>
          </ol>
        </ul>
      </div>

        <br />
        <button type="button" onClick={() => setShowStrengthInfo(!showStrengthInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 rounded">Maximal Strength</button> 
        <div hidden={showStrengthInfo}>
          <ul>
            <ul>
              <li>
                Maximal Strength is designed to develop maximal strength through high-intensity, low-rep training by increasing the load placed on muscles.
              </li>
            </ul>
          </ul>

          <br />
          <ul>
            What are goals that align with Maximal Strength? 
            <ol>
              <li>
                Increase overall strength and power: The primary goal of the maximal strength phase is to increase overall strength and power. This can be beneficial 
                for athletes competing in strength-based sports or individuals looking to improve their physical performance in daily life.
              </li>
            </ol>
          </ul>
        </div>

        <br />
        <button type="button" onClick={() => setShowPowerInfo(!showPowerInfo)} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 rounded">Power</button> 
        <div hidden={showPowerInfo}>
          <ul>
            <ul>
              <li>
                Power is designed to develop power through explosive high-intensity, high-rep exercises by increasing the rate of force production (mass x force).
                This phase is more realistic to everyday life than the other phases since it uses all the phases prior to it but in a more realist speed and force.
                This phase should also only be selected if you are advanced and are comfortable with executing any of the exercises in the other phases.
              </li>
            </ul>
          </ul>

          <br />
          <ul>
            What are goals that align with Power? 
            <ol>
              <li>
                Improve athletic performance: The power phase is particularly useful for athletes who need to generate power and explosiveness in their sport, such as 
                sprinters, jumpers, and throwers.
              </li>
              <li>
                Increase speed and agility: The explosive movements used in the power phase can help to improve speed and agility, which can be beneficial for a 
                wide range of activities, from sports to everyday tasks.
              </li>
              <li>
                Improve reaction time: The power phase can also help to improve reaction time, which is the amount of time it takes for an individual to respond to a 
                stimulus. This can be particularly useful in sports or activities that require quick reflexes.
              </li>
              <li>
                Enhance neuromuscular control: The high-intensity, explosive movements used in the power phase require a high degree of neuromuscular control, which can 
                lead to improvements in overall muscle function and coordination.
              </li>
            </ol>
          </ul>
        </div>
      </div>

      <div className="mx-12 my-8">
        <p>Goal alignments are inspired by the National Academy of Sports Medicine???s Optimum Performance Training (OPT) model.</p>
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
        <img className="my-8" src={`${imageOPTModel}`} alt="OPT Model" style={{ width: "50vh" }} />
      </div>
    </React.Fragment>
  );
}

export default GoalsForm;