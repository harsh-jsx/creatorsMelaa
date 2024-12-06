import React from "react";
import "./Specializations.css";

const Specializations = () => {
  return (
    <div className="specializations-container">
      <h2>Our Specializations</h2>
      <div className="specializations">
        <div className="specialization-card">
          <h3 className="specialization-title">Influencer Marketing</h3>
          <p>
            Leverage authentic connections through strategic influencer
            collaborations that resonate with your target audience.
          </p>
        </div>
        <div className="specialization-card">
          <h3 className="specialization-title">Growth Strategies</h3>
          <p>
            Develop scalable business strategies to ensure sustained growth and
            a competitive edge in your market.
          </p>
        </div>
        <div className="specialization-card">
          <h3 className="specialization-title">Talent Management</h3>
          <p>
            Optimize operations and enhance efficiency with our comprehensive
            talent management services tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specializations;
