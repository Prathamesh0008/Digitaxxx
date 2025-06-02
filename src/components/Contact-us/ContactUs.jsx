// ContactUs.js
import React from "react";
import "./ContactUs.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ContactUs = () => {
  return (
    <div>
        <Breadcrumb title="ContactUs" path="ContactUs" />
    <div className="contact-us-container">
     
      <div className="message-section">
        <h2>Send Us A Message Now</h2>
        <p className="message-description">
          There's design, and there's art. Good design is total harmony. There's no designer like nature – just look at a branch or a leaf.
        </p>
      </div>

      <hr className="divider" />

      {/* Contact Form */}
      <div className="contact-form-section">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name*</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Your E-Mail*</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Subject*</label>
              <input type="text" placeholder="Enter your subject" />
            </div>
            <div className="form-group">
              <label>Telephone*</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Your Message*</label>
              <textarea rows="5" placeholder="Enter your message"></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      {/* Contact Info Boxes */}
<div className="contact-info-boxes">
  <div className="info-box">
    <i className="fas fa-phone-alt"></i>
    <a href="tel:+880176000000">+8801760-00000</a>
  </div>
  <div className="info-box">
    <i className="fas fa-envelope"></i>
    <a href="mailto:contact@address.com">contact@address.com</a>
  </div>
  <div className="info-box">
    <i className="fas fa-map-marker-alt"></i>
    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
      New Street, Babinham, NY
    </a>
  </div>
</div>

<div className="map-container" >
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7074960125717!2d-74.0060150845937!3d40.71277577933002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d21c451%3A0x1a68d6760c4db07f!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>


    </div>
    </div>
  );
};

export default ContactUs;
