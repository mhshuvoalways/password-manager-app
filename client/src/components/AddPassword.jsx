import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Context } from "../app/Context";
import Password from "../assets/password.svg";
import styles from "../style";
import Axios from "../utils/axios";

const AddPassword = () => {
  const context = useContext(Context);
  const [password, setPassword] = useState({
    website: "",
    email: "",
    password: "",
    note: "",
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    website: "",
    email: "",
    password: "",
    note: "",
  });
  const [buttonPress, setButtonPress] = useState(false);

  const categoryHandler = (value) => {
    setPassword({
      ...password,
      category: value,
    });
    setPasswordError({
      ...passwordError,
      category: "",
    });
  };

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
          email: "",
          password: "",
          note: "",
          message: "Added successfully",
        });
        setTimeout(() => {
          setPassword({
            website: "",
            email: "",
            password: "",
            note: "",
            message: "",
          });
        }, 3000);
      })
      .catch((err) => {
        setPasswordError({
          email: err.response.data.email,
          website: err.response.data.website,
          password: err.response.data.password,
          note: err.response.data.note,
        });
        setButtonPress(false);
      });
  };

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mt-10 sm:px-10 px-5`}
    >
      <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
        Add Password
      </p>
      <div className="flex gap-5 items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap">
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <div>
            <label className="text-sm">Enter a website URL *</label>
            <input
              type="text"
              name="website"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full mt-1"
              placeholder="facebook.com"
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
            <label className="text-sm">Enter an email *</label>
            <input
              type="text"
              name="email"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full mt-1"
              placeholder="johndoe@gmail.com"
              onChange={onChangeHandler}
              value={password.email}
            />
            <p
              className={
                passwordError.email
                  ? "text-red-400 mt-1 text-sm"
                  : "opacity-0"
              }
            >
              {passwordError.email}
            </p>
          </div>
          <div>
            <label className="text-sm">Enter a password *</label>
            <input
              type="password"
              name="password"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full mt-1"
              placeholder="******"
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
          <div>
            <label className="text-sm">Additional note</label>
            <textarea
              name="note"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full mt-1"
              placeholder="What was your childhood name?"
              onChange={onChangeHandler}
              value={password.note}
            />
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
