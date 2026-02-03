import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/collection.css";

import product1 from "../assets/image1.png";
import product2 from "../assets/image2.png";
import product3 from "../assets/image3.png";
import product4 from "../assets/image4.png";
import product5 from "../assets/image5.png";
import product6 from "../assets/image6.png";
import product7 from "../assets/image7.png";
import product8 from "../assets/image8.png";

const latestCollections = [
  { id: 1, name: "Kid Tapered Slim Fit Trouser", price: 599, image: product1 },
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
  { id: 6, name: "Women Casual Linen Shirt", price: 749, image: product6 },
  {
    id: 7,
    name: "Men Classic Crew Neck Sweater",
    price: 1399,
    image: product7,
  },
  { id: 8, name: "Girl Elegant Party Dress", price: 1099, image: product8 },
];

const Collection = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="filters">
          <h1>FILTERS</h1>

          <div className="category">
            <h4>CATEGORIES</h4>
            <label>
              <input type="checkbox" /> Men
            </label>
            <br />
            <label>
              <input type="checkbox" /> Women
            </label>
            <br />
            <label>
              <input type="checkbox" /> Kids
            </label>
          </div>

          <div className="type">
            <h4>TYPE</h4>
            <label>
              <input type="checkbox" /> Topwear
            </label>
            <br />
            <label>
              <input type="checkbox" /> Bottomwear
            </label>
            <br />
            <label>
              <input type="checkbox" /> Winterwear
            </label>
          </div>
        </div>

        <section>
          <div className="all-collection">
            <div className="collection-heading">
              <h1>ALL COLLECTIONS</h1>
            </div>

            <div className="sortby">
              <select id="sort">
                <option>Sort by: Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="collection-products">
            {latestCollections.map((product) => (
              <div className="collection-product" key={product.id}>
                <div className="collection-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Collection;
