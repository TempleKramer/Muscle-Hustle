import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login";
import Homepage from "../homepage/homepage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);