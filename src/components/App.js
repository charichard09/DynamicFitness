import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import MyProfile from '../pages/MyProfile/MyProfile';
import CreateWorkout from '../pages/CreateWorkout/CreateWorkout';
import StartWorkout from '../pages/StartWorkout/StartWorkout';
import LoginLogout from '../pages/LoginLogout/LoginLogout';
import Home from '../pages/Home/Home';
import Footer from './Footer';

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
