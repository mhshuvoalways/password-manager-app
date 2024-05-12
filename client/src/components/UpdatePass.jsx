import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Axios from "../utils/axios";
import styles from "../style";
import { Context } from "../app/Context";
import ModalClose from "../assets/close.svg";

const UpdatePassword = ({ modalHandler, updateId }) => {
  const context = useContext(Context);
  const [password, setPassword] = useState({
    website: "",
    username: "",
    password: "",
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
    Axios.put("/password/update/" + updateId, password)
      .then((response) => {
        context.updatePassHandler(response.data);
        setButtonPress(false);
        modalHandler();
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

  useEffect(() => {
    const findPass = context.listPassword.find((el) => el._id === updateId);
    setPassword({
      website: findPass.website,
      username: findPass.username,
      password: findPass.password,
    });
  }, []);

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mt-10 sm:px-10 px-5`}
    >
      <div className="flex justify-between">
        <p className={`text-2xl leading-normal`}>
          Update Password
        </p>
        <img
          src={ModalClose}
          alt=""
          className="cursor-pointer"
          onClick={modalHandler}
        />
      </div>
      <form className="space-y-5 mt-5" onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            name="website"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
            placeholder="Enter Website"
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
          <input
            type="text"
            name="username"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
            placeholder="Enter Username"
            onChange={onChangeHandler}
            value={password.username}
          />
          <p
            className={
              passwordError.username ? "text-red-400 mt-1 text-sm" : "opacity-0"
            }
          >
            {passwordError.username}
          </p>
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
            placeholder="Enter Password"
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
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px] ${
            buttonPress && "opacity-50 cursor-not-allowed"
          }`}
        >
          Update
        </motion.button>
      </form>
    </div>
  );
};

export default UpdatePassword;
