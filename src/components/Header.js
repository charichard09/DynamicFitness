import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  return(
    <React.Fragment>
      <h1 style={{ "display": "inline" }}>Dynamic Fitness</h1>
      <NavLink to="/" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined }>Home</NavLink>
      <NavLink to="/my-profile" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined }>My Profile</NavLink>
      <NavLink to="/start-workout" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined }>Start Workout</NavLink>
      <NavLink to="/create-workout" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined }>Create Workout</NavLink>
      <NavLink to="/login-logout" style={({ isActive }) => isActive ? {textDecoration: "underline"} : undefined }>Login/Logout</NavLink>
    </React.Fragment>
  );
}

export default Header;