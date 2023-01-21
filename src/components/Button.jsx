import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-5 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px] ${styles}`}>
    Get Started
  </button>
);

export default Button;