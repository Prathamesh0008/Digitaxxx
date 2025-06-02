import React from "react";
import "./portfolio.css";

const PortfolioBlock = ({ title, description, image, reverse }) => {
  return (
    <div className={`portfolio-block ${reverse ? "reverse" : ""}`}>
      <div className="portfolio-image">
        <img src={image} alt={title} />
      </div>
      <div className="portfolio-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioBlock;
