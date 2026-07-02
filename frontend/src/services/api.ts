import axios from "axios";

const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL as string) || "http://localhost:4000/api",
  headers: { "Content-Type": "application/json" }
});

// Attach JWT when present
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
