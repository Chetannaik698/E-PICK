import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <nav>
        <div className="logo">
         <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <ul className="nav-items">
          <li><Link to="/" className={isActive("/") ? "active" : ""}>HOME</Link></li>
          <li><Link to="/collection" className={isActive("/collection") ? "active" : ""}>COLLECTION</Link></li>
          <li><Link to="/about" className={isActive("/about") ? "active" : ""}>ABOUT</Link></li>
          <li><Link to="/contact" className={isActive("/contact") ? "active" : ""}>CONTACT</Link></li>
        </ul>

        <div className="admin">
          <span>Admin Panel</span>
        </div>

        <div className="nav-functions">
          <img src={search} alt="Search" />
          <img src={profile} alt="Profile" />
          <div className="cart-icon">
            <Link to="/cart"><img src={cart} alt="Cart" /></Link>
            <span>0</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
