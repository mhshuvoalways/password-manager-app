import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../style";
import { arrowUp } from "../assets";
import { Context } from "../app/Context";

const GetStarted = () => {
  const context = useContext(Context);
  let auth = context.user.isAuthenticate;

  return (
    <Link to={auth ? "/passgen" : "/login"}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.5px]">
              <span className="text-gradient">Get</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[22px] h-[22px] object-contain"
            />
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
export default GetStarted;
