import React, { useState } from "react";
import styles from "../style";
import Password from "../assets/password.svg";
import Copy from "../assets/copy.svg";

const PassGen = () => {
  const [rangeValue, setRangeValue] = useState(10);

  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div
      className={`${styles.paragraph} w-10/12 m-auto py-10 bg-gray-800 mt-10 sm:px-10 px-5 rounded-lg`}
    >
      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
        <img src={Password} className="w-20" />
        <div className="space-y-3">
          <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
            Password Generator
          </p>
          <p>Generate randomized, strong, secure passwords</p>
        </div>
      </div>
      <div className="flex mt-10 gap-10 justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="w-full">
          <div className="flex items-center border-4 border-green-600">
            <input
              type="text"
              name="text"
              className="bg-gray-700 appearance-none outline-0 px-3 h-16 text-white font-thin w-full"
              value="&GQvlCw2;>HyX?{M"
            />
            <img
              src={Copy}
              className="w-10 text-white cursor-pointer bg-gray-700 h-16 pr-3"
            />
          </div>
          <p className="bg-green-600 py-2 text-center font-bold">Strong</p>
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
          <div className="flex flex-wrap gap-8 items-center justify-between">
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
              <p className="cursor-pointer">Uppercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Numbers</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg cursor-pointer"
              />
              <p className="cursor-pointer">Symbols</p>
            </label>
          </div>
          <div className="mt-8">
            <p>Password length</p>
            <div className="flex items-center mt-2 gap-5">
              <input
                type="number"
                name="number"
                className="bg-gray-800 appearance-none outline-0 px-5 h-16 text-white font-thin w-2/12"
                value={rangeValue}
                onChange={rangeHandler}
              />
              <div className="w-full h-16 border border-gray-500 px-5">
                <input
                  type="range"
                  className="w-full h-16"
                  value={rangeValue}
                  onChange={rangeHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;
