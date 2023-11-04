import axios from "axios";

const API = axios.create({
  baseURL: "https://mon-bac-api.onrender.com/api/",
});
// API.headers.common['Authorization'] = AUTH_TOKEN;
API.defaults.headers.post["Content-Type"] = "application/json";
// API.defaults.withCredentials = true;

export default API;
