import React, { use, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import image8 from "../assets/image8.png";
import deleteIcon from "../assets/delete.png";
import Footer from "../components/Footer";
import api from "../API/axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartData, getCartData, total, subTotal, shippingFee } = useContext(AppContext);

  const navigate = useNavigate();

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await api.delete(`/cart/${itemId}`);
      console.log(response.data);
      toast.success(response.data.message);
      await getCartData();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleCheckOut = () => {
    if (cartData.length === 0) {
      toast.error("Your cart is empty. Please add items to proceed.");
      return;
    }
    navigate("/checkout");
  }


  return (
    <>
      <Navbar />

      <div className="cart-container">
        <div className="cart-header">
          <h1>YOUR CART</h1>
          <div className="header-line"></div>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartData.map((item) => {
              return (
                <div className="cart-item" key={item._id}>
                  <img
                    src={item.product.images[0]}
                    alt="product"
                    className="item-image"
                  />
                  <div className="item-details">
                    <h3>{item?.product?.name}</h3>
                    <div className="item-price-size">
                      <span className="price">{item?.product?.price}</span>
                      <span className="size">{item?.size}</span>
                    </div>
                  </div>
                  <input
                    type="number"
                    value={item?.quantity}
                    className="item-quantity"
                  />
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteItem(item._id)}
                  >
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Cart Totals */}
          <div className="cart-totals">
            <div className="totals-header">
              <h2>CART TOTALS</h2>
              <div className="header-line"></div>
            </div>

            <div className="totals-content">
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{subTotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping Fee</span>
                <span>₹{shippingFee.toFixed(2)}</span>
              </div>
              <div className="total-row total-final">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn" onClick={handleCheckOut}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
