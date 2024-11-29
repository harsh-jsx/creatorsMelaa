import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
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
  );
};

export default Home;
