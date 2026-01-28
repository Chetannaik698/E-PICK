import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="nav-items">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/collection">COLLECTION</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <div className="admin">
          <span>Admin Panel</span>
        </div>

        <div className="nav-functions">
          <img src={search} alt="Search" />
          <img src={profile} alt="Profile" />
          <div className="cart-icon">
            <img src={cart} alt="Cart" />
            <span>0</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
