import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-items">
          <a href="">HOME</a>
          <a href="">COLLECTION</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT</a>

          <div className="admin">
            <span>Admin Panel</span>
          </div>
        </div>

        <div className="nav-functions">
          <img src={search} alt="" />
          <img src={profile} alt="" />
          <img src={cart} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
