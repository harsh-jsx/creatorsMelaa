import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Creators from "../../Components/Creators/Creators";
import Clients from "../../Components/OurClients/Clients";
import Offers from "../../Components/WhatWeOffer/Offers";
import Testimonials from "../../Components/Testimonials/Testimonials";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

const Home = () => {
  const texts = [
    "Empowering Creators, Elevating Brands",
    "Your Gateway to Influencer Success",
    "Connect with Creators",
  ];

  const textRef = useRef(null);
  const container = useRef();

  function textToSpan(className) {
    const texts = document.querySelectorAll(className);

    texts.forEach((text) => {
      text.innerHTML = text.innerText
        .split("")
        .map((letter) => `<span id='space'>${letter}</span>`)
        .join("");
    });
  }

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
    textToSpan(".subtitle .word");
    gsap.from(".subtitle .word span", {
      rotateX: "90deg",
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 3,

      stagger: {
        each: 0.02, // time between each animation
        from: "center", // starts staggering from the center
      },
      ease: "power4.inOut",
    });
  }, []);

  useGSAP(
    () => {
      gsap.from(".highlight span", {
        rotateX: "90deg",
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 3,

        stagger: {
          each: 0.05, // time between each animation
          from: "center", // starts staggering from the center
        },
        ease: "power4.inOut",
      });
      gsap.from("video", {
        duration: 1.5,
        delay: 8,
        ease: "power4.inOut",
      });
      gsap.from("#home-cta-button", {
        width: 0,
        duration: 2,
        delay: 3,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.to("#home-cta-button", {
            duration: 2,
            height: "50px",
            ease: "power4.inOut",
          });
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="home" ref={container}>
        <video loop autoPlay muted>
          <source
            src="https://www.famebliss.com/assets/slider.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-section">
          <h1 className="main-title">
            <span className="highlight">
              <span>C</span>
              <span>r</span>
              <span>e</span>
              <span>a</span>
              <span>t</span>
              <span>o</span>
              <span>r</span>
              <span>s</span>
              <span>M</span>
              <span>e</span>
              <span>l</span>
              <span>a</span>
            </span>
          </h1>
          <h2 className="subtitle">
            <span className="word">Your</span>
            <span className="word">Gateway</span>
            <span className="word">to</span>
            <span className="word">Influencer</span>
            <span className="word">Success</span>
          </h2>
          <p className="description" ref={textRef}></p>
          <button id="home-cta-button">
            <h5>Get Started →</h5>
          </button>
        </div>
      </div>
      <Creators />
      <Offers />
      <Testimonials />
      <Clients />
    </>
  );
};

export default Home;
