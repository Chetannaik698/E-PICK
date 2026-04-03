import axios from "axios";

const api = axios.create({
  baseURL: "https://e-pick-mn34.onrender.com/api",
  withCredentials: true,
});

export default api;
