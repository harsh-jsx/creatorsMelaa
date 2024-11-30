import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Creators from "../../Components/Creators/Creators";
import Clients from "../../Components/OurClients/Clients";
import Offers from "../../Components/WhatWeOffer/Offers";
import Testimonials from "../../Components/Testimonials/Testimonials";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const texts = [
    "Empowering Creators, Elevating Brands",
    "Your Gateway to Influencer Success",
    "Connect with Creators",
  ];

  const textRef = useRef(null);

  useEffect(() => {
    let currentTextIndex = 0;
    const typeText = () => {
      const text = texts[currentTextIndex];
      gsap.to(textRef.current, {
        duration: 0.05 * text.length,
        text: text,
        ease: "none",
        onComplete: () => {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(typeText, 2000); // Wait 2 seconds before typing the next text
        },
      });
    };

    typeText();
  }, []);

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
          <p className="description" ref={textRef}></p>
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
