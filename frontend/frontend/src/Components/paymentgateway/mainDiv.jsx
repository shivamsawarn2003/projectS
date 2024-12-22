import React, { useState } from "react";
import "./paymentGateway.css"; // Import custom CSS

const steps = [
  "Select Locations",
  "Select Service",
  "Review Subscription",
  "Checkout",
];

const mainDiv = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
        <div className="stepper-container">
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div
            className={`step-circle ${
              index <= currentStep ? "active" : ""
            }`}
          >
            {index + 1}
          </div>
          <p className={`step-label ${index <= currentStep ? "active" : ""}`}>
            {step}
          </p>
          {index < steps.length - 1 && (
            <div
              className={`step-line ${
                index < currentStep ? "active" : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
    <div className="ChargingStation-container">
        <div className="ChargingStation-txt">
            <p>Charging Stations</p>
            <p>Please provide information on your charging stations</p>
        </div>
        <div className="Dropdown-filter">
            <p>Location#1</p>
            <label htmlFor="Location-Address"></label>
        </div>
    </div>
    </>
  );
};

export default mainDiv;