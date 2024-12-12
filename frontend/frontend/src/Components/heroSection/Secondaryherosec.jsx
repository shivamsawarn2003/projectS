import React from "react";
import './heroSection.css';
import backgroundVideo from "../../assets/videos/Vidsrc.mp4"

function Secondaryherosec(){
    return(
    <div className="secondary-hero">
        <video className="backgroundVideo" autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
        </video>
      <div className="hero-overlay">
        <div className="hero-content textlayer">
          <h1>Say Goodbye to Downtime: <br /> Keep Your EV Charging 
         <br /> Stations Up and Running</h1>
          <p>
            Experience Industry-Leading EV Charger Repair with ChargerHelp— <br />The Only 
            National EVSE-Dedicated Operations and Maintenance <br />Provider Where Technology 
            and Expertise Drive Every Solution.
          </p>
          <div className="hero-buttons">
            <button className="cta-button">Contact Us</button>
            <button className="cta-button ">What We Do</button>
          </div>
        </div>
      </div>
    </div>

    )
}
export default Secondaryherosec;