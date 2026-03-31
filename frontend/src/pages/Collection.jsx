import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/collection.css";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Collection = () => {
  const { products } = useContext(AppContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  let filteredProducts = [...products];

  if (selectedCategories.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }

  if (selectedTypes.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedTypes.includes(product.subCategory),
    );
  }

  if (sortBy === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />
      <hr className="nav-divider" />

      <div className="container">
        <aside className="filters-sidebar">
          <h2 className="filter-title">FILTERS</h2>

          <div className="filter-box">
            <p className="filter-subtitle">CATEGORIES</p>

            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("men")}
                onChange={() => handleCategoryChange("men")}
              />
              Men
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("women")}
                onChange={() => handleCategoryChange("women")}
              />
              Women
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes("kids")}
                onChange={() => handleCategoryChange("kids")}
              />
              Kids
            </label>
          </div>

          <div className="filter-box">
            <p className="filter-subtitle">TYPE</p>

            <label>
              <input
                type="checkbox"
                checked={selectedTypes.includes("Topwear")}
                onChange={() => handleTypeChange("Topwear")}
              />
              Topwear
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedTypes.includes("Bottomwear")}
                onChange={() => handleTypeChange("Bottomwear")}
              />
              Bottomwear
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedTypes.includes("Winterwear")}
                onChange={() => handleTypeChange("Winterwear")}
              />
              Winterwear
            </label>
          </div>
        </aside>

        <main className="product-section">
          <div className="collection-header">
            <div className="title-with-line">
              <h1>
                ALL <span>COLLECTIONS</span>
              </h1>
              <div className="line"></div>
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
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
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Collection;
