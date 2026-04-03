import React, { useEffect, useState } from "react";
import "./admin.css";
import AdminNav from "../assets/admin-logo.png";
import Add from "../assets/add.png";
import list from "../assets/check.png";
import api from "../API/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import orderImg from "../assets/order.png";
import deleteImg from "../assets/delete.png";

const Dashboard = () => {
  const { products } = React.useContext(AppContext);

  const [dasboardSwitch, setDashboardSwitch] = React.useState("add");
  const [orders, setOrders] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    bestSeller: false,
  });

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size],
    );
  };

  const handleDashboardSwitch = (option) => {
    setDashboardSwitch(option);
  };

  const handleLogout = async () => {
    try {
      const response = await api.post("/users/admin/logout");
      toast.success(response.data.message);
      navigate("/admin");
    } catch (error) {
      console.log(error?.response?.data?.message || "Filed to logout");
    }
  };

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const response = await api.get("/orders/all");
        setOrders(response.data.orders);
        console.log(response.data.orders);
      } catch (error) {
        console.log(error?.response?.data?.message || "Filed to fetch orders");
      }
    };

    getAllOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await api.put(`/orders/${orderId}`, {
        status: newStatus,
      });

      toast.success(response.data.message);
      await getAllOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const formData = new FormData();

      Object.keys(productData).forEach((key) => {
        formData.append(key, productData[key]);
      });

      formData.append("sizes", JSON.stringify(selectedSizes));

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      const response = await api.post("/products/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message);
      setProductData({
        name: "",
        description: "",
        category: "Men",
        subCategory: "Topwear",
        price: "",
        bestSeller: false,
      });
      setSelectedSizes([]);
      setImages([]);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Filed to add product");
      console.log(error);
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
              {[0, 1, 2, 3].map((index) => (
                <label key={index} className="upload-box">
                  {images[index] ? (
                    <img
                      src={URL.createObjectURL(images[index])}
                      alt="preview"
                      className="preview-image"
                    />
                  ) : (
                    <>
                      <span>☁️</span>
                      <p>Upload</p>
                    </>
                  )}

                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const updatedImages = [...images];
                        updatedImages[index] = file;
                        setImages(updatedImages);
                      }
                    }}
                  />
                </label>
              ))}
            </div>

            <div className="price-group">
              <label>Product name</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-description">
              <label>Product description</label>
              <input
                type="text"
                name="description"
                value={productData.description}
                onChange={handleInputChange}
                placeholder="Write content here"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Product category</label>
                <select
                  name="category"
                  value={productData.category}
                  onChange={handleInputChange}
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>

              <div className="form-group">
                <label>Sub category</label>
                <select
                  name="subCategory"
                  value={productData.subCategory}
                  onChange={handleInputChange}
                >
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>

              <div className="product-price">
                <label>Product Price</label>
                <input
                  className="quantity"
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="product-sizes">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`size ${selectedSizes.includes(size) ? "active-size" : ""}`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>

            <div className="check">
              <input
                type="checkbox"
                id="bestseller"
                name="bestSeller"
                checked={productData.bestSeller}
                onChange={handleInputChange}
              />
              <label htmlFor="bestseller">Add to bestseller</label>
            </div>

            <button id="add-btn" onClick={handleAddProduct}>
              Add Product
            </button>
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
                      <img src={deleteImg} alt="delete" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {dasboardSwitch === "orders" && (
          <div className="order-section">
            <h4>Orders</h4>

            {orders.map((order) => (
              <div className="order-card" key={order._id}>
                <div className="order-icon">
                  <img src={orderImg} alt="order" />
                </div>

                <div className="order-info">
                  <p className="order-products">
                    {order.items
                      .map(
                        (item) =>
                          `${item.name} × ${item.quantity}${item.size || ""}`,
                      )
                      .join(", ")}
                  </p>

                  <p className="order-name">
                    {order.shippingAddress?.firstName}{" "}
                    {order.shippingAddress?.lastName}
                  </p>

                  <p className="order-address">
                    {order.shippingAddress?.city},{order.shippingAddress?.state}
                    ,{order.shippingAddress?.country}
                    {order.shippingAddress?.pincode}
                  </p>
                </div>

                <div className="order-meta">
                  <p>
                    <strong>Items:</strong> {order.items.length}
                  </p>
                  <p>
                    <strong>Method:</strong> {order.paymentMethod || "cod"}
                  </p>
                  <p>
                    <strong>Payment:</strong> {order.paymentStatus}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="order-status">
                  <select
                    defaultValue={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                  >
                    <option>Order Placed</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
