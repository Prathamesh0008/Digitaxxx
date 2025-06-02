import React from "react";
import "../Breadcrumb/Breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, path }) => {
  return (
    <div className="breadcrumb-container">
      <h1 className="breadcrumb-title">{title}</h1>
      <p className="breadcrumb-path">
        <Link to="/">Home</Link> &gt; {path}
      </p>
    </div>
  );
};

export default Breadcrumb;
