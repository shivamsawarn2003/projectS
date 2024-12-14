import React from 'react';
import './heroSection.css';

function Herosection({heading,description,btntext}) {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <h1>{heading}</h1>
                    <p>{description}</p>
                </div>  
                <div>
                    <button className="cta-button">{btntext}</button>
                </div>  
            </div>
        </>
    );
}


export default Herosection;

//h1 Discover the Future of EV Charging Reliability
//para Download ChargerHelp!'s first Annual Reliability Report that collected 19M data points.
// btn text Download Now