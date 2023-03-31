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
import { auth } from '../firebase'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/create-workout" element={<CreateWorkout />} />
            <Route path="/start-workout" element={<StartWorkout />} />
            <Route path="/login-logout" element={<LoginLogoutControl />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
