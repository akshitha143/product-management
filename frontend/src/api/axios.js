import axios from "axios";

const api = axios.create({
  baseURL: "https://product-management-xowi.onrender.com/api" ,
  headers: { "Content-Type": "application/json" },


});


export default api;