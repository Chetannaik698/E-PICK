import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import hero from "../assets/hero.png";
import dash from "../assets/dash.png";
import product1 from "../assets/image1.png";
import product2 from "../assets/image2.png";
import product3 from "../assets/image3.png";
import product4 from "../assets/image4.png";
import product5 from "../assets/image5.png";
import product6 from "../assets/image6.png";
import product7 from "../assets/image7.png";
import product8 from "../assets/image8.png";
import exchange from "../assets/exchange.png";
import returnImg from "../assets/return.png";
import support from "../assets/support.png";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

const latestCollections = [
  {
    id: 1,
    name: "Kid Tapered Slim Fit Trouser",
    price: 599,
    image: product1,
  },
  {
    id: 2,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 899,
    image: product2,
  },
  {
    id: 3,
    name: "Boy Round Neck Pure Cotton T-shirt",
    price: 799,
    image: product3,
  },
  {
    id: 4,
    name: "Women Zip-Front Relaxed Fit Jacket",
    price: 1499,
    image: product4,
  },
  {
    id: 5,
    name: "Men Tapered Fit Flat-Front Trousers",
    price: 1199,
    image: product5,
  },
  {
    id: 6,
    name: "Women Casual Linen Shirt",
    price: 749,
    image: product6,
  },
  {
    id: 7,
    name: "Men Classic Crew Neck Sweater",
    price: 1399,
    image: product7,
  },
  {
    id: 8,
    name: "Girl Elegant Party Dress",
    price: 1099,
    image: product8,
  },
];

const bestSellers = [
  {
    id: 1,
    name: "Women Zip-Front Relaxed Fit Jacket",
    price: 1299,
    image: product1,
  },
  {
    id: 2,
    name: "Men Slim Fit Relaxed Denim Jacket",
    price: 1599,
    image: product2,
  },
  {
    id: 3,
    name: "Men Slim Fit Relaxed Denim Jacket",
    price: 1899,
    image: product3,
  },
  {
    id: 4,
    name: "Women Zip-Front Relaxed Fit Jacket",
    price: 1699,
    image: product4,
  },
];

const Home = () => {
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
            Explore our newest fashion arrivals with the latest trends and styles.
          </p>
        </div>

        <div className="products">
          {latestCollections.map((product) => {
            return (
              <div className="collection-product" key={product.id}>
                <div className="collection-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
              </div>
            );
          })}
        </div>

        <div className="best-sellers">
          <h1>BEST SELLERS</h1>
          <p>
            Shop our most loved bestselling items trusted by customers.
          </p>
        </div>

        <div className="products">
          {bestSellers.map((product) => {
            return (
              <div className="collection-product" key={product.id}>
                <div className="collection-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
              </div>
            );
          })}
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
