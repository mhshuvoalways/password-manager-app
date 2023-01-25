import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Axios from "../utils/axios";
import styles from "../style";
import Password from "../assets/password.svg";
import { Context } from "../app/Context";

const AddPassword = () => {
  const context = useContext(Context);
  const [password, setPassword] = useState({
    website: "",
    username: "",
    password: "",
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    website: "",
    username: "",
    password: "",
  });
  const [buttonPress, setButtonPress] = useState(false);

  const onChangeHandler = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
    setPasswordError({
      ...passwordError,
      [e.target.name]: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setButtonPress(true);
    Axios.post("/password/add", password)
      .then((response) => {
        context.addPassHandler(response.data);
        setButtonPress(false);
        setPassword({
          website: "",
          username: "",
          password: "",
          message: "Added successfully",
        });
        setTimeout(() => {
          setPassword({
            message: "",
          });
        }, 3000);
      })
      .catch((err) => {
        setPasswordError({
          website: err.response.data.website,
          username: err.response.data.username,
          password: err.response.data.password,
        });
        setButtonPress(false);
      });
  };

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-gray-800 mt-10 sm:px-10 px-5 rounded-lg`}
    >
      <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
        Add Password
      </p>
      <div className="flex gap-5 items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap">
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <div>
            <input
              type="text"
              name="website"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
              placeholder="Enter Website"
              onChange={onChangeHandler}
              value={password.website}
            />
            <p
              className={
                passwordError.website
                  ? "text-red-400 mt-1 text-sm"
                  : "opacity-0"
              }
            >
              {passwordError.website}
            </p>
          </div>
          <div>
            <input
              type="text"
              name="username"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
              placeholder="Enter Username"
              onChange={onChangeHandler}
              value={password.username}
            />
            <p
              className={
                passwordError.username
                  ? "text-red-400 mt-1 text-sm"
                  : "opacity-0"
              }
            >
              {passwordError.username}
            </p>
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full"
              placeholder="Enter Password"
              onChange={onChangeHandler}
              value={password.password}
            />
            <p
              className={
                passwordError.password
                  ? "text-red-400 mt-1 text-sm"
                  : "opacity-0"
              }
            >
              {passwordError.password}
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px] ${
              buttonPress && "opacity-50 cursor-not-allowed"
            }`}
          >
            Add
          </motion.button>
          <p
            className={
              password.message ? "text-green-600 text-center" : "opacity-0"
            }
          >
            {password.message}
          </p>
        </form>
        <img src={Password} className="w-full sm:w-6/12" />
      </div>
    </div>
  );
};

export default AddPassword;
