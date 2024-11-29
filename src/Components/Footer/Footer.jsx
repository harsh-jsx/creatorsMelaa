import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>
          Your Brand's <span className="highlight">Creative</span> Partner
        </h1>
        <div className="contact-info">
          <p>Reach us at</p>
          <a href="mailto:connect@creativefuel.io">connect@creativefuel.io</a>
          <address>
            105, Gravity Mall
            <br />
            Vijay Nagar Indore
            <br />
            Madhya Pradesh 452010
          </address>
          <p>Privacy Policy</p>
        </div>
        <nav className="footer-nav">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
          <a href="#" className="highlight">
            We're hiring
          </a>
        </nav>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
