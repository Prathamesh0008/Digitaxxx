import React from "react";
import "./HeroSection.css";
import BannerImg from "../../images/home1_banner.png"; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="hero-container">
      
      <div className="hero-left">
        <h1>The best marketing doesn't feel like silly marketing!</h1>
        <p>
          Marketing is telling the world you're a rock star. Content Marketing is
          showing the world you are one.
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>
      <div className="hero-right">
        <img src={BannerImg} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
