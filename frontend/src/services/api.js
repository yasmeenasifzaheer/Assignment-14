// src/services/api.js
import axios from "axios";

// Use backend URL from environment variable
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // <- updated
});

// Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
