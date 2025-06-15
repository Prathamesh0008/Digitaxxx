import React from "react";
import "./SrvHero.css";
import BannerImg from "../../images/about-service.png"; // Replace with your image path
import { useModal } from "../ModalContext";

const SrvHEro = () => {
  const { openModal } = useModal(); // ✅ Correctly destructured

  return (
    <section className="heroo-container">
      <div className="hero-left">
        <h1>The best marketing doesn't feel like silly marketing!</h1>
        <p>
          Marketing is telling the world you're a rock star. Content Marketing is
          showing the world you are one.
        </p>
        <button className="contact-btn" onClick={openModal}>Contact Us</button>
      </div>
      <div className="hero-right">
        <img src={BannerImg} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default SrvHEro;
