import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ProductDetails.css";
import image1 from "../assets/image1.png";
import rating from "../assets/rating.png";
import api from "../API/axios";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const { getCartData, user } = useContext(AppContext);

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

  useEffect(() => {
    if (!product) {
      return;
    }

    const fetchRelatedProducts = async () => {
      try {
        const response = await api.get("/products/relatedproducts", {
          params: {
            productId: id,
            category: product.category,
            subCategory: product.subCategory,
          },
        });
        setRelatedProducts(response.data.products);
      } catch (error) {
        console.log(err.response?.data?.message || err.message);
      }
    };
    fetchRelatedProducts();
  }, [id, product]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const AddToCart = async () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size first");
      return;
    }

    try {
      const response = await api.post("/cart/", {
        productId: id,
        size: selectedSize,
        quantity: 1,
      });
      toast.success(response.data.message);
      await getCartData();
    } catch (error) {
      toast.failure(error.response?.data?.message || error.message);
    }
  };

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
            <img src={product.images?.[0] || image1} alt="product" />
          </div>

          <div className="review-picture2">
            <img src={product.images?.[0] || image1} alt="product" />
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
              <p className="item-description">{product.description}</p>
            </div>

            <div className="size-title">
              <p>Select Size</p>
            </div>

            <div className="item-sizes">
              {product.sizes.map((size) => {
                return (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>

            <button className="add-cart" onClick={AddToCart}>
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

          <div className="description-content">{product.description}</div>
        </div>

        <div className="related">
          <div className="products">
            <h1>Related Products</h1>
            <div className="product-grid">
              {relatedProducts.map((product) => (
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
