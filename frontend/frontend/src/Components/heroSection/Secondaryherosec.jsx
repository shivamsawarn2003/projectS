import React from "react";
import './heroSection.css';
import backgroundVideo from "../../assets/videos/Vidsrc.mp4"

function Secondaryherosec({heading,description,btntext1,btntext2}){
    return(
    <div className="secondary-hero">
        <video className="backgroundVideo" autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
        </video>
      <div className="hero-overlay">
        <div className="hero-content textlayer">
          <h1>{heading}</h1>
          <p>{description}</p>
          <div className="hero-buttons">
            <button className="cta-button">{btntext1}</button>
            <button className="cta-button ">{btntext2}</button>
          </div>
        </div>
      </div>
    </div>

    )
}
export default Secondaryherosec;

        
         // first heading h1 Say Goodbye to Downtime: <br /> Keep Your EV Charging  br Stations Up and Running
         // para description Experience Industry-Leading EV Charger Repair with ChargerHelp— <br />The Only National EVSE-Dedicated Operations and Maintenance br Provider Where Technology and Expertise Drive Every Solution.
           //btn text 1 Contact Us
           // btn text 2 What We Do
            