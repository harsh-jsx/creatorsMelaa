import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source
            src="https://duruthemes.com/demo/html/acens/video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <Navbar />
      <div className="content">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">To my site.</p>
      </div>
    </div>
  );
};

export default Home;
