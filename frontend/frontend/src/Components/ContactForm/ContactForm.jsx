import React from "react";
import "./ContactForm.css";
import Footer from "../footer/footer2";

const ContactForm = () => {
  return (
    <>
    <div className="form-container">
      <div className="form-header">
        <div className="footerlogo">CH!</div>
        <h2>Talk to a member of our team!</h2>
        <p>
          We can give you a demo, help you choose the right plan for your business, or share best practices in the EV charging space.
        </p>
      </div>
      <form className="form">
        <div className="form-row">
          {/* <label for="fname">First name</label><br/>  */}
          <input type="text" placeholder="First Name" id="fname" className="form-input" />
          {/* <label for="lname">Last Name</label><br/>  */}
          <input type="text" id="lname" placeholder="Last Name" className="form-input" />
        </div>
        <div className="form-row">
          {/* <label for="phoneno.">Phone number</label><br/>  */}
          <input type="tel" id="phoneno." placeholder="Phone number" className="form-input" />
          {/* <label for="email">Email</label><br/> */}
          <input type="email" id="email" placeholder="Email*" className="form-input" required />
        </div>
        {/* <label for="jobtitle">Job title</label><br/> */}
        <div className="form-row">
          
          <input type="text"id="jobtitle" placeholder="Job title" className="form-input" />
          {/* <label for="company">Company</label><br/>  */}
          <input type="text" id="company" placeholder="Company name" className="form-input" />
        </div>
        <div className="form-row">
          {/* <label htmlFor="location"></label><br />   */}
          <input type="text" id="location" placeholder="Where are you located?" className="form-input" />
          {/* <label for="budget">How can we help you</label><br/> */}
          <textarea placeholder="How can we help you?" className="form-input" rows="3"></textarea>
        </div>
        <div className="form-checkbox">
          {/* <label>
            <input type="checkbox" /> Would you like to sign up for our email newsletter?
          </label> */}
        </div>
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
    
  );
  
};

export default ContactForm;


//only logo is not responsive yet as for each device width will vary but not height