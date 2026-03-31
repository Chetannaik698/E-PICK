import React from "react";
import "./Admin.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../API/axios";

const Admin = () => {
  const [email, setEmail] = React.useState("admin@example.com");
  const [password, setPassword] = React.useState("password");

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await api.post("/users/admin/login", {
        email,
        password,
      });
      toast.success(response.data.message);
      navigate("/admin-dashboard")
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.log(error);
      
    }
  };

  return (
    <div>
      <div className="admin-page">
        <div className="admin-pannel">
          <h2>Admin Panel</h2>
          <div className="email">
            <p>Email Address</p>
            <input
              type="email"
              placeholder="Enter your email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input
              type="password"
              placeholder="your@email.com"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-btn">
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
