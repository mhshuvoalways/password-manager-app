import React, { useState, useContext } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Axios from "../utils/axios";
import setAuthToken from "../utils/setAuthToken";
import LoginSignTop from "./LoginSignTop";
import styles from "../style";
import { Context } from "../app/Context";

const Login = () => {
  const context = useContext(Context);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    email: "",
    password: "",
    message: "",
  });

  const [buttonPress, setButtonPress] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onChangeHandler = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });

    setLoginError({
      ...loginError,
      [e.target.name]: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setButtonPress(true);
    Axios.post("/user/login", login)
      .then((response) => {
        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        context.isAuthenticateHandler();
        setButtonPress(false);
        navigate(from);
      })
      .catch((err) => {
        setLoginError({
          fullName: err.response.data.fullName,
          email: err.response.data.email,
          password: err.response.data.password,
          message: err.response.data.message,
        });
        setButtonPress(false);
      });
  };

  if (context.user.isAuthenticate) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-5/12 m-auto bg-black-gradient-2 rounded-[20px] box-shadow pt-10 pb-20 my-20 sm:px-10 px-5`}
    >
      <LoginSignTop />
      <form className="space-y-5" onSubmit={onSubmitHandler}>
        <div>
          <input
            type="email"
            name="email"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
            placeholder="Enter Your Email"
            onChange={onChangeHandler}
          />
          <p
            className={
              loginError.email ? "text-red-400 mt-1 text-sm" : "opacity-0"
            }
          >
            {loginError.email}
          </p>
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
            placeholder="Enter Your Password"
            onChange={onChangeHandler}
          />
          <p
            className={
              loginError.password ? "text-red-400 mt-1 text-sm" : "opacity-0"
            }
          >
            {loginError.password}
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-6 font-poppins text-primary bg-blue-gradient rounded-[10px] ${
            buttonPress && "opacity-50 cursor-not-allowed"
          }`}
        >
          Submit
        </motion.button>
        <p
          className={
            loginError.message
              ? "text-red-400 mt-1 text-sm text-center"
              : "opacity-0"
          }
        >
          {loginError.message}
        </p>
      </form>
    </div>
  );
};

export default Login;
