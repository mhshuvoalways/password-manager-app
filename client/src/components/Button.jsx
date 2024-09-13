import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Context } from "../app/Context";

const Button = ({ styles }) => {
  const context = useContext(Context);
  let auth = context.user.isAuthenticate;

  return (
    <Link to={auth ? "/passmanager" : "/login"}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="button"
        className={`py-5 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px] ${styles}`}
      >
        Get Started
      </motion.button>
    </Link>
  );
};

export default Button;
