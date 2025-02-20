import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">E-Shop</Link>
      <div className="nav-links">
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/fashion">Fashion</Link>
        <Link to="/category/home">Home</Link>
        <Link to="/category/accessories">Accessories</Link>
      </div>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </Link>
    </nav>
  );
};

export default Navbar;
