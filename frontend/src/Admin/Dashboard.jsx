import React from 'react'
import './Admin.css'
import AdminNav from '../assets/admin-logo.png'
import Add from '../assets/add.png'
import list from '../assets/check.png'

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="dash-nav">
        <div className="admin-logo">
          <img src={AdminNav} alt="Admin Logo" />
        </div>
        <div className="logout-btn">
          <button id="logout">Logout</button>
        </div>
      </div>

      <div className="dash-main">
        {/* Sidebar */}
        <div className="option">
          <div className="add">
            <div className="add-image">
              <img src={Add} alt="" />
            </div>
            <p className="item-text">Add items</p>
          </div>

          <div className="list">
            <div className="add-image">
              <img src={list} alt="" />
            </div>
            <p className="item-text">List items</p>
          </div>

          <div className="order">
            <div className="add-image">
              <img src={list} alt="" />
            </div>
            <p className="item-text">Orders</p>
          </div>
        </div>
        
        <div className="dashboard-section">
          <h4 className="section-title">Upload Image</h4>

          <div className="upload-row">
            <label className="upload-box">
              <span>☁️</span>
              <p>Upload</p>
              <input type="file" hidden />
            </label>

            <label className="upload-box">
              <span>☁️</span>
              <p>Upload</p>
              <input type="file" hidden />
            </label>

            <label className="upload-box">
              <span>☁️</span>
              <p>Upload</p>
              <input type="file" hidden />
            </label>

            <label className="upload-box">
              <span>☁️</span>
              <p>Upload</p>
              <input type="file" hidden />
            </label>
          </div>

          <div className="price-group">
            <label>Product name</label>
            <input type="text" placeholder="Type here" />
          </div>

          <div className="form-description">
            <label>Product description</label>
            <input type="text" placeholder="Write content here" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Product category</label>
              <select>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>

            <div className="form-group">
              <label>Sub category</label>
              <select>
                <option>Topwear</option>
                <option>Bottomwear</option>
                <option>Winterwear</option>
              </select>
            </div>

            <div className="product-price">
              <label>Product Price</label>
              <input className="quantity" type="number" placeholder="0" />
            </div>
          </div>

          <div className="product-sizes">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size">XL</div>
            <div className="size">XXL</div>
          </div>

          <div className="check">
            <input type="checkbox" id="bestseller" />
            <label htmlFor="bestseller">Add to bestseller</label>
          </div>

          <button id="add-btn">Add Product</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
