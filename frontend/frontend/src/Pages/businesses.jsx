import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Secondaryherosec from "../Components/heroSection/Secondaryherosec";
import Footer from "../Components/footer/footer2";

function businesses(){
    return(
        <>
           <Navbar/> 
           <Secondaryherosec 
  heading={
    <>
      Smart solutions for <br /> businesses of all sizes.
    </>
  }
  description={
    <>
      If you haven’t yet added smart EV charging stations at your <br /> business, you could be missing out on an opportunity to provide a <br /> valued service for your team, customers, and visitors. <br />
      ChargerHelp! is here to take the risk out of your new venture.
    </>
  }
  btntext1="Speak to a Specialist"
  btntext2="Contact Us"
/>
           <Footer/>

        </>
    )
}
export default businesses;