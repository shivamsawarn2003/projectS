import React from 'react';
import './heroSection.css';

function Herosection() {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Discover the Future of EV Charging Reliability</h1>
                    <p>Download ChargerHelp!'s first Annual Reliability Report that collected 19M data points.</p>
                </div>  
                <div>
                    <button className="cta-button">Download Now</button>
                </div>  
            </div>
        </>
    );
}


export default Herosection;