import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import logoutImg from "../assets/logout.png";
import cart from "../assets/cart.png";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout, cartData, getCartData } = useContext(AppContext);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const profileRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    getCartData();
  }, []);

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
          <Link to={"/admin"} target="_blank" rel="noopener noreferrer">
            <span>Admin Panel</span>
          </Link>
        </div>

        <div className="nav-functions">
          <img src={search} alt="Search" />

          {user ? (
            <div className="profile-wrapper" ref={profileRef}>
              <img
                src={profile}
                alt="Profile"
                className="profile-icon"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              />

              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="profile-header">
                    <p>{user.email}</p>
                    <div className="profile-img">
                      <span>{user.name[0]}</span>
                    </div>
                    <span>Hi, {user.name}!</span>
                  </div>

                  <div className="profile-actions">
                    <Link to="/orders">
                      <p>My Orders</p>
                    </Link>
                    <div className="breaker"></div>
                    <p className="logout-btn" onClick={logout}>
                      <img src={logoutImg} alt="" /> Logout
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <img src={profile} alt="Login" />
            </Link>
          )}

          <div className="cart-icon">
            <Link to="/cart">
              <img src={cart} alt="Cart" />
            </Link>
            <span>{cartData.length}</span>
          </div>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
