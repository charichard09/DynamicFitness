import React from 'react';
import { auth } from '../../firebase';

function Logout(props) {
  return (
    <React.Fragment>
      <p>Logged in as {auth.currentUser.email}</p>
      <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-3 rounded" type="button" onClick={props.doSignOut}>Sign Out</button>
    </React.Fragment>
  );
}

export default Logout;