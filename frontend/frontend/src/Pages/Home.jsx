import React from "react";
import HeroSection from "../Components/heroSection/heroSection.jsx";
import Secondaryherosec from "../Components/heroSection/Secondaryherosec.jsx";
import EVPage from "../Components/EVPage/EVPage.jsx"

function Home(){
    return(
        <>
           <HeroSection heading="Discover the Future of EV Charging Reliability" description={<>Download ChargerHelp's first Annual Reliability Report that collected <br /> used 19M data points. </>} btntext="Download Now"/>
           <Secondaryherosec heading="first heading h1 Say Goodbye to Downtime: Keep Your EV Charging Stations Up and Running" description="para description Experience Industry-Leading EV Charger Repair with ChargerHelp—The Only National EVSE-Dedicated Operations and Maintenance Provider Where Technology and Expertise Drive Every Solution." btntext1="Contact Us" btntext2="What We Do"/>
           <EVPage/>
        </>
    )
}
export default Home;