import React from 'react'
import './DoctorForm.css';

import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'; // Import the NavBar


function DoctorForm() {

  const navigate = useNavigate()

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    navigate('/shop-details');
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };


  return (
    <div className="form-container">
      <div className="form-number">
        <div className="line"></div>
        <div className='num'>1</div>
        <div className='num'>2</div>
        <div className="number-border">
          <div className='num'>3</div>
        </div>
      </div>
      <div className="form-box">
        <div className="form-title">
          <p>Doctor’s Details</p>
          <span>Doctor</span>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-wrap">
            <label className='label' htmlFor="fname">First Name</label>
            <input className="form-input" name='fname' type="text" placeholder="Enter Doctor’s First Name" />
          </div>
          <div className="input-wrap">
            <label htmlFor="lname">Last Name</label>
            <input className="form-input" name='lname' type="text" placeholder="Enter Doctor’s Last Name" />
          </div>
          <div className="input-wrap">
            <label htmlFor="number">Phone number</label>
            <input className="form-input" name='number' type="number" placeholder="Enter Doctor’s Phone Number" />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">Email id</label>
            <input className="form-input" name='email' type="email" placeholder="Enter Doctor’s Email Id" />
          </div>
          <div className="more-input-wrap">
            <div className="input-wrap">
              <label htmlFor="Date">Date</label>
              <input className="form-input" name='date' type="text" placeholder="00/00/00" />
            </div>
            <div className="input-wrap file-input">
              <label htmlFor="sign">E-Signature Name</label>
              <input id='sign' className="form-input" name='sign' type="file" />
              <label for="sign" class="file-label">Choose File</label>
            </div>
          </div>
          <div className="input-wrap">
            <label className='dropdown-label'>Assign To Shop</label>
            <select >
              <option value="shop">Shop</option>
              <option value="Shop1">Shop 1</option>
              <option value="Shop2">Shop 2</option>
            </select>
          </div>
          <button className='form-btn'>
            <span onClick={handleBackClick}><HiOutlineArrowLongLeft style={{ marginRight: '8px' }} />Back</span>
            <span type="submit">Next <HiOutlineArrowLongRight /></span>
          </button>
        </form>
      </div>
      {/* Include the NavBar here at the bottom */}
      <NavBar />
    </div>
  )
}

export default DoctorForm