import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css'; // Make sure this file is created too

const NavBar = () => {
  const whatsappNumber = '9123325003';

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="" className="nav-link">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            Profile
          </Link>
        </li>
        <li>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="nav-icon whatsapp-icon" />
            WhatsApp
          </a>
        </li>
        <li>
          <Link to="" className="nav-link">
            <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
