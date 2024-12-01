import React from "react";
import { useState, useRef, useEffect } from "react";
import "./nav.css";
import { gsap } from "gsap";
import logo from "../../assets/logo.png";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/exclusive", label: "Exclusive Talent" },
  { path: "/Contact", label: "Contact" },
  { path: "/influencer-contact", label: "Influencer Form" },
  { path: "/blogs", label: "Blogs" },
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
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-overlay", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 0.75,
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
          <a href="/">
            <img src={logo} alt="" className="logo-image" />
          </a>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo"></div>
          <div className="menu-close" onClick={toggleMenu}></div>
        </div>
        <div className="menu-close-icon"></div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((Link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a href={Link.path} className="menu-link">
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
