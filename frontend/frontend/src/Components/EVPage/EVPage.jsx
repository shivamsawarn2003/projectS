import React from "react";
import "./EVPage.css"; 

function EVPage() {
  return (
    <div className="ev-page-container">

      <div className="content-container">
        <div className="left-section">
          <h1>
            97% uptime? <br /> No problem.
          </h1>
          <p>Because a charger should work every time.</p>
        </div>
        <div className="right-section">
          <p>
            ChargerHelp is tackling the biggest hurdle to rapid EV adoption—the charging experience.
          </p>
          <p>
            We ensure charging stations stay operational, keeping EVs powered and on the move. Reliable access to
            charging is crucial, whether for personal vehicles or entire fleets, and we make sure drivers can charge
            anytime, anywhere without interruptions.
          </p>
          <button className="instant-quote-btn">Instant Quote</button>
        </div>
      </div>

      

      
    </div>
  );
}

export default EVPage;