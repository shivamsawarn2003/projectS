import React from 'react';
import Logo from '../../assets/img/logo.png';
import "./NavCommon.css"
import { useNavigate } from 'react-router-dom';
import Locations from '../../location-data.json'
export function Navbar() {
  return (
    <>
      <div className='PayHead'>
        <img src={Logo} alt="Logo CH!" />
        <p>Welcome to EMPWR</p>
      </div>
    </>
  );
}

// Mail and Quote Component
export function MailNQuote() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/'); // Redirects to the home page
  };

  return (
    <>
      <div className="main-container">
        <div className='mail-container'>
            <p>
            Questions? Email us at<a href="mailto:sales@chargerhelp.com">sales@chargerhelp.com</a>
            </p>
            <button className='mail-container-btn' onClick={handleRedirect}>Cancel</button>
        </div>
        <div className="Quote">
            <p>
            Let's get started with your{' '}
            <span id="blueText">free service quote.</span>
            </p>
        </div>
      </div>
    </>
  );
}