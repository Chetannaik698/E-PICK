import React from "react";
import "../styles/Discount.css";

const Discount = () => {
  return (
    <div className="discount">
      <h2>Subscribe now & get 20% off</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="discount-input">
        <input type="email" placeholder="Enter your email" />
        <button className="discount-button">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Discount;
