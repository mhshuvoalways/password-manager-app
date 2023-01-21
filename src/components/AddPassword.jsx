import React from "react";
import styles from "../style";
import Password from "../assets/password.svg";

const AddPassword = () => {
  return (
    <div
      className={`${styles.paragraph} w-10/12 m-auto py-10 bg-gray-800 mt-10 sm:px-10 px-5 rounded-lg`}
    >
      <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
        Add Password
      </p>
      <div className="flex gap-5 items-center justify-between flex-wrap sm:flex-nowrap">
        <form className="space-y-5">
          <input
            type="text"
            name="website"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
            placeholder="Enter Website"
          />
          <input
            type="text"
            name="username"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
            placeholder="Enter Username"
          />
          <input
            type="password"
            name="password"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
            placeholder="Enter Password"
          />
          <button
            className="w-full py-2 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px]"
            type="button"
          >
            Add
          </button>
        </form>
        <img src={Password} className="w-full sm:w-6/12" />
      </div>
    </div>
  );
};

export default AddPassword;
