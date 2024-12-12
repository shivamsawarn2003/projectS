import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => setDropdown(menu);
  const handleMouseLeave = () => setDropdown(null);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <ul className="nav-links">
          <li
            onMouseEnter={() => handleMouseEnter('whatWeDo')}
            onMouseLeave={handleMouseLeave}
          >
            What We Do
            {dropdown === 'whatWeDo' && (
              <div className="dropdown">
                <a href="Reliability-as-a-service">Reliability as a Service (RaaS)</a>
                <a href="Learning-and-development">Learning & Development</a>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('whoWeServe')}
            onMouseLeave={handleMouseLeave}
          >
            Who We Serve
            {dropdown === 'whoWeServe' && (
              <div className="dropdown">
                <a href="businesses">Businesses</a>
                <a href="utilities">Utilities</a>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('ourCompany')}
            onMouseLeave={handleMouseLeave}
          >
            Our Company
            {dropdown === 'ourCompany' && (
              <div className="dropdown">
                <a href="about">About Us</a>
                <a href="Careers">Careers</a>
                <a href="Contact-us">Contact Us</a>
              </div>
            )}
          </li>
          <li>
            <a href="/news-events" target="_blank" rel="noopener noreferrer">
              News + Events
            </a>
          </li>
        </ul>
        <button className="contact-btn">Contact Us</button>
      </nav>
    </div>
  );
};

export default Navbar;