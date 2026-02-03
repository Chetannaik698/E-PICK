import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/collection.css";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Collection = () => {
  const { products } = useContext(AppContext);

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
            {products.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <div className="collection-product">
                  <div className="collection-product-image">
                    <img src={product.images[0]} alt={product.name} />
                  </div>
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Collection;
