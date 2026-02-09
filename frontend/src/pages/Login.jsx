import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Login.css";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isAccount, setIsAccount] = useState(false);

  const { user, login, register } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isAccount) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        {isAccount ? <h3>Welcome Back</h3> : <h3>Sign up for E-PICK</h3>}

        <div className="login-options">
          <div className="login-option">
            <img src={google} alt="Google" />
            <span>Google</span>
          </div>
          <div className="login-option">
            <img src={facebook} alt="Facebook" />
            <span>Facebook</span>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {!isAccount ? (
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          ) : (
            <></>
          )}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {isAccount ? (
            <button type="submit" className="login-btn">
              Log in
            </button>
          ) : (
            <button type="submit" className="login-btn">
              Create account
            </button>
          )}
        </form>

        {isAccount ? (
          <p className="end-switch">
            Don’t have an account?{" "}
            <span onClick={() => setIsAccount(false)}> Sign up</span>
          </p>
        ) : (
          <p className="end-switch">
            Already have an account?{" "}
            <span onClick={() => setIsAccount(true)}>Log in</span>
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Login;
