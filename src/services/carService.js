// src/services/carService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/cars";

// ✅ Get all cars
export const getAllCars = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// ✅ Get a single car by ID
export const getCarById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// ✅ Search cars by keyword (brand/model)
export const searchCars = async (query) => {
  const res = await axios.get(`${API_URL}?q=${query}`);
  return res.data;
};
