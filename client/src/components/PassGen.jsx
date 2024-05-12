import React, { useState, useEffect } from "react";
import Generator from "generate-password-browser";
import { passwordStrength } from "check-password-strength";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../style";
import Password from "../assets/password.svg";
import Copy from "../assets/copy.svg";

const PassGen = () => {
  const [passwords, setPasswords] = useState("!g?n?Z0LQsiO0Ik/w$uf");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [characters, setCharacters] = useState({
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    length: 15,
  });
  const [copyToClipboard, setCopyToClipboard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const passwordsHandler = (event) => {
    setPasswords(event.target.value);
  };

  const generatorHandler = () => {
    if (
      !characters.numbers &&
      !characters.symbols &&
      !characters.lowercase &&
      !characters.uppercase
    ) {
      setErrorMessage("Please choose at least one set of characters.");
    } else {
      const genPassword = Generator.generateMultiple(1, {
        numbers: characters.numbers,
        symbols: characters.symbols,
        lowercase: characters.lowercase,
        uppercase: characters.uppercase,
        length: characters.length,
      });
      setPasswords(genPassword[0]);
    }
  };

  const charactersHandler = (e) => {
    setCharacters({
      ...characters,
      [e.target.name]: !characters[e.target.name],
    });
    setErrorMessage("");
  };

  const charactersLengthHandler = (e) => {
    if (e.target.value >= 5 && e.target.value <= 100) {
      setCharacters({ ...characters, [e.target.name]: e.target.value });
    }
  };

  const copyToClipboardHandler = () => {
    setCopyToClipboard(true);
    setTimeout(() => {
      setCopyToClipboard(false);
    }, 1000);
  };

  useEffect(() => {
    generatorHandler();
  }, []);

  useEffect(() => {
    setPasswordCheck(passwordStrength(passwords).value);
  }, [passwords]);

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mt-10 sm:px-10 px-5`}
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
      <div className="flex mt-10 gap-5 justify-between flex-wrap sm:flex-nowrap">
        <div className="w-full">
          <div
            className={`flex items-center border-4 ${
              (passwordCheck === "Too weak" && "border-red-600") ||
              (passwordCheck === "Weak" && "border-red-500") ||
              (passwordCheck === "Medium" && "border-yellow-300") ||
              (passwordCheck === "Strong" && "border-green-600")
            }`}
          >
            <input
              type="text"
              name="text"
              className="bg-gray-700 appearance-none outline-0 px-3 h-16 text-white font-thin w-full"
              value={passwords}
              onChange={passwordsHandler}
            />
            <CopyToClipboard text={passwords} onCopy={copyToClipboardHandler}>
              <motion.button whileTap={{ scale: 0.95 }}>
                <img
                  src={Copy}
                  className="w-10 text-white cursor-pointer bg-gray-700 h-16 pr-3"
                />
              </motion.button>
            </CopyToClipboard>
          </div>
          <p
            className={`py-2 text-center font-bold ${
              (passwordCheck === "Too weak" && "bg-red-600") ||
              (passwordCheck === "Weak" && "bg-red-500") ||
              (passwordCheck === "Medium" && "bg-yellow-300") ||
              (passwordCheck === "Strong" && "bg-green-600")
            }`}
          >
            {passwordCheck}
          </p>
          <p className="text-red-400 text-center mt-2">{errorMessage}</p>
          <p className="text-gray-400 text-center mt-2">
            {copyToClipboard && "Copied"}
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-6 h-16 font-poppins text-primary bg-blue-gradient rounded-[10px] w-full sm:w-4/12 mt-0 sm:mt-5"
          type="button"
          onClick={generatorHandler}
        >
          Generate Password
        </motion.button>
      </div>
      <div className="mt-14">
        <p className="text-2xl mb-5">Password settings</p>
        <div className="bg-black-gradient-2 rounded-[20px] box-shadow p-10">
          <p className="text-xl mb-5">Character Set</p>
          <div className="flex flex-wrap gap-8 items-center justify-between">
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                name="lowercase"
                checked={characters.lowercase}
                className="w-5 h-5 rounded-lg cursor-pointer"
                onChange={charactersHandler}
              />
              <p className="cursor-pointer">Lowercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                name="uppercase"
                checked={characters.uppercase}
                className="w-5 h-5 rounded-lg cursor-pointer"
                onChange={charactersHandler}
              />
              <p className="cursor-pointer">Uppercase Letters</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                name="numbers"
                checked={characters.numbers}
                className="w-5 h-5 rounded-lg cursor-pointer"
                onChange={charactersHandler}
              />
              <p className="cursor-pointer">Numbers</p>
            </label>
            <label className="flex items-center gap-3 flex-wrap">
              <input
                type="checkbox"
                name="symbols"
                checked={characters.symbols}
                className="w-5 h-5 rounded-lg cursor-pointer"
                onChange={charactersHandler}
              />
              <p className="cursor-pointer">Symbols</p>
            </label>
          </div>
          <div className="mt-8">
            <p>Password length</p>
            <div className="flex items-center mt-2 gap-5 flex-wrap sm:flex-nowrap">
              <input
                type="number"
                name="length"
                className="bg-gray-800 appearance-none outline-0 px-5 h-16 text-white font-thin w-full sm:w-2/12"
                value={characters.length}
                onChange={charactersLengthHandler}
              />
              <div className="w-full h-16 border border-gray-500 px-5">
                <input
                  type="range"
                  name="length"
                  min="5"
                  max="40"
                  className="w-full h-16"
                  value={characters.length}
                  onChange={charactersLengthHandler}
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
