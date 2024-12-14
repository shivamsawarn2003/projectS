import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import { Routes, Route } from 'react-router-dom';  
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/heroSection/heroSection'
import Secondaryherosec from './Components/heroSection/Secondaryherosec'
import EVPage from './Components/EVPage/EVPage'
import Footer from './Components/footer/footer2'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer1 from './Components/footer/footer1'
import Businesses from './Pages/businesses.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/>
      <Herosection heading="Discover the Future of EV Charging Reliability" description={<> Download ChargerHelp's first Annual Reliability Report that collected <br /> used 19M data points. </>} btntext="Download Now"/>
      <Secondaryherosec heading="first heading h1 Say Goodbye to Downtime: Keep Your EV Charging Stations Up and Running" description="para description Experience Industry-Leading EV Charger Repair with ChargerHelp—The Only National EVSE-Dedicated Operations and Maintenance Provider Where Technology and Expertise Drive Every Solution." btntext1="Contact Us" btntext2="What We Do"/>
      <EVPage/>
      <Footer/>  */}
      {/* <ContactForm/>
      {/* <Footer1/> */}
      <Businesses/>
      <ContactForm/>
    </>
  )
}

export default App;
