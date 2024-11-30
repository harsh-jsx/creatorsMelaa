import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <>
      <div className="contact-form-container">
        <form className="contact-form">
          <h2>Contact Us</h2>
          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input type="tel" required />
            <label>Number</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea required></textarea>
            <label>Message</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
