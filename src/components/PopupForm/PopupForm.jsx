import React from "react";
import "./PopupForm.css";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
