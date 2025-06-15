import React, { useState } from "react";
import PortfolioBlock from "../../portfolio/PortfolioBlock";
import "../../portfolio/portfolio.css";

import portfolio1 from "../../../images/dg-img1.png";
import portfolio2 from "../../../images/dg-img2.png";
import portfolio3 from "../../../images/dg-img3.png";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";

const serviceData = [
  {
    title: "SEO Optimization",
    description: "Enhance your online visibility and increase organic traffic with our expert SEO strategies.",
    image: portfolio1,
    reverse: false,
  },
  {
    title: "Website Development",
    description: "Custom, responsive, and high-performance websites tailored to your business goals.",
    image: portfolio2,
    reverse: true,
  },
  {
    title: "Brand Strategy",
    description: "Craft a memorable brand identity that resonates with your audience across all platforms.",
    image: portfolio3,
    reverse: false,
  },
  {
    title: "Social Media Marketing",
    description: "Drive engagement and reach the right audience through powerful social campaigns.",
    image: portfolio2,
    reverse: true,
  },
  {
    title: "Digital Advertising",
    description: "Get results with data-driven ad campaigns that maximize ROI across Google, Meta, and more.",
    image: portfolio3,
    reverse: false,
  },
  {
    title: "Content Marketing",
    description: "Build authority and trust with high-quality content tailored to your target market.",
    image: portfolio1,
    reverse: true,
  }
];

const ITEMS_PER_PAGE = 3;

const ServiceShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(serviceData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = serviceData.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {/* <Breadcrumb title="Our Services" path="Services" /> */}
      <div className="portfolio-section">
        {visibleItems.map((item, index) => (
          <PortfolioBlock key={index} {...item} />
        ))}

        {/* <div style={{ textAlign: "center", marginTop: "40px" }}>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`pagination-button ${page === currentPage ? "active-page" : ""}`}
            >
              {page}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              className="pagination-button"
            >
              &gt;
            </button>
          )}
        </div> */}
      </div>
    </>
  );
};

export default ServiceShowcase;
