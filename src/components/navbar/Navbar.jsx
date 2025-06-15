import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../images/ABEC-LOGO.jpg";
import { useModal } from "../ModalContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolios", path: "/portfolio" },
  { name: "About US", path: "/about-us" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const dropdownItems = [
  { name: "Brand Promotion", path: "/brand-promo" },
  { name: "Website Analysis", path: "/services/website-analysis" },
  { name: "Video Marketing", path: "/services/video-marketing" },
  { name: "Service Smm", path: "/services/service-smm" },
  { name: "Service Seo", path: "service-Seo" },
  { name: "Service Digital", path: "/service/service-digital" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const {openModal}= useModal();

  const toggleDropdown = (item) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.name}
              className="nav-item"
              onMouseEnter={() => item.name === "Services" && setDropdownOpen("Services")}
              onMouseLeave={() => item.name === "Services" && setDropdownOpen(null)}
            >
              <Link
                to={item.path}
                className="nav-link"
                onClick={() => {
                  setMenuOpen(false);
                  if (item.name === "Services") toggleDropdown("Services");
                }}
              >
                {item.name}
                {item.name === "Services" && (
                  <ChevronDown size={16} className="dropdown-icon" />
                )}
              </Link>

              {item.name === "Services" && (
                <ul className={`dropdown-menu ${dropdownOpen === "Services" ? "show" : ""}`}>
                  {dropdownItems.map((option, index) => (
                    <li key={index} className="dropdown-item">
                      <Link to={option.path} onClick={() => setMenuOpen(false)}>
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className="nav-button">
  <button className="btn-primary" onClick={openModal}>Get Started</button>
</div>  

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
