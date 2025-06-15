import React from 'react';
import './Footer.css';
import logo1 from '../../images/logo-white.svg';
import { FiSend, } from 'react-icons/fi';
import { FaRegCopyright  } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <div className="digitax-footer">
        <div className="footer-divider"></div>

        <div className="footer-main">
          {/* Left Column - Logo and Description */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo1} alt="Digitalx Logo" className="lg1" />
            </div>
            <div className="footer-text">
              <p>Because advertising and marketing is an art, the each new problem or challenge should begin canvas and an open mind with the nervous.</p>
              <p>Borrowings of other people's mediocrities. The what: trends are - a search for something.</p>
            </div>
          </div>

          {/* Middle Column - Basic Links */}
          <div className="footer-column">
            <h3 className="footer-title">BASIC LINKS</h3>
            <div className="footer-table">
              <div className="table-row">
                <a href="#" className="table-cell link-item">Home</a>
              </div>
              <div className="table-row">
                <a href="#" className="table-cell link-item">About</a>
              </div>
              <div className="table-row">
                <a href="#" className="table-cell link-item">Services</a>
              </div>
              <div className="table-row">
                <a href="#" className="table-cell link-item">Portfolio</a>
              </div>
              <div className="table-row">
                <a href="#" className="table-cell link-item">Blog</a>
              </div>
              <div className="table-row">
                <a href="#" className="table-cell link-item">Contact</a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div className="footer-column">
            <h3 className="footer-title">CONTACT DETAILS</h3>
            <div className="footer-table">
              <div className="table-row">
                <div className="table-cell">Mobile:</div>
              </div>
              <div className="table-row">
                <a href="tel:+4484848585" className="table-cell link-item">+44 84 84 85 85</a>
              </div>
              <div className="table-row">
                <a href="tel:+9494848688" className="table-cell link-item">+94 94 84 86 88</a>
              </div>
              <div className="table-row">
                <div className="table-cell">Email:</div>
              </div>
              <div className="table-row">
                <a href="mailto:domain@support.com" className="table-cell link-item">domain@support.com</a>
              </div>
              <div className="table-row">
                <div className="table-cell">Address:</div>
              </div>
              <div className="table-row">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="table-cell link-item">10/2, Middle Street, New York</a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column">
            <h3 className="footer-title">NEWSLETTER</h3>
            <div className="newsletter-container">
              <div className="newsletter-text">
                A newsletter is a printed report containing news information of the activities of a business legal name; subscription business.
              </div>
              <div className="newsletter-form-container">
                {/* <label htmlFor="newsletter-email" className="newsletter-label">
                  Your Email Address
                </label> */}
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    id="newsletter-email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-submit">
                    <FiSend className="send-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-locations">
  <div className="location-item"><FaMapMarkerAlt className="location-icon" /> Mumbai</div>
  <div className="location-item"><FaMapMarkerAlt className="location-icon" /> Navi Mumbai</div>
  <div className="location-item"><FaMapMarkerAlt className="location-icon" /> Delhi</div>
  <div className="location-item"><FaMapMarkerAlt className="location-icon" /> Bangalore</div>
  <div className="location-item"><FaMapMarkerAlt className="location-icon" /> Hyderabad</div>
</div>


      {/* Copyright - now outside the main footer with different background */}
      <div className="copyright-container">
        <div className="copyright-divider"></div>
        <p><FaRegCopyright  className="copyright-icon"/> All Rights Reserved By OvalName</p>
      </div>
    </>
  );
};

export default Footer;