import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';

function Header() {
  // if localStorage.getItem("name") is null, then set name to "Dynamic Fitness"
  const [name, setName] = useState(localStorage.getItem("name") || "Dynamic Fitness");
  const [display, setDisplay] = useState(false);

  const handleNameChange = (newName) => {
    setName(newName);
    // store newName in localStorage so page refreshes don't reset name to "Dynamic Fitness"
    localStorage.setItem("name", newName);
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    });
  }, []);

  let displayConditional = null;
  if (display) {
    displayConditional = 
    <div>
      <NavLink to="/my-profile" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("My Profile")}>
          My Profile
      </NavLink>
      <NavLink to="/start-workout" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("Start Workout")}>
          Start Workout
      </NavLink>
      <NavLink to="/create-workout" style={({ isActive }) =>
        isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", color: "white" } }
        onClick={() => handleNameChange("Create Workout")}>
          Create Workout
      </NavLink>
    </div>
  }

  return(
    <React.Fragment>
      <div className="font-semibold" style={{ "paddingLeft": "1.5em", "paddingRight": "1.5em", display: "flex", "backgroundColor": "black" }}>
        <h1 className="align-middle flex text-4xl" style={{ "alignSelf": "center", color: "white", "flex": "1" }}>{name}</h1>

        <div style={{ "marginLeft": "auto", display: "flex", "justifyContent": "space-between", alignItems: "center", height: "100px" }}>
          {/* <NavLink to="/" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", "paddingLeft": "40ef", color: "white" } }
            onClick={() => handleNameChange("Dynamic Fitness")}>
            Home
          </NavLink> */}

          {displayConditional}
          
          {/* change to="/login-logout" after finishing Home page */}
          <NavLink to="/" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "paddingLeft": ".2em", color: "white"} : { textDecoration: "none", "paddingLeft": ".2em", color: "white" } } 
          onClick={() => handleNameChange("Login/Logout")}>
            Login/Logout
          </NavLink>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Header;