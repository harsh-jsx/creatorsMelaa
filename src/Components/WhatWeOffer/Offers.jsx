import React from "react";
import "./offers.css";

const Offers = () => {
  return (
    <div className="offers-container">
      <h2>Our Features</h2>
      <div className="features">
        <div className="feature">
          <div className="icon">⚡</div>
          <h3>AI-Powered Matching</h3>
          <p>
            Our advanced AI algorithm ensures perfect brand-influencer matches.
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
            Built-in messaging system for smooth brand-influencer collaboration.
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
  );
};

export default Offers;
