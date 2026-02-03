import { createContext, useEffect, useState } from "react";
import api from "../API/axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);

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

    fetchLatestProducts()
  }, []);

  const value = {
    products,
    bestSeller
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
