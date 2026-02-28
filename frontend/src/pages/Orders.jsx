import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Order.css";
import api from "../API/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/orders/");
        setOrders(response.data.orders);
        console.log(response.data.orders);
      } catch (error) {
        console.log("Error in fetching orders:", error);
      }
    };

    fetchOrders();

    const interval = setInterval(fetchOrders, 5000);

    return () => clearInterval(interval);
  }, []);

  console.log("orders: ", orders);

  return (
    <>
      <Navbar />

      <div className="main-content">
        {orders.map((order) =>
          order.items.map((item) => (
            <div className="Order-row" key={item._id}>
              <div className="Order-image">
                <img src={item.image} alt="product" />
              </div>

              <div className="Order-details">
                <h4 className="order-title">
                  <b>{item.product?.name || "Product"}</b>
                </h4>

                <div className="order-text">
                  <div className="order-row">
                    <span className="price">₹{item.price}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Size: {item.size}</span>
                  </div>

                  <div className="order-sub">
                    Date: {new Date(order.createdAt).toDateString()}
                  </div>

                  <div className="order-sub">
                    Payment: {order.paymentMethod.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="Order-status">
                <span className="status-dot"></span>
                <span>{order.orderStatus}</span>
              </div>

              <div className="Order-action">
                <button className="track-btn">Track Order</button>
              </div>
            </div>
          )),
        )}
      </div>

      <Footer />
    </>
  );
};

export default Orders;
