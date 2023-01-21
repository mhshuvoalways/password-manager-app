import React from "react";
import styles from "../style";
import Password from "../assets/password.svg";
import Copy from "../assets/copy.svg";

const PassGen = () => {
  return (
    <div
      className={`${styles.paragraph} w-10/12 m-auto py-10 bg-gray-800 mt-10 sm:px-10 px-5 rounded-lg`}
    >
      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
        <img src={Password} className="w-20" />
        <div className="space-y-3">
          <p className={`text-3xl leading-normal sm:${styles.heading2}`}>Password Generator</p>
          <p>Generate randomized, strong, secure passwords</p>
        </div>
      </div>
      <div className="flex items-center mt-10 gap-10 justify-between flex-wrap sm:flex-nowrap">
        <div className="flex items-center w-full">
          <input
            type="email"
            name="email"
            className="bg-gray-700 appearance-none outline-0 px-3 h-16  rounded-l-lg text-white font-thin w-full"
            value="&GQvlCw2;>HyX?{M"
          />
          <img
            src={Copy}
            className="w-10 text-white cursor-pointer bg-gray-700 rounded-r-lg h-16 pr-3"
          />
        </div>
        <button
          className="px-6 h-16 font-poppins text-primary bg-blue-gradient rounded-[10px] w-full sm:w-4/12"
          type="button"
        >
          Generate Password
        </button>
      </div>
      <div className="mt-14">
        <p className="text-2xl mb-5">Password settings</p>
        <div className="bg-gray-700 p-10 rounded-md">
          <p className="text-xl mb-5">Character Set</p>
          <div className="flex flex-wrap gap-8 items-center justify-between sm:justify-start">
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Lowercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Lowercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Lowercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Lowercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Lowercase Letters</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;
