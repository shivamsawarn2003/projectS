import React from "react";
import "./footer2.css";
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faTwitter , faYoutube,faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="header">
        <div className="footer-heading">
            <h1>ChargerHelp</h1>
        </div>
        <div className="logo">
            <img src={logo} alt="logo charger help" />
        </div>
      </div>
      <div className="footer-sections">
        <div>
          <a href="#">Reliability as a Service</a>
          <a href="#">Learning & Development</a>
        </div>
        <div>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <p>ChargerHelp!</p>
          <p>Los Angeles, CA</p>
          <a href="sales@chargerhelp.com">sales@chargerhelp.com</a>
          <a href="media@chargerhelp.com">media@chargerhelp.com</a>
        </div>
      </div>
      <div className="legal-icons">
        <div className="footer-legal">
            <p>©️ ChargerHelp! 2025 | Legal</p>
        </div>
        <div className="footer-links">
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// tablet upto 768 px it is responsive further to do