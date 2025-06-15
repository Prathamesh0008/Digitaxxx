import React, { use, useEffect, useState } from "react";
import "./ScrollSection.css"; // Importing the CSS file
import image1 from "../../images/banner-1.jpg"
import { useModal } from "../ModalContext";

const ScrollSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {openModal}= useModal();

  // Function to detect when the section is in the viewport
  const handleScroll = () => {
    const image = document.getElementById("scroll-image");
    const rect = image.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-section-container">
      <section id="scroll-section" className="scroll-section">
      <div
          id="scroll-image"
          className={`image-container ${isVisible ? "visible" : ""}`}
        >
          <img src={image1} alt="Project Image" />
        </div>
        <div className="text-container">
          <h2>It’s Very Important To Know Each Other Well.</h2>
          <p>
            Because advertising and marketing is an art, the solution to each
            new problem challenge should begin with a blank canvas and an open
            mind, not with the nervous borrowings of other people’s mediocrities
            precisely modern.
          </p>
          <p>
            All business is basically about customers and marketing and making
            money and capitalism and winning and promoting it and having
            something someone.
          </p>
          <button className="learn-more-btn" onClick={openModal}>Learn more</button>
        </div>
       
      </section>
    </div>
  );
};

export default ScrollSection;
