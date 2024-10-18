import React from 'react'
import "./PatientForm.css";

import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';



function PatientForm() {

  const navigate = useNavigate()

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    navigate('/doctor/medicine-form');
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };


  return (
    <div className="form-container">
      <div className="form-number">
        <div className="line"></div>
        <div className="number-border">
          <div className='num'>1</div>
        </div>
        <div className='num num-dis'>2</div>
        <div className='num num-dis'>3</div>
      </div>
      <div className="form-box">
        <div className="form-title">
          <p>Patient’s Details</p>
          <span>Doctor</span>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-wrap">
            <label className='label' htmlFor="fname">First Name</label>
            <input className="form-input" name='fname' type="text" placeholder="Enter Patient’s First Name" />
          </div>
          <div className="input-wrap">
            <label htmlFor="lname">Last Name</label>
            <input className="form-input" name='lname' type="text" placeholder="Enter Patient’s Last Name" />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">Email id</label>
            <input className="form-input" name='email' type="email" placeholder="Enter Patient’s Email Id" />
          </div>
          <div className="input-wrap">
            <label htmlFor="number">Phone number</label>
            <input className="form-input" name='number' type="number" placeholder="Enter Patient’s Phone Number" />
          </div>
          <div className="more-input-wrap">
            <div className="input-wrap">
              <label htmlFor="age">Age</label>
              <input className="form-input" name='age' type="number" placeholder="Enter Patient’s Age" />
            </div>
            <div className="input-wrap">
              <label htmlFor="weight">Weight</label>
              <input className="form-input" name='weight' type="number" placeholder="Enter Patient’s Weight" />
            </div>
          </div>
          <div className="more-input-wrap">
            <div className="input-wrap">
              <label htmlFor="blood">Blood Pressure</label>
              <input className="form-input" name='blood' type="number" placeholder="Enter Patient’s BP" />
            </div>
            <div className="input-wrap">
              <label htmlFor="syndrome">Syndrome</label>
              <input className="form-input" name='syndrome' type="tel" placeholder="Enter Patient’s Syndrome" />
            </div>
          </div>
          <button className='form-btn'>
            <span onClick={handleBackClick}><HiOutlineArrowLongLeft style={{ marginRight: '8px' }} />Back</span>
            <span type="submit">Next <HiOutlineArrowLongRight /></span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default PatientForm