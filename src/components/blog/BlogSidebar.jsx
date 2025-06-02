// BlogSidebar.js
import React from "react";
import { FiSearch, FiSend } from "react-icons/fi";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="search-box">
        <input type="text" placeholder="Type here to search" />
        <button className="search-btn">
          <FiSearch />
        </button>
      </div>

      <div className="sidebar-section newsletter">
        <h3 className="sidebar-title">Subscribe For Newsletter</h3>
        <div className="newsletter-input-group">
          <input type="email" placeholder="Your Email Address" />
          <button className="newsletter-btn">
            <FiSend />
          </button>
        </div>
      </div>

      <div className="sidebar-section categories">
        <h3 className="sidebar-title">Categories</h3>
        <ul>
          <li>Digital Marketing</li>
          <li>Marketing Policies</li>
          <li>SEO Analysis</li>
          <li>Social Media Marketing</li>
        </ul>
      </div>

      {/* Added Tags Section */}
      <div className="sidebar-section tags">
        <h3 className="sidebar-title">Tags</h3>
        <div className="tag-list">
          <span className="tag">Design</span>
          <span className="tag">Digital</span>
          <span className="tag">Marketing</span>
          <span className="tag">SEO</span>
          <span className="tag">SMM</span>
        </div>
      </div>

      {/* <div className="windows-activation">
        <p>Activate Windows</p>
        <small>Go to Settings to activate Window</small>
      </div> */}
    </div>
  );
};

export default BlogSidebar;