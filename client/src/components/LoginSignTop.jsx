import React from "react";
import { NavLink } from "react-router-dom";

const LoginSignTop = () => {
  return (
    <div className="flex justify-center mb-10 flex-wrap">
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-400 opacity-50"
        }
      >
        <button className="py-2 mt-5 text-2xl font-bold">Register</button>
      </NavLink>
      <p className="py-2 mt-5 text-2xl mx-2">|</p>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-400 opacity-50"
        }
      >
        <button className="py-2 mt-5 text-2xl font-bold">Login</button>
      </NavLink>
    </div>
  );
};

export default LoginSignTop;
