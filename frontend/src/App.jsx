import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./Pages/About";
import Collection from "./pages/Collection";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./Admin/Admin";
import Dashboard from "./Admin/Dashboard";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
