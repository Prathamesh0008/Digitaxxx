// Blog.js
import React, { useState } from "react";
import BlogPost from "../components/blog/BlogPost";
import BlogSidebar from "../components/blog/BlogSidebar";
import "../components/blog/blog.css";

import blog1 from "../images/img2.jpg";
import blog2 from "../images/img4 (1).jpg";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const blogData = [
  // Your existing blog data array remains exactly the same
  {
    image: blog1,
    title: "The aim of marketing is to know and understand the customer!",
    category: "Digital Marketing",
    date: "February 28, 2019",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    readMoreLink: "#"
  },
   {
    image: blog2,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog2,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog2,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog1,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog2,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog2,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog1,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
  {
    image: blog2,
    title: "Maximizing customer retention through website redesign",
    category: "Marketing Policies",
    date: "March 10, 2020",
    excerpt: "Revamping a legacy site with better UX leads to improved conversions and more loyal customers...",
    readMoreLink: "#" // Added read more link
  },
];

const POSTS_PER_PAGE = 3; // Number of posts per page

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate current posts to display
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);

  return (
    <div>
      <Breadcrumb title="Blog" path="Blog" />
      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-posts">
            {currentPosts.map((item, index) => (
              <BlogPost 
                key={index} 
                image={item.image}
                title={item.title}
                category={item.category}
                date={item.date}
                excerpt={item.excerpt}
                readMoreLink={item.readMoreLink}
              />
            ))}
            
            {/* Pagination controls */}
            <div className="pagination">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;