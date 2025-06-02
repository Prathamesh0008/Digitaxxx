import React, { useState } from "react";
import PortfolioBlock from "../components/portfolio/PortfolioBlock";
import "../components/portfolio/portfolio.css";

import portfolio1 from "../images/dg-img1.png";
import portfolio2 from "../images/dg-img2.png";
import portfolio3 from "../images/dg-img3.png";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const portfolioData = [
  {
    title: "Search Engine Optimization",
    description:
      "We did advertising and marketing as an art, the solution to each new problem challenge should begin with a blank canvas...",
    image: portfolio1,
    reverse: false,
  },
  {
    title: "Website Redesign",
    description:
      "Revamping a legacy site with fresh UI/UX and better performance for better customer retention.",
    image: portfolio2,
    reverse: true,
  },
  {
    title: "Branding Project",
    description:
      "Built consistent brand identity and marketing materials for a fast-growing startup.",
    image: portfolio3,
    reverse: false,
  },
  {
    title: "Website Redesign",
    description:
      "Revamping a legacy site with fresh UI/UX and better performance for better customer retention.",
    image: portfolio2,
    reverse: true,
  },
  {
    title: "Branding Project",
    description:
      "Built consistent brand identity and marketing materials for a fast-growing startup.",
    image: portfolio3,
    reverse: false,
  },
  {
    title: "Website Redesign",
    description:
      "Revamping a legacy site with fresh UI/UX and better performance for better customer retention.",
    image: portfolio2,
    reverse: true,
  },
  {
    title: "Branding Project",
    description:
      "Built consistent brand identity and marketing materials for a fast-growing startup.",
    image: portfolio3,
    reverse: false,
  },
  {
    title: "Website Redesign",
    description:
      "Revamping a legacy site with fresh UI/UX and better performance for better customer retention.",
    image: portfolio2,
    reverse: true,
  },
  {
    title: "Branding Project",
    description:
      "Built consistent brand identity and marketing materials for a fast-growing startup.",
    image: portfolio3,
    reverse: false,
  },
];

const ITEMS_PER_PAGE = 6;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(portfolioData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = portfolioData.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <Breadcrumb title="Portfolio" path="Portfolio" />
      <div className="portfolio-section">
        {visibleItems.map((item, index) => (
          <PortfolioBlock key={index} {...item} />
        ))}

        {/* Pagination Numbers */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`pagination-button ${
                page === currentPage ? "active-page" : ""
              }`}
            >
              {page}
            </button>
          ))}

          {/* Arrow to next page */}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              className="pagination-button"
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
