import React from 'react';
import './Loginform.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
const Loginform = () => {
  return (
    <div className='wrapper'>
       <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
          <RiLockPasswordFill className="icon" />
        </div>
        
        <div className="remember-forget">
          <label><input type="checkbox"/>Remember me </label>
          <a href='#'>Forget password?</a>
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account?<a href="#">Register</a></p>
        </div>
        </form>
    </div>
   );
};

export default Loginform;