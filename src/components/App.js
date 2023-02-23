import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import MyProfile from '../pages/MyProfile';
import CreateWorkout from '../pages/CreateWorkout';
import StartWorkout from '../pages/StartWorkout';
import LoginLogout from '../pages/LoginLogout';
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/create-workout" element={<CreateWorkout />} />
        <Route path="/start-workout" element={<StartWorkout />} />
        <Route path="/login-logout" element={<LoginLogout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
