import React, { useState } from "react";
import PortfolioBlock from "../components/portfolio/PortfolioBlock";
import "../components/portfolio/portfolio.css";
import "../components/portfolio/PortfolioModal.css";

import portfolio1 from "../images/dg-img1.png";
import portfolio2 from "../images/dg-img2.png";
import portfolio3 from "../images/dg-img3.png";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const portfolioData = [
  {
    title: "Search Engine Optimization",
    description: "We did advertising and marketing as an art...",
    fullDescription: "A deep SEO case study that includes on-page, off-page, and technical SEO fixes to rank #1 on Google.",
    client: "ABC Corp",
    image: portfolio1,
    images: [portfolio1, portfolio2, portfolio3],
    reverse: false,
  },
  {
    title: "Website Redesign",
    description: "Revamped UI/UX for better conversion.",
    fullDescription: "Created a responsive and mobile-friendly design, optimized performance, and implemented A/B testing.",
    client: "XYZ Pvt Ltd",
    image: portfolio2,
    images: [portfolio2, portfolio1],
    reverse: true,
  },
  {
    title: "Branding Project",
    description: "Built consistent brand identity and marketing materials.",
    fullDescription: "Designed logos, brand guidelines, and marketing assets for a tech startup scaling rapidly.",
    client: "Startup Inc.",
    image: portfolio3,
    images: [portfolio3, portfolio1],
    reverse: false,
  },
  {
    title: "Social Media Campaign",
    description: "Boosted engagement by 300% across Instagram and Facebook.",
    fullDescription: "Executed a viral content strategy with influencer collaboration.",
    client: "Fashion Fiesta",
    image: portfolio1,
    images: [portfolio1, portfolio3],
    reverse: true,
  },
  {
    title: "E-Commerce Optimization",
    description: "Improved conversions through better UX and SEO.",
    fullDescription: "Integrated product recommendations and streamlined checkout.",
    client: "TechKart",
    image: portfolio2,
    images: [portfolio2],
    reverse: false,
  },
  {
    title: "Corporate Presentation Design",
    description: "Created stunning investor pitch decks.",
    fullDescription: "Used modern design language and storytelling to impress VCs.",
    client: "Alpha Corp",
    image: portfolio3,
    images: [portfolio3],
    reverse: true,
  },
  {
    title: "Mobile App Design",
    description: "Crafted sleek UI for a finance tracking app.",
    fullDescription: "Designed over 20 screens with intuitive UX flows.",
    client: "Finance Buddy",
    image: portfolio1,
    images: [portfolio1, portfolio2],
    reverse: false,
  },
  {
    title: "Email Marketing",
    description: "Boosted open rates to 40%+",
    fullDescription: "A/B tested subject lines, segmented lists, and automated sequences.",
    client: "Growth Co.",
    image: portfolio2,
    images: [portfolio2, portfolio1],
    reverse: true,
  },
];

const ITEMS_PER_PAGE = 6;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const totalPages = Math.ceil(portfolioData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = portfolioData.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <Breadcrumb title="Portfolio" path="Portfolio" />
      <div className="portfolio-section">
        {visibleItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)} style={{ cursor: "pointer" }}>
            <PortfolioBlock {...item} />
          </div>
        ))}

        {/* Pagination */}
        {/* Pagination */}
{totalPages > 1 && (
  <div style={{ textAlign: "center", marginTop: "40px" }}>
    {/* Previous arrow */}
    {currentPage > 1 && (
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        className="pagination-button"
      >
        &lt;
      </button>
    )}

    {/* Page numbers */}
    {pageNumbers.map((page) => (
      <button
        key={page}
        onClick={() => handlePageClick(page)}
        className={`pagination-button ${page === currentPage ? "active-page" : ""}`}
      >
        {page}
      </button>
    ))}

    {/* Next arrow */}
    {currentPage < totalPages && (
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        className="pagination-button"
      >
        &gt;
      </button>
    )}
  </div>
)}

        
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.title}</h2>
            <p><strong>Client:</strong> {selectedItem.client}</p>

            <div className="modal-image-gallery">
              {selectedItem.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedItem.title} ${idx + 1}`}
                  className="modal-image"
                />
              ))}
            </div>

            <p className="modal-description">
              {selectedItem.fullDescription || selectedItem.description}
            </p>

            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
