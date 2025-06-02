// BlogPost.js
import React from "react";

const BlogPost = ({ image, title, category, date, excerpt, readMoreLink }) => {
  return (
    <div className="blog-post">
      <div className="post-image-container">
        <img src={image} alt={title} className="post-image" />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <span className="meta-author">Posted By: OvaTheme</span> | 
          <span className="meta-category">Categories: {category}</span> | 
          <span className="meta-date">Posted: {date}</span>
        </div>
        <h2 className="post-title">{title}</h2>
        <p className="post-excerpt">{excerpt}</p>
        <a href={readMoreLink} className="read-more-btn">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;