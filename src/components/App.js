import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import MyProfile from '../pages/MyProfile/MyProfile';
import CreateWorkout from '../pages/CreateWorkout/CreateWorkout';
import StartWorkout from '../pages/StartWorkout/StartWorkout';
import LoginLogoutControl from '../pages/LoginLogout/LoginLogoutControl';
import Home from '../pages/Home/Home';
import Footer from './Footer';
import { getFirestore } from 'firebase/firestore';
import { useFirebaseApp, FirestoreProvider, AuthProvider } from 'reactfire';
import { auth } from '../firebase';
import '@ionic/react/css/core.css';
import Calories from '../pages/Calories/Calories.js';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/create-workout" element={<CreateWorkout />} />
            <Route path="/start-workout" element={<StartWorkout />} />
            {/* change path="login-logout" after finishing Home Page */}
            <Route path="/" element={<LoginLogoutControl />} />
            <Route path="/calories" element={<Calories />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
