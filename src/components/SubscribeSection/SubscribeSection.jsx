import React from "react";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <section className="subscribe-container">
      
      <form className="subscribe-form">
      <h2 className="subscribe-title">Contact Us Get <br /> Latest News</h2>
        <input
          type="text"
          placeholder="Your Website URL*"
          className="subscribe-input"
        />
        <input
          type="email"
          placeholder="Your Email Address"
          className="subscribe-input"
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
