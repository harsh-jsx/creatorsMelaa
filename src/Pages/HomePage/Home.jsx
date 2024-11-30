import React from "react";
import "./Home.css";
import Creators from "../../Components/Creators/Creators";
import Clients from "../../Components/OurClients/Clients";
import Offers from "../../Components/WhatWeOffer/Offers";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div className="home">
        <video autoPlay loop muted playsInline>
          <source
            src="https://www.famebliss.com/assets/slider.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-section">
          <h1 className="main-title">
            <span className="highlight">CreatorsMela</span>
          </h1>
          <h2 className="subtitle">Your Gateway to Influencer Success</h2>
          <p className="description">Connect with Creators</p>
          <button className="cta-button">Get Started →</button>
        </div>
      </div>
      <Creators />
      <Clients />
      <Offers />
      <Testimonials />
    </>
  );
};

export default Home;
