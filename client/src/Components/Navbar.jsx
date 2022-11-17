import React from 'react';
import logo from '../image/logo.png';
import profile from '../image/profile.png';
import downArrow from '../image/downArrow.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" style={{ width: '160px', height: '63px' }} />

        <div className="navItem">
          <ul>
            <li>My Assignment</li>
            <li>Chat with Mentor</li>
            <li>
              <span>
                <img src={profile} alt="profile" className="profile" />
              </span>
              <span>ProfileName</span>
              <span>
                <img src={downArrow} alt="downArrow" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
