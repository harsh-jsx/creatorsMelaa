import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            Creators<span>Mela</span>
          </h1>
          <p>Empowering Creators, Elevating Brands</p>
          <p>Connect To Our Socials</p>
          <div className="socials">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Our links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Exclusive Talent</a>
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Other links</h2>
          <ul>
            <li>
              <a href="#">Join as Influencer</a>
            </li>
            <li>
              <a href="#">YouTube Thumbnail Downloader</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <i className="fas fa-phone"></i> +91 83021 25887
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i> team@creatorsmela.com
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i> Rajasthan, India (IN)
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 CreatorsMela. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
