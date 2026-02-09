import { createContext, useEffect, useState } from "react";
import api from "../API/axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [user, setUser] = useState();
  const [cartData, setCartData] = useState([]);

  const subTotal = cartData.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const shippingFee = subTotal > 500 ? 0 : 50;

  const total = subTotal + shippingFee;

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products/");
        setProducts(response.data.products || []);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await api.get("/products/bestsellers");
        setBestSeller(response.data.products);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };

    fetchLatestProducts();
  }, []);

  const fetchMe = async () => {
    try {
      const response = await api.get("/users/me");
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);
  const login = async (email, password) => {
    const response = await api.post("/users/login", {
      email,
      password,
    });

    setUser(response.data.user);
    toast.success(response.data.message);
  };

  const register = async (name, email, password) => {
    const response = await api.post("users/register", {
      name,
      email,
      password,
    });
    setUser(response.data.user);
    toast.success(response.data.message);
  };

  const logout = async () => {
    try {
      await api.post("/users/logout");
      setUser(null);
      toast.success("Logged out");
    } catch {
      setUser(null);
    }
  };

  const getCartData = async () => {
    try {
      const response = await api.get("/cart/");
      setCartData(response.data.cartItems[0].items);
      console.log(cartData);
    } catch (error) {
      console.log(error?.message);
    }
  };

  const value = {
    products,
    bestSeller,
    user,
    login,
    register,
    logout,
    getCartData,
    cartData,
    total,
    subTotal,
    shippingFee,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
