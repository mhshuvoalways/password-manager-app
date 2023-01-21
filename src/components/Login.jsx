import React from "react";
import LoginSignTop from "./LoginSignTop";
import styles from "../style";

const Login = () => {
  return (
    <div
      className={`${styles.paragraph} w-10/12 sm:w-5/12 m-auto bg-gray-800 pt-10 pb-20 my-20 sm:px-10 px-5 rounded-lg`}
    >
      <LoginSignTop />

      <form className="space-y-5">
        <input
          type="email"
          name="email"
          className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          name="password"
          className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
          placeholder="Enter Your Password"
        />
        <button
          className="w-full py-2 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px]"
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
