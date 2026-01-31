import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Cart.css'
<<<<<<< HEAD
import image8 from "../assets/image8.png";
import deleteIcon from "../assets/delete.png";
=======
import Footer from '../components/Footer'
>>>>>>> 5f388b2d61fb69e9e02169ac87007b77fc874287

const Cart = () => {
  return (
    <>
      <Navbar />

      <div id="cart-container">
        {/* LEFT */}
        <div id="cart-left">
          <h2>
            YOUR <span>CART</span>
            <span className="line">——</span>
          </h2>
          <div className="cart-items">
  <div className="cart-item">
    <img
      src={image8}
      alt="product"
      className="cart-img"
    />

    <div className="cart-info">
      <h4>Kid Tapered Slim Fit Trouser</h4>
      <p>$38 <span>XL</span></p>
    </div>

    <input
      type="number"
      value="2"
      className="cart-qty"
    />

    <div className="cart-delete">
      
      <img src={deleteIcon}alt="delete"/>
    </div>
  </div>
</div>

        </div>

        {/* RIGHT */}
        <div id="cart-right">
          <div id="cart-totals">
            <h3>
              CART <span>TOTALS</span>
              <span className="line">——</span>
            </h3>

            <div className="row">
              <p>Subtotal</p>
              <p>$0.00</p>
            </div>

            <div className="row">
              <p>Shipping Fee</p>
              <p>$10.00</p>
            </div>

            <div className="row total">
              <p>Total</p>
              <p>$0.00</p>
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Cart
