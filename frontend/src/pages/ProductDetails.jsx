import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ProductDetails.css";
import image1 from "../assets/image1.png";
import rating from "../assets/rating.png";
import api from "../API/axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.product);
      } catch (err) {
        console.log(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  
  if (loading) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "120px" }}>
          Loading product...
        </p>
        <Footer />
      </>
    );
  }


  if (!product) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "120px" }}>
          Product not found 
        </p>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="product-page">
        <div className="product-item">
          <div className="review-picture1">
            <img
              src={product.images?.[0] || image1}
              alt="product"
            />
          </div>

          <div className="review-picture2">
            <img
              src={product.images?.[0] || image1}
              alt="product"
            />
          </div>

          <div className="review-details">
            <h2>{product.name}</h2>

            <div className="rating">
              <p className="rate">4.2</p>
              <img src={rating} alt="rating" />
              <p className="rate">(214)</p>
            </div>

            <div className="item-price">
              <p className="amount">{product.price}</p>
              <p className="item-description">
                {product.description}
              </p>
            </div>

            <div className="size-title">
              <p>Select Size</p>
            </div>

            <div className="item-sizes">
              <button>X</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>

            <button className="add-cart">
              <b>Add To Cart</b>
            </button>

            <div className="item-trust-badge">
              <ul>
                <li>100% Original Product</li>
                <li>Cash on Delivery Available</li>
                <li>Easy return and exchange within 7 days</li>
              </ul>
            </div>
          </div>
        </div>

  
        <div className="description-box">
          <button>Description</button>
          <button>Review</button>

          <div className="description-content">
            {product.description}
          </div>
        </div>

        {/* <div className="main-container">
          {[...Array(6)].map((_, i) => (
            <div className="container2" key={i}>
              <div className="image">
                <img src={image1} alt="Product" />
              </div>
              <div className="image-text">
                <p>Kid Tapered Slim Fit Trouser</p>
                <p className="price">$38</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
