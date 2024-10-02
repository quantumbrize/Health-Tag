import React from 'react';
import './ShopHeader.css';

import pcd_logo from '../../Assets/pcd_logo.png'
import user_profile_img from '../../Assets/user_profile_img.jpeg'


function ShopHeader() {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={pcd_logo} alt="logo" />
          </div>
          <div className="title">Shop Name</div>
          <div className="profile">
            <img src={user_profile_img} alt="profile_img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopHeader