import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/ProductDetails.css'
import image1 from '../assets/image1.png'
import rating from '../assets/rating.png'

const ProductDetails = () => {
  return (
    <div>
      <Navbar />

      <div className="product-page">
        <div className="product-item">
          
          <div className="review-picture1">
            <img src={image1} alt="product" />
          </div>

          <div className="review-picture2">
            <img src={image1} alt="product" />
          </div>

          <div className="review-details">
            <h2>Girls Round Neck Cotton Top</h2>

            <div className="rating">
              <p className='rate'>4.2</p>
              <img src={rating} alt="rating" />
              <p className='rate'>(214)</p>
            </div>

            <div className="item-price">
              <p className='amount'>₹799</p>
              <p className="item-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and
                with a round neckline and short sleeves, worn as an undershirt or outer garment.
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

            <button className="add-cart"><b>Add To Cart</b></button>

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
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.
          </div>
        </div>

    
        <div className="main-container">

          <div className="container2">
            <div className="image">
              <img src={image1} alt="Product" />
            </div>
            <div className="image-text">
              <p>Kid Tapered Slim Fit Trouser</p>
              <p className="price">$38</p>
            </div>
          </div>

          <div className="container2">
            <div className="image">
              <img src={image1} alt="Product" />
            </div>
            <div className="image-text">
              <p>Kid Tapered Slim Fit Trouser</p>
              <p className="price">$38</p>
            </div>
          </div>

          <div className="container2">
            <div className="image">
              <img src={image1} alt="Product" />
            </div>
            <div className="image-text">
              <p>Kid Tapered Slim Fit Trouser</p>
              <p className="price">$38</p>
            </div>
          </div>

          <div className="container2">
            <div className="image">
              <img src={image1} alt="Product" />
            </div>
            <div className="image-text">
              <p>Kid Tapered Slim Fit Trouser</p>
              <p className="price">$38</p>
            </div>
          </div>

  <div className="container2">
            <div className="image">
              <img src={image1} alt="Product" />
            </div>
            <div className="image-text">
              <p>Kid Tapered Slim Fit Trouser</p>
              <p className="price">$38</p>
            </div>
          </div>

            <div className="container2">
            <div className="image">
              <img src={image1} alt="Product" />
            </div>
            <div className="image-text">
              <p>Kid Tapered Slim Fit Trouser</p>
              <p className="price">$38</p>
            </div>
          </div>

          
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetails
