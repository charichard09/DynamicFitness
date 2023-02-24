import React from 'react';
import imageDumbbell from '../../assets/dumbbell.png';

function LoginLogout() {
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
      
      <form>
        <label>Username</label>
        <br/>
        <input type="text" name="username" />
        <br/>
        <label>Password</label>
        <br/>
        <input type="text" name="password" />
        <br/>
        <button type="submit">Login</button>
      </form>
      <button type="button">Login with GitHub</button>
      <br />
      <button type="button">Login with GMail</button>
      <br />
      <button type="button">Login with GitHub</button>
      <br />
      <button type="button">Create Account</button>
    </div>
  );
}


export default LoginLogout;