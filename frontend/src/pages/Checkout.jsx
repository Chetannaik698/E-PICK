import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/checkout.css";
import { AppContext } from "../context/AppContext";
import api from "../API/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { total, subTotal, shippingFee, getCartData } = useContext(AppContext);

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const shippingAddress = {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipcode,
    country,
    phone,
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/orders/", {
        shippingAddress,
        paymentMethod,
      });

      toast.success(response.data.message);
      getCartData();
      navigate("/orders")
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      console.error(error);
    } finally {
      setFirstName("");
      setLastName("");
      setEmail("");
      setStreet("");
      setCity("");
      setState("");
      setZipcode("");
      setCountry("");
      setPhone("");
      setPaymentMethod("cod");
    }
  };



  return (
    <>
      <Navbar />

      <form onSubmit={handlePlaceOrder}>
        <div className="checkout-wrapper">
          <div className="checkout-container">
            {/* LEFT */}
            <div className="delivery-section">
              <h2 className="section-title">
                DELIVERY INFORMATION <span></span>
              </h2>

              <div className="two-col">
                <input
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  type="text"
                />
                <input
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  type="text"
                />
              </div>

              <input
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
              <input
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
                type="text"
              />

              <div className="two-col">
                <input
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  type="text"
                />
                <input
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  type="text"
                />
              </div>

              <div className="two-col">
                <input
                  placeholder="Zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                  type="text"
                />
                <input
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  type="text"
                />
              </div>

              <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="text"
              />
            </div>

            {/* RIGHT */}
            <div className="summary-section">
              <h2 className="section-title">
                CART TOTALS <span></span>
              </h2>

              <div className="row">
                <p>Subtotal</p>
                <p>₹{subTotal.toFixed(2)}</p>
              </div>

              <div className="row">
                <p>Shipping Fee</p>
                <p>₹{shippingFee.toFixed(2)}</p>
              </div>

              <div className="row total">
                <p>Total</p>
                <p>₹{total.toFixed(2)}</p>
              </div>

              <h2 className="section-title payment">
                PAYMENT METHOD <span></span>
              </h2>

              <div className="payment-options">
                <label className="pay-card">
                  <input
                    type="radio"
                    name="payment"
                    onClick={() => setPaymentMethod("stripe")}
                  />
                  Stripe
                </label>

                <label className="pay-card">
                  <input
                    type="radio"
                    name="payment"
                    onClick={() => setPaymentMethod("razorpay")}
                  />
                  Razorpay
                </label>

                <label className="pay-card active">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    onClick={() => setPaymentMethod("cod")}
                  />
                  Cash On Delivery
                </label>
              </div>

              <button className="place-order-btn" type="submit">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default Checkout;
