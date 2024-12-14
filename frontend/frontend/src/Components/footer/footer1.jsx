import React from "react";
import footer1img from '../../assets/img/footer1-img.png';
import './footer1.css';
import ContactForm from "../ContactForm/ContactForm";

function footer1({title,descriptions}) {
    return(
        <>
            <div className="footer1-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#402150" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,165.3C640,149,800,171,960,154.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <div className="content">
                    <h1>{title}</h1>
                    <p>{descriptions}</p>
                </div>
                <img src={footer1img} alt="picture" />
            </div>
            <button className="footer1-btn">Contact Us</button>
        </>
    )
}
export default footer1;