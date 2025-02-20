import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Index = () => {
  return (
    <div className="hero">
      <h1>Welcome to Our E-commerce Store</h1>
      <p>Find the best products at unbeatable prices.</p>
      <Link to="/products">
        <button className="btn">Shop Now</button>
      </Link>
    </div>
  );
};

export default Index;
