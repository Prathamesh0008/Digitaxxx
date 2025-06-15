// HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import BannerImg from "../../images/banner-2.jpg";
import { useModal } from "../ModalContext"; // ✅ Import modal context

const HeroSection = () => {
  const { openModal } = useModal(); // ✅ Use openModal

  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>The best marketing doesn't feel like silly marketing!</h1>
        <p>
          Marketing is telling the world you're a rock star. Content Marketing is
          showing the world you are one.
        </p>
        <button className="contact-btn" onClick={openModal}>
          Contact Us
        </button>
      </div>
      <div className="hero-right">
        <img src={BannerImg} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
