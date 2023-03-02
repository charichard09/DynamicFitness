import React from 'react';

function CreateAccount(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.doSignUp}>
        <p>Create an Account</p>
        <label>Email</label>
        <br/>
        <input type="text" name="email" placeholder="thor@thor.com"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="text" name="password" placeholder="janefoster"/>
        <br/>
        <button type="submit">Create</button>
      </form>
      <br />
    </React.Fragment>
  );
}

export default CreateAccount;