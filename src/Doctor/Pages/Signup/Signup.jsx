import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

import pcd_logo from '../../Assets/pcd_logo.png'

import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";
import { GoLock } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";



const Signup = () => {

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
          <img src={pcd_logo} alt="PCD Logo" />
        </div>
        <p className='logo-des'>by creating a free account.</p>
        <form>
          <div className="input-wrap">
            <input className="form-input" type="text" placeholder="Full name" />
            <FiUser/>
          </div>
          <div className="input-wrap">
            <input className="form-input" type="email" placeholder="Valid email" />
            <HiOutlineMail/>
          </div>
          <div className="input-wrap">
            <input className="form-input" type="tel" placeholder="Phone number" />
            <AiOutlineMobile/>
          </div>
          <div className="input-wrap">
            <input className="form-input" type="password" placeholder="Strong Password" />
            <GoLock/>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By checking the box you agree to our <Link to="#">Terms and Conditions</Link>.
            </label>
          </div>
          <button type="submit">Next <FaAngleRight/></button>
        </form>
        <p className='login-redirect'>Already a member? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default Signup;
