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
      <div style={{ "padding-left": "1.5em", "padding-right": "1.5em", display: "flex", "background-color": "black" }}>
        <h1 style={{ "align-self": "flex-star", color: "white" }}>{name}</h1>

        <div style={{ "margin-left": "auto", display: "flex", "justify-content": "space-between", alignItems: "center", height: "100px" }}>
          <NavLink to="/" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "padding-right": "1em", color: "white"} : { textDecoration: "none", "padding-right": "1em", "padding-left": "40ef", color: "white" } }
            onClick={() => handleNameChange("Dynamic Fitness")}>
            Home
          </NavLink>
          <NavLink to="/my-profile" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-right": "1em", color: "white"} : { textDecoration: "none", "padding-right": "1em", color: "white" } } 
          onClick={() => handleNameChange("My Profile")}>
            My Profile
          </NavLink>
          <NavLink to="/start-workout" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-right": "1em", color: "white"} : { textDecoration: "none", "padding-right": "1em", color: "white" } } 
          onClick={() => handleNameChange("Start Workout")}>
            Start Workout
          </NavLink>
          <NavLink to="/create-workout" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-right": "1em", color: "white"} : { textDecoration: "none", "padding-right": "1em", color: "white" } } 
          onClick={() => handleNameChange("Create Workout")}>
            Create Workout
          </NavLink>
          <NavLink to="/login-logout" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-left": ".2em", color: "white"} : { textDecoration: "none", "padding-left": ".2em", color: "white" } } 
          onClick={() => handleNameChange("Login/Logout")}>
            Login/Logout
          </NavLink>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Header;