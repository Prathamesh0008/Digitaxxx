import React, { useEffect, useRef, useState } from "react";
import "./SeoAnalysisSection.css";
import { useNavigate } from "react-router-dom";

const SeoAnalysisSection = () => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }
  }, []);

  return (
    <div className="seo-section-container">
      <div className="seo-section">
        {/* Left Side Content */}
        <div className="seo-text">
          <h2>Get Free SEO Analysis Report Within 2 Days Only!</h2>
          <p>
            Because advertising and marketing is an art, the solution to each new
            problem challenge should begin with a blank canvas and an open mind,
            not with the nervous borrowings of other people’s mediocrities
            precisely modern.
          </p>
          <p>
            All business is basically about customers and marketing and making
            money and capitalism and winning and promoting it and having
            something someone.
          </p>
          <button className="services-btn" onClick={()=> navigate("/services")}>OUR SERVICES</button>
        </div>

        {/* Right Side Form */}
        <div
          className={`seo-form ${isVisible ? "slide-in" : ""}`}
          ref={formRef}
        >
          <form>
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone*" required />
            <input type="text" placeholder="Your Company Name*" required />
            <input type="url" placeholder="Website URL*" required />
            <button type="submit">Submit for Free Report</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeoAnalysisSection;
