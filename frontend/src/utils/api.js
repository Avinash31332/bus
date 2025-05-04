import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Adjust the URL as needed
  withCredentials: true, // for cookies
});

export default api;
