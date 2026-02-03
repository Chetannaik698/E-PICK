import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/checkout.css";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="delivery-information">
          <div className="delivery-text">
            <h2>Delivery Information</h2>
          </div>
          <div className="name-input">
            <div className="first-name">
              <input type="text" placeholder="First name" />
            </div>
            <div className="second-name">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="email-input">
            <input type="text" placeholder="Email address" />
          </div>
          <div className="email-input">
            <input type="text" placeholder="Street" />
          </div>
          <div className="name-input">
            <div className="first-name">
              <input type="text" placeholder="City" />
            </div>
            <div className="second-name">
              <input type="text" placeholder="State" />
            </div>
          </div>
          <div className="name-input">
            <div className="first-name">
              <input type="text" placeholder="Zipcode" />
            </div>
            <div className="second-name">
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div className="email-input">
            <input type="text" placeholder="Phone" />
          </div>
        </div>

        <div className="cart-totals">
          <div className="cart">
            <div className="cart-text">
              <h2>Cart Totals</h2>
            </div>
          </div>
          <div className="total">
            <div className="sub-total">
              <h3>Subtotal</h3>
            </div>
            <div className="rupees">
              <h3>$ 0.00</h3>
            </div>
          </div>

          <div className="total">
            <div className="sub-total">
              <h3>Shipping Fees</h3>
            </div>
            <div className="rupees">
              <h3>$ 10.00</h3>
            </div>
          </div>

          <div className="all-total">
            <div className="sub-total">
              <h3>Total</h3>
            </div>
            <div className="rupees">
              <h3>$ 10.00</h3>
            </div>
          </div>
          <div className="payment">
            <div className="payment-method">
              <h1>Payment Method</h1>
            </div>
          </div>
          <div className="box">
            <div className="payment-option">
              <div className="radio-button">
                <input type="radio" />
              </div>
              <div className="logo-text">
                <h3>stripe</h3>
              </div>
            </div>
            <div className="razorpay">
              <div className="razorpay-text">
                <h3>Razorpay</h3>
              </div>
            </div>
            <div className="cash-on-delivery">
              <div className="cash-text">
                <h3>Cash on delivery</h3>
              </div>
            </div>
          </div>
          <div className="order">
            <div className="place-order">
              <h3>PLACEORDER</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
