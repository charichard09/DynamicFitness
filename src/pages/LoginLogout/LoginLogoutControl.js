import { React, useEffect, useState } from 'react';
import imageDumbbell from '../../assets/dumbbell.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import Login from './Login';
import Logout from './Logout';
import CreateAccount from './CreateAccount';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function LoginLogoutControl() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [displayCreateAccout, setDisplayCreateAccount] = useState(false);
  const [display, setDisplay] = useState(null);
  const [hideCreateAccount, setHideCreateAccount] = useState(false);

  async function doSignUp(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    console.log(email);
    const password = e.target.elements.password.value;
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSignUpSuccess(true);
        addAccountToFirestore(userCredential);
      })
      .catch(error => {
        setSignUpSuccess(error.message);
      });
  }

  async function addAccountToFirestore(userCredentialParam) {
    await setDoc(doc(db, "users", userCredentialParam.user.uid), { 
      email: userCredentialParam.user.email,
      workouts: [],
      personalGoal: "Exercise is a personal journey of improving yourself. Here is a place you can write down your personal goals.",
      userId: userCredentialParam.user.uid
      });
    }

  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setSignInSuccess(true);
      })
      .catch(error => {
        setSignInSuccess(error.message);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(() => {
        setSignOutSuccess(`Logged out successfully!`);
      })
      .catch(error => {
        setSignOutSuccess(error.message);
      }
    );
  }
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setDisplay(<Logout doSignOut={doSignOut} />);
        setDisplayCreateAccount(false);
        setHideCreateAccount(true);
      } else {
        setDisplay(<Login doSignIn={doSignIn} />);
        setHideCreateAccount(false);
      }
    });

    if (signUpSuccess) {
      setDisplayCreateAccount(false); 
    } 
  }, [signInSuccess, signOutSuccess, signUpSuccess]);

  return (
    <div style={{ backgroundColor: "RGB(255, 205, 41)", height: "100vh" }}>
      <div style={{ height: "40vh", position: "relative" }}>
        <div style={{ 
          backgroundImage: `url(${imageDumbbell})`, 
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          bottom: "0",
          left: "20%",
          width: "60%", /* adjust as needed */
          height: "100%" /* adjust as needed */
        }}>
        </div>
      </div> 
      
      {display}
      {displayCreateAccout ? <CreateAccount doSignUp={doSignUp} /> : <button type="button" onClick={() => setDisplayCreateAccount(!displayCreateAccout)} style={hideCreateAccount ? {display: "none"} : {display: ""} }>Create Account</button>}
      {signUpSuccess !== true ? <p>{signUpSuccess}</p> : null}
    </div>
  );
}


export default LoginLogoutControl;