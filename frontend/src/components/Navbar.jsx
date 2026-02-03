import React, { useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={`nav-items ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={isActive("/") ? "active" : ""}
              onClick={closeMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/collection"
              className={isActive("/collection") ? "active" : ""}
              onClick={closeMenu}
            >
              COLLECTION
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "active" : ""}
              onClick={closeMenu}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
              onClick={closeMenu}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="admin">
          <Link to={"/admin"}>
            <span>Admin Panel</span>
          </Link>
        </div>

        <div className="nav-functions">
          <img src={search} alt="Search" />
          <img src={profile} alt="Profile" />
          <div className="cart-icon">
            <Link to="/cart">
              <img src={cart} alt="Cart" />
            </Link>
            <span>0</span>
          </div>
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;