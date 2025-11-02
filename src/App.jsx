import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.css";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Sales from "./pages/Sales";
import SearchCar from "./pages/SearchCar"; // ✅ Import SearchCar

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/search" element={<SearchCar />} /> {/* ✅ New route added */}
      </Routes>
    </Router>
  );
}
