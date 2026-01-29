import React from 'react'
import Navbar from '../components/Navbar'
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
              <p>4.2</p>
              <img src={rating} alt="rating" />

              <p>(214)</p>
            </div>
            <div className="item-price">
              <p>$56</p>
              <p class="item-description">A lightweight, usually knitted, pullover shirt, close-fitting and <br />
                with a round neckline and short sleeves, worn <br />
                as an undershirt or outer garment.</p>
            </div>

            <div class="size-title"><p>Select Size</p></div>
            <div className="item-sizes">
              <button>X</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>

            <button class="add-cart"><p><b>Add To Cart</b></p></button>

            <div className="item-trust-badge">
              <ul>
                <li> 100% Original Product</li>
                <li> Cash on Delivery Available</li>
                <li>Easy return and exchange within 7 days</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="description-box">
          <button>description</button>
          <button>Review</button>
          {/* <div className="description"></div>
          <div className="review"></div> */}
          <div className="description-content">
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, <br /><br />and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.

            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails
