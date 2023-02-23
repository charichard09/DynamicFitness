import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [name, setName] = useState("");

  return(
    <React.Fragment>
      <div style={{ "border": "5px solid black", display: "flex" }}>
        <h1 style={{ "align-self": "flex-star" }}>{name}</h1>

        <div style={{ "margin-left": "auto", display: "flex", "justify-content": "space-between", alignItems: "center", height: "100px" }}>
          <NavLink to="/" style={({ isActive }) =>
            isActive ? {textDecoration: "underline", "padding-right": "1em"} : { textDecoration: "none", "padding-right": "1em", "padding-left": "40ef" } }
            onClick={() => setName("Home")}>
            Home
          </NavLink>
          <NavLink to="/my-profile" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-right": "1em"} : { textDecoration: "none", "padding-right": "1em" } } onClick={() => setName("My Profile")}>
            My Profile
          </NavLink>
          <NavLink to="/start-workout" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-right": "1em"} : { textDecoration: "none", "padding-right": "1em" } } onClick={() => setName("Start Workout")}>
            Start Workout
          </NavLink>
          <NavLink to="/create-workout" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-right": "1em"} : { textDecoration: "none", "padding-right": "1em" } } onClick={() => setName("Create Workout")}>
            Create Workout
          </NavLink>
          <NavLink to="/login-logout" style={({ isActive }) =>
          isActive ? {textDecoration: "underline", "padding-left": ".2em"} : { textDecoration: "none", "padding-left": ".2em" } } onClick={() => setName("Login/Logout")}>
            Login/Logout
          </NavLink>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Header;