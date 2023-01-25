import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import PassGen from "../pages/PassGen";
import PassManager from "../pages/PassManager";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route
          path="/passgen"
          element={
            <PrivateRoute>
              <PassGen />
            </PrivateRoute>
          }
        />
        <Route
          path="/passmanager"
          element={
            <PrivateRoute>
              <PassManager />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
