Project Proposal Template

Name of Student:
Richard Cha


Name of Project:
Dynamic Fitness


Project's Purpose or Goal: (What will it do for users?)
The goal of Dynamic Fitness is to provide users with a method to create a profile, create tailored dynamic workouts, track progress, and ask questions. 


List the absolute minimum features the project requires to meet this purpose or goal:

Profile Creation:
Users will be able to create a profile that will store their personal information, their current workout plan (if none, prompt create a workout, if exists, display previous workout session and provide button to "begin a workout"), below that, a button to see all plans created allowing full CRUD for workout plans, and a log of previous workout sessions.

Workout Creation:
Users will be able to create a workout plan based on the following factors: 
1. User's fitness level 
- Beginner, Intermediate, Advanced
2. User's fitness goal
- here we add a trigger that prompts on Beginner fitness level to recommend starting out with an endurance/stability workout 
to condition the body for the movements, to build stability, strength, endurance, mobility, and expose them to a proprioceptively enriched environment.
- Based on the NASM OPT model: strength endurance and what it is, muscular development and what it is, maximal strength and what it is, power and what it is
i.e. how goals like sports fit into the model, or weight loss, or powerlifting, or bodybuilding, or just general fitness
3. User's equipment availability
- each exercise will have an equipment tag that will be used to filter out exercises that the user does not have access to
4. User's time availability
- this will determine a recommended workout split (i.e. 3 days a week, 4 days a week, 5 days a week, etc.) and distribution of exercises base on muscle group
5. A name for the workout plan (i.e. Home workout, Gym workout, etc.)
After a user has created a workout, they will be able to save it to their profile and view it at any time.

Workout Session Tracking:
Users will be able to track a workout session by selecting a workout from their profile and clicking "begin workout". This will pull up their workout form that includes a timer to start, stop, "lap", reset. Users will be able to input the current weight (but still old weight) and input how many reps per set. Once the user has completed all exercises, they will be able to click "finish workout" and the workout session and timer will be saved to their profile.


What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
React
Javascript
Tailwind CSS
Firebase/Firestore

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.
Ask a Question:
Users will be able to navigate to a questions page where they can ask questions and view questions asked by other users (every question asked will be added to the database to be shown).
This question function will be handled by making an API request to OpenAI's GPT-3 API to generate a response to the question asked.


What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
OpenAI's GPT-3 API

Is there anything else you'd like your instructor to know?
None for now.