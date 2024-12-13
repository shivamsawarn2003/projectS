import React from "react";
import "./EVPage.css"; 
import EVPageimage from '../../assets/img/EVPage-image.png';
import evconnect from '../../assets/img/evconnect.png';
import dunamis from '../../assets/img/dunamis.png';
import rivian from '../../assets/img/rivian.png';
import siemens from '../../assets/img/siemens.png';
import RaaSCard from '../../assets/img/RaaSCard.png';
import workforceCard from '../../assets/img/workforceCard.png';
import rivianCharge from '../../assets/img/rivianCharge.png';
import chargerHelp from '../../assets/img/chargerHelp.png';
import blogImg1 from '../../assets/img/blogImg1.png';
import blogImg2 from '../../assets/img/blogImg2.png';
import blogImg3 from '../../assets/img/blogImg3.png';
function EVPage() {
  var blogPosts = [
    {
      title: "The Toll of Time: How Aging EV Infrastructure...",
      description:
        "As electric vehicle (EV) adoption accelerates, the reliability of charging...",
      image:blogImg1,
    },
    {
      title: "The Scary Truth About EV Charger Reliability (And How...)",
      description:
        "Imagine pulling up to a charger that appears functional, only to find it...",
      image:blogImg2,
    },
    {
      title: "When Software Fails: The Hidden Costs of Inaccurate Station...",
      description:
        "In the rapidly evolving landscape of electric vehicles, providing Reliability as a...",
      image: blogImg3,
    },
  ];

  return (
    <div className="ev-page-container">

      <div className="content-container">
        <div className="left-section">
          <h1>
            97% uptime? <br /> No problem.
          </h1>
          <p><b>Because a charger should <br />work every time.</b></p>
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
      <div className="image-container">
          <img src={EVPageimage} alt="EV-Charging" />
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.75 50"><path fill="#402150" fill-opacity="1" d="M0,32L80,37.3C160,43,320,53,480,74.7C640,96,800,128,960,165.3C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        <div className="clients">
          <hr />
          <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2>
            <span className="orange-line"></span> Our fully <br /> charged clients
          </h2>
          <p>Leading companies trust ChargerHelp!</p>
        </div>
        <div className="clients-logos">
          <img src={evconnect} alt="EV Connect" />
          <img src={dunamis} alt="Dunamis" />
          <img src={rivian} alt="Rivian" />
          <img src={siemens} alt="Siemens" />
        </div>      
      </div>
      
      
    </section>
    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1176 320"><path fill="#402150" fill-opacity="1" d="M0,0L1440,96L1440,0L0,0Z"></path></svg></div>
    <section className="what-we-do">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">
          We ensure charging stations stay operational, keeping EVs powered and
          on the move. Reliable access to charging is crucial, whether for
          personal vehicles or entire fleets, and we make sure drivers can
          charge anytime, anywhere without interruptions.
        </p>
        <div className="card-container">
          <div className="card">
            <img
              src={RaaSCard}
              alt="Reliability as a Service"
              className="card-image"
            />
            <div className="card-content">
              <h3>Reliability as a Service (RaaS)</h3>
              <p>Simple, easy, and all-inclusive EVSE O&M.</p>
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src={workforceCard}
              alt="Workforce Learning & Development"
              className="card-image"
            />
            <div className="card-content">
              <h3>Workforce Learning & Development</h3>
              <p>Building the EV charging workforce the nation needs.</p>
              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="nevi-act-section">
    <div className="nevi-image">
        <img
          src={rivianCharge}
          alt="EV charging process"
        />
      </div>
      <div className="nevi-content">
        <h2>NEVI + Inflation Reduction Act</h2>
        <p>
          There are specific reliability requirements and benchmarks EV Service
          Providers need to meet in order to qualify for National Electric
          Vehicle Infrastructure (NEVI) and Inflation Reduction Act (IRA)
          grants. Are you ready to meet them?
        </p>
        <button className="cta-button">Get reliable support today</button>
      </div>
    </section>
    <section className="about-section">
      <div className="about-content">
        <h4 className="about-subtitle">ABOUT CHARGERHELP</h4>
        <h2 className="about-title">Changing the EV space</h2>
        <p className="about-description">
          We're leading the way for mass EV infrastructure adoption by providing
          technology solutions for EV charging maintenance and workforce
          enablement.
        </p>
        <button className="about-button">About us</button>
      </div>
      <div className="about-image">
        <img
          src={chargerHelp}
          alt="Team at ChargerHelp"
        />
      </div>
    </section>
    <section className="blog-section">
      <div className="blog-header">
        <h2>On The Blog</h2>
        <a href="/all-posts" className="blog-link">
          ALL POSTS →
        </a>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-details">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    </div>
    
  );
}

export default EVPage;