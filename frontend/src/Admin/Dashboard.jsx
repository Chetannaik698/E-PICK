import React from "react";
import "./Admin.css";
import AdminNav from "../assets/admin-logo.png";
import Add from "../assets/add.png";
import list from "../assets/check.png";
import api from "../API/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const [dasboardSwitch, setDashboardSwitch] = React.useState("add");

  const { products } = React.useContext(AppContext);

  const handleDashboardSwitch = (option) => {
    setDashboardSwitch(option);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await api.post("/users/admin/logout");
      toast.success(response.data.message);
      navigate("/admin");
    } catch (error) {
      console.log(error?.response?.data?.message || "Filed to logout");
    }
  };

  return (
    <div>
      <div className="dash-nav">
        <div className="admin-logo">
          <img src={AdminNav} alt="Admin Logo" />
        </div>
        <div className="logout-btn">
          <button id="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="dash-main">
        {/* Sidebar */}
        <div className="option">
          <div
            onClick={() => handleDashboardSwitch("add")}
            className={dasboardSwitch === "add" ? "active add" : "add"}
          >
            <div className="add-image">
              <img src={Add} alt="" />
            </div>
            <p className="item-text">Add items</p>
          </div>

          <div
            className={dasboardSwitch === "list" ? "active list" : "list"}
            onClick={() => handleDashboardSwitch("list")}
          >
            <div className="add-image">
              <img src={list} alt="" />
            </div>
            <p className="item-text">List items</p>
          </div>

          <div
            className={dasboardSwitch === "orders" ? "active order" : "order"}
            onClick={() => handleDashboardSwitch("orders")}
          >
            <div className="add-image">
              <img src={list} alt="" />
            </div>
            <p className="item-text">Orders</p>
          </div>
        </div>

        {dasboardSwitch === "add" && (
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
        )}

        {dasboardSwitch === "list" && (
          <div className="table-section">
            <div className="admin-table-wrapper">
              <h2 className="admin-title">All Products List</h2>

              <div className="admin-table">
                <div className="admin-table-head">
                  <span>Image</span>
                  <span>Name</span>
                  <span>Category</span>
                  <span>Price</span>
                  <span>Action</span>
                </div>

                {products.map((product) => (
                  <div className="admin-table-row" key={product._id}>
                    <img src={product.images[0]} alt={product.name} />

                    <p className="name">{product.name}</p>

                    <span>{product.category}</span>

                    <span className="price">₹{product.price}</span>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(product._id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {dasboardSwitch === "orders" && (
          <div className="dashboard-section">
            <h1>orders</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
