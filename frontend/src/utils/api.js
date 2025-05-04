import axios from "axios";

const api = axios.create({
  baseURL: "https://bus-dwmy.onrender.com", // Adjust the URL as needed
  withCredentials: true, // for cookies
});

export default api;
