import React from 'react';
import imageDumbbell from '../../assets/dumbbell.png';

function LoginLogout() {
  return (
    <div style={{ backgroundColor: "RGB(255, 205, 41)" }}>
      <div style={{ height: "50vh", position: "relative" }}>
        <div style={{ 
          backgroundImage: `url(${imageDumbbell})`, 
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%", /* adjust as needed */
          height: "50%" /* adjust as needed */
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
        <button>Login</button>
      </form>
    </div>
  );
}


export default LoginLogout;