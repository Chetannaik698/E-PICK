import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Cart.css'
import image8 from "../assets/image8.png";
import deleteIcon from "../assets/delete.png";
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <>
      <Navbar />

      <div className="cart-container">
        <div className="cart-header">
          <h1>YOUR CART</h1>
          <div className="header-line"></div>
        </div>

        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            <div className="cart-item">
              <img src={image8} alt="product" className="item-image" />
              <div className="item-details">
                <h3>Kid Tapered Slim Fit Trouser</h3>
                <div className="item-price-size">
                  <span className="price">$38</span>
                  <span className="size">S</span>
                </div>
              </div>
              <input type="number" value="1" className="item-quantity" />
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>

            <div className="cart-item">
              <img src={image8} alt="product" className="item-image" />
              <div className="item-details">
                <h3>Boy Round Neck Pure Cotton T-shirt</h3>
                <div className="item-price-size">
                  <span className="price">$60</span>
                  <span className="size">M</span>
                </div>
              </div>
              <input type="number" value="2" className="item-quantity" />
              <button className="delete-btn">
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>
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
                <span>$ 158.00</span>
              </div>
              <div className="total-row">
                <span>Shipping Fee</span>
                <span>$ 10.00</span>
              </div>
              <div className="total-row total-final">
                <span>Total</span>
                <span>$ 168.00</span>
              </div>

              <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Cart