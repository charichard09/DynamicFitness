import React from 'react';

function Login(props) {
  return (
    <React.Fragment>
      <h2 className="font-bold text-2xl">Login</h2>
      <form onSubmit={props.doSignIn}>
        <label>Email</label>
        <br/>
        <input type="text" name="email" defaultValue="thor@thor.com"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="text" name="password" defaultValue="janefoster"/>
        <br/>
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-14 rounded" type="submit">Login</button>
      </form>
      <br />
    </React.Fragment> 
  );
}

export default Login;