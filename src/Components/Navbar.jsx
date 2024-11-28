import React from "react";
import { useState, useRef, useEffect } from "react";
import "./nav.css";
import Logo from "../assets/logo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/Contact", label: "Contact" },
  { path: "/Talent", label: "Talent" },
];

const Navbar = () => {
  const container = useRef();
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (IsMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [IsMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <img src="../assets/logo.png" alt="" />
          <h1>CreatorsMela</h1>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <h1>CreatorsMela</h1>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            &#x2715;
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((Link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a to={Link.path} className="menu-link">
                    {" "}
                    {Link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">instagram &#8599;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
