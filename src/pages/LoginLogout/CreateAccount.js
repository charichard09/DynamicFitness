import React from 'react';

function CreateAccount(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.doSignUp}>
        <p className="text-2xl font-bold">Create an Account</p>
        <label>Email</label>
        <br/>
        <input type="text" name="email" placeholder="thor@thor.com"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="text" name="password" placeholder="janefoster"/>
        <br/>
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-14 rounded" type="submit">Create</button>
      </form>
      <br />
    </React.Fragment>
  );
}

export default CreateAccount;