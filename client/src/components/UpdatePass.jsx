import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../app/Context";
import ModalClose from "../assets/close.svg";
import styles from "../style";
import Axios from "../utils/axios";
import ListboxComponent from "./ListBox";

const UpdatePassword = ({ modalHandler, updateId }) => {
  const context = useContext(Context);
  const [password, setPassword] = useState({
    website: "",
    category: "",
    password: "",
    note: "",
  });
  const [passwordError, setPasswordError] = useState({
    website: "",
    category: "",
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
    Axios.put("/password/update/" + updateId, password)
      .then((response) => {
        context.updatePassHandler(response.data);
        setButtonPress(false);
        modalHandler();
      })
      .catch((err) => {
        setPasswordError({
          website: err.response.data.website,
          category: err.response.data.category,
          password: err.response.data.password,
          note: err.response.data.note,
        });
        setButtonPress(false);
      });
  };

  useEffect(() => {
    const findPass = context.listPassword.find((el) => el._id === updateId);
    setPassword({
      website: findPass.website,
      category: findPass.category,
      password: findPass.password,
      note: findPass.note,
    });
  }, []);

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mt-10 sm:px-10 px-5`}
    >
      <div className="flex justify-between">
        <p className={`text-2xl leading-normal`}>Update Password</p>
        <img
          src={ModalClose}
          alt=""
          className="cursor-pointer hover:bg-gray-600 transition rounded-full p-2 w-8 h-8"
          onClick={modalHandler}
        />
      </div>
      <form className="space-y-5 mt-5" onSubmit={onSubmitHandler}>
        <div>
          <label className="text-sm">Select a category *</label>
          <div className="mt-1">
            <ListboxComponent
              value={password.category}
              categoryHandler={categoryHandler}
            />
          </div>
          <p
            className={
              passwordError.category ? "text-red-400 mt-1 text-sm" : "opacity-0"
            }
          >
            {passwordError.category}
          </p>
        </div>
        <div>
          <label className="text-sm">Enter a name *</label>
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
              passwordError.website ? "text-red-400 mt-1 text-sm" : "opacity-0"
            }
          >
            {passwordError.website}
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
              passwordError.password ? "text-red-400 mt-1 text-sm" : "opacity-0"
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
          Save
        </motion.button>
      </form>
    </div>
  );
};

export default UpdatePassword;
