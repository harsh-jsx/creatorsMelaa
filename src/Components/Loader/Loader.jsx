import React, { useEffect } from "react";
import gsap from "gsap";
import "./Loader.css";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.from(".loader-text", {
      opacity: 0,
      duration: 1,
    })
      .to(".loader-progress", {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(".loader", {
        opacity: 0,
        duration: 0.5,
      });
  }, []);

  return (
    <div className="loader">
      <div className="loader-content">
        <h1 className="loader-text">CREATORSMELA</h1>
        <div className="loader-progress-container">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
