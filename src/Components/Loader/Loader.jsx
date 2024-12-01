import React, { useEffect } from "react";
import gsap from "gsap";
import "./Loader.css";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.to(".loader-text", {
      opacity: 1,
      duration: 1,
    })
      .to(".loader-progress", {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".loader", {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div className="loader">
      <div className="loader-content">
        <h2 className="loader-text">CREATORSMELA</h2>
        <div className="loader-progress-container">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
