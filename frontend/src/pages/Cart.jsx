
import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Cart.css'

const Cart = () => {
  return (
    <>
      <Navbar />

      <div id="cart-container">
        {/* LEFT */}
        <div id="cart-left">
          <h1>
            YOUR <span>CART</span>
            <span className="line">——</span>
          </h1>
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
    </>
  )
}

export default Cart
