import React from 'react';

function Login(props) {
  return (
    <React.Fragment>
      <h2>Login</h2>
      <form onSubmit={props.doSignIn}>
        <label>Email</label>
        <br/>
        <input type="text" name="email" defaultValue="thor@thor.com"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="text" name="password" defaultValue="janefoster"/>
        <br/>
        <button type="submit">Login</button>
      </form>
      <br />
    </React.Fragment> 
  );
}

export default Login;