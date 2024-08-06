import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import pcd_logo from '../../Assets/pcd_logo.png'

import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";



const Login = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={pcd_logo} alt="PCD Logo" />
        </div>
        <p className='logo-title'>Welcome back</p>
        <p className='logo-des'>sign in to access your account</p>
        <form>
          <div className="input-wrap">
            <input className="form-input" type="email" placeholder="Email" />
            <HiOutlineMail />
          </div>
          <div className="input-wrap">
            <input className="form-input" type="password" placeholder="Password" />
            <GoLock />
          </div>

          <div className="terms">
            <div className='checkbox-cont'>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms"> Remember me </label>
            </div>
            <Link to="#">Forget password ?</Link>
          </div>
          <button type="submit">Sign in <FaAngleRight /></button>
        </form>
        <p className='login-redirect'>New member? <Link to="/signup"> Register Now</Link></p>
      </div>
    </div>
  );
};

export default Login;
