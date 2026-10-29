
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Partner from "./partner/Partner.jsx";
import "./index.css";
import { Login, Register, PartnerDashboard, AdminDashboard } from "./portal/Portal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/partner/register" element={<Register />} />
        <Route path="/partner/dashboard" element={<PartnerDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);