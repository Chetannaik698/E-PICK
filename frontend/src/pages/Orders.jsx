
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Order.css";
import image4 from "../assets/image4.png";
import image3 from "../assets/image3.png";
import image6 from "../assets/image6.png";

const Orders = () => {
  return (
    <>
      <Navbar />

      <div className="main-content">

        {/* ---------- Row 1 ---------- */}
        <div className="Order-row">

          <div className="Order-image">
            <img src={image4} alt="product" />
          </div>

          <div className="Order-details">
            <h4 className="order-title"><b>Men Round Neck Pure Cotton T-shirt</b></h4>

            <div className="order-text">
              <div className="order-row">
                <span className="price">$64</span>
                <span>Quantity: 1</span>
                <span>Size: L</span>
              </div>

              <div className="order-sub">Date: Mon Feb 02 2026</div>
              <div className="order-sub">Payment: COD</div>
            </div>
          </div>

          <div className="Order-status">
            <span className="status-dot"></span>
            <span>Order Placed</span>
          </div>

          <div className="Order-action">
            <button className="track-btn">Track Order</button>
          </div>

        </div>


        {/* ---------- Row 2 ---------- */}
        <div className="Order-row">

          <div className="Order-image">
            <img src={image3} alt="product" />
          </div>

          <div className="Order-details">
            <h4 className="order-title"><b>Men Round Neck Pure Cotton T-shirt</b></h4>

            <div className="order-text">
              <div className="order-row">
                <span className="price">$64</span>
                <span>Quantity: 1</span>
                <span>Size: M</span>
              </div>

              <div className="order-sub">Date: Mon Feb 02 2026</div>
              <div className="order-sub">Payment: COD</div>
            </div>
          </div>

          <div className="Order-status">
            <span className="status-dot"></span>
            <span>Order Placed</span>
          </div>

          <div className="Order-action">
            <button className="track-btn">Track Order</button>
          </div>

        </div>


        {/* ---------- Row 3 ---------- */}
        <div className="Order-row">

          <div className="Order-image">
            <img src={image6} alt="product" />
          </div>

          <div className="Order-details">
            <h4 className="order-title"><b>Women Zip-Front Relaxed Fit Jacket</b></h4>

            <div className="order-text">
              <div className="order-row">
                <span className="price">$74</span>
                <span>Quantity: 1</span>
                <span>Size: XL</span>
              </div>

              <div className="order-sub">Date: Mon Feb 02 2026</div>
              <div className="order-sub">Payment: COD</div>
            </div>
          </div>

          <div className="Order-status">
            <span className="status-dot"></span>
            <span>Order Placed</span>
          </div>

          <div className="Order-action">
            <button className="track-btn">Track Order</button>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Orders;
