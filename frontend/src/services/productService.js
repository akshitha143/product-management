// src/api/productService.js
import api from "../api/axios";

// Get all products → returns the actual list
export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data; 
};

// Get a single product by ID
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Create a product
export const createProduct = async (productData) => {
  const response = await api.post("/products", productData);
  return response.data;
};

// Update a product
export const updateProduct = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data;
};

// Delete a product
export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};
