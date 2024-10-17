import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import pcd_logo from '../../Assets/pcd_logo.png'

import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";



const Login = () => {
  const to_verify=()=>{
    window.location="/doctor/Verification"
  }
  const trav_to_patent=(e)=>{
    e.preventDefault()
    window.location="/doctor/patient"
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={pcd_logo} alt="PCD Logo" />
        </div>
        <p className='logo-title'>Welcome back</p>
        <p className='logo-des'>sign in to access your account</p>
        <form onSubmit={trav_to_patent}>
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
      <Link onClick={to_verify} className='back-button' style={{position:"absolute",height:"9%",backgroundColor:"black",bottom:"-4%",left:"42%",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}> <FaAngleLeft/> </Link>
      
    </div>
  );
};

export default Login;
