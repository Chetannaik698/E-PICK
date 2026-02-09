import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import hero from "../assets/hero.png";
import exchange from "../assets/exchange.png";
import returnImg from "../assets/return.png";
import support from "../assets/support.png";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { products, bestSeller } = useContext(AppContext);

  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="theme">
          <div className="left">
            <div className="hero-content">
              <p className="label">OUR PICKS FOR YOU</p>
              <h1>Latest Styles</h1>
              <p className="shop-label">EXPLORE NOW</p>
            </div>
          </div>
          <div className="right">
            <img src={hero} alt="Hero" />
          </div>
        </div>

        <div className="latest-product">
          <h1>LATEST COLLECTIONS</h1>
          <p>
            Explore our newest fashion arrivals with the latest trends and
            styles.
          </p>
        </div>

        <div className="products">
          <div className="product-grid">
            {products.slice(0, 8).map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="product-card"
              >
                <div className="image-container">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <p className="product-name">{product.name}</p>
                <p className="product-price">₹{product.price}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="best-sellers">
          <h1>BEST SELLERS</h1>
          <p>Shop our most loved bestselling items trusted by customers.</p>
        </div>

        <div className="products">
          <div className="product-grid">
            {bestSeller.slice(0, 4  ).map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="product-card"
              >
                <div className="image-container">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <p className="product-name">{product.name}</p>
                <p className="product-price">₹{product.price}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="services">
          <div className="service">
            <img src={exchange} alt="Easy Exchange" />
            <h4>Easy Exchange Policy</h4>
            <p>We offer hassle free exchange policy</p>
          </div>

          <div className="service">
            <img src={returnImg} alt="Return Policy" />
            <h4>7 Days Return Policy</h4>
            <p>We provide 7 days free return policy</p>
          </div>

          <div className="service">
            <img src={support} alt="Customer Support" />
            <h4>Best customer support</h4>
            <p>we provide 24/7 customer support</p>
          </div>
        </div>

        <Discount />

        <Footer />
      </section>
    </div>
  );
};

export default Home;
