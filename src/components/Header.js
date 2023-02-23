import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  // if localStorage.getItem("name") is null, then set name to "Dynamic Fitness"
  const [name, setName] = useState(localStorage.getItem("name") || "Dynamic Fitness");

  const handleNameChange = (newName) => {
    setName(newName);
    // store newName in localStorage so page refreshes don't reset name to "Dynamic Fitness"
    localStorage.setItem("name", newName);
  }

  return(
    <React.Fragment>
      <div style={{ "paddingLeft": "1.5em", "paddingRight": "1.5em", display: "flex", "backgroundColor": "black" }}>
        <h1 style={{ "alignSelf": "flex-star", color: "white" }}>{name}</h1>

        <div style={{ "marginLeft": "auto", display: "flex", "justifyContent": "space-between", alignItems: "center", height: "100px" }}>
          <NavLink to="/" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "paddingRight": "1em", color: "white"} : { textDecoration: "none", "paddingRight": "1em", "paddingLeft": "40ef", color: "white" } }
            onClick={() => handleNameChange("Dynamic Fitness")}>
            Home
          </NavLink>
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
          <NavLink to="/login-logout" style={({ isActive }) =>
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