import React, { useRef, useEffect } from "react";
import "./offers.css";

const Offers = () => {
  const offersRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          overlayRef.current.style.opacity = 1;
        } else {
          overlayRef.current.style.opacity = 0;
        }
      },
      { threshold: 0.5 }
    );

    if (offersRef.current) {
      observer.observe(offersRef.current);
    }

    return () => {
      if (offersRef.current) {
        observer.unobserve(offersRef.current);
      }
    };
  }, []);

  return (
    <>
      <div id="overlay" ref={overlayRef} className="overlay"></div>
      <div className="offers-container" ref={offersRef}>
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">⚡</div>
            <h3>AI-Powered Matching</h3>
            <p>
              Our advanced AI algorithm ensures perfect brand-influencer
              matches.
            </p>
          </div>
          <div className="feature">
            <div className="icon">📊</div>
            <h3>Real-Time Analytics</h3>
            <p>
              Track your campaign performance with our real-time analytics
              dashboard.
            </p>
          </div>
          <div className="feature">
            <div className="icon">💬</div>
            <h3>Seamless Communication</h3>
            <p>
              Built-in messaging system for smooth brand-influencer
              collaboration.
            </p>
          </div>
          <div className="feature">
            <div className="icon">💳</div>
            <h3>Automated Payments</h3>
            <p>Hassle-free, secure payment processing for influencers.</p>
          </div>
          <div className="feature">
            <div className="icon">✔️</div>
            <h3>Content Approval Workflow</h3>
            <p>Streamlined content review and approval process.</p>
          </div>
          <div className="feature">
            <div className="icon">🔍</div>
            <h3>Fraud Detection</h3>
            <p>Advanced systems to detect and prevent fraudulent activities.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
