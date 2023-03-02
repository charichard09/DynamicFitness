import React from 'react';
import { auth } from '../../firebase';

function Logout(props) {
  return (
    <React.Fragment>
      <p>Logged in as {auth.currentUser.email}</p>
      <button type="button" onClick={props.doSignOut}>Sign Out</button>
    </React.Fragment>
  );
}

export default Logout;