import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import reactLogo from './assets/react.svg'
// import { Routes, Route } from 'react-router-dom';  
// import EVPage from './Components/EVPage/EVPage';
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserProvider from './UserContext.jsx';  

import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from "./Pages/Home.jsx"
import Footer from './Components/footer/footer2.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'
import Footer1 from './Components/footer/footer1.jsx'
import Businesses from './Pages/businesses.jsx';
import PaymentGateway from './Components/paymentgateway/paymentGateway.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('');

  const fetchAPI = async() =>{
    const response = await axios.get("http://localhost:8080/api");
    console.log("hello api response")
  };
  useEffect(() =>{
    fetchAPI();
  })
  return (
    <>
      <PaymentGateway/>
    </>
  )
}

export default App;

{/* <Navbar/>
      <Herosection heading="Discover the Future of EV Charging Reliability" description={<> Download ChargerHelp's first Annual Reliability Report that collected <br /> used 19M data points. </>} btntext="Download Now"/>
      <Secondaryherosec heading="first heading h1 Say Goodbye to Downtime: Keep Your EV Charging Stations Up and Running" description="para description Experience Industry-Leading EV Charger Repair with ChargerHelp—The Only National EVSE-Dedicated Operations and Maintenance Provider Where Technology and Expertise Drive Every Solution." btntext1="Contact Us" btntext2="What We Do"/>
      <EVPage/>
      <Footer/>  
      <Footer1/>
      <ContactForm/>
      <Businesses/>
      <ContactForm/> */}

      //routes
      // ReactDOM.createRoot(root).render(
      //   <BrowserRouter>
      //     <Routes>
      //       <Route path="/" element={<Home />} />
      //       <Route path="businesses" element={<Businesses />}>
      //         {/* <Route index element={<RecentActivity />} />
      //         <Route path="project/:id" element={<Project />} /> */}
      //       </Route>
      //     </Routes>
      //   </BrowserRouter>
      // );
     
