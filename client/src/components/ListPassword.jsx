import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import styles from "../style";
import Trash from "../assets/trash.svg";
import Edit from "../assets/edit.svg";
import { Context } from "../app/Context";
import Axios from "../utils/axios";

const ListOfPassword = ({ modalHandler }) => {
  const context = useContext(Context);
  const [buttonPress, setButtonPress] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [search, setSearch] = useState("");

  const deleteHandler = (deleteId) => {
    setButtonPress(true);
    Axios.delete("/password/delete/" + deleteId)
      .then(() => {
        context.deletePassHandler(deleteId);
        setButtonPress(false);
      })
      .catch((err) => {
        console.log(err.response);
        setButtonPress(false);
      });
  };

  const showpassHandler = (event) => {
    setShowPass(!showPass);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    context.getPassLists();
  }, []);

  const reverseArr = [...context.listPassword]
    .reverse()
    .filter((el) => el.website.toLowerCase().includes(search.toLowerCase()));

  return (
    <div
      className={`${styles.paragraph} w-10/12 m-auto py-10 bg-gray-800 mb-20 sm:px-10 px-5 rounded-lg mt-5`}
    >
      <div className="flex justify-between gap-4 items-center border-b pb-5 border-gray-500 flex-wrap sm:flex-nowrap">
        <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
          List of Passwords ({context.listPassword.length})
        </p>
        <input
          type="text"
          name="search"
          className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full sm:w-4/12"
          placeholder="Search..."
          onChange={searchHandler}
        />
      </div>
      <label className="flex items-center justify-end gap-3 flex-wrap mt-2">
        <input
          type="checkbox"
          checked={showPass}
          className="w-5 h-5 rounded-lg cursor-pointer"
          onChange={showpassHandler}
        />
        <p className="cursor-pointer">Show password</p>
      </label>
      <div className="mt-10 flex gap-5 justify-between flex-wrap">
        {reverseArr.map((el) => (
          <div
            className="flex items-center gap-2 border py-2 px-5 md:w-80 w-full border-gray-500 rounded-lg flex-wrap justify-center sm:justify-between"
            key={el._id}
          >
            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap justify-center sm:justify-between">
              <div>
                <SocialIcon
                  url={`https://${el.website}`}
                  className="w-14 h-14 rounded-full border bg-gray-300"
                />
              </div>
              <div>
                <p>{el.website}</p>
                <p>{el.username}</p>
                <p>{showPass ? el.password : "********"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.img
                whileTap={{ scale: 0.95 }}
                src={Trash}
                className={`cursor-pointer w-5 ${
                  buttonPress && "opacity-50 cursor-not-allowed"
                }`}
                onClick={() => deleteHandler(el._id)}
              />
              <motion.img
                whileTap={{ scale: 0.95 }}
                src={Edit}
                className="cursor-pointer w-5"
                onClick={() => modalHandler(el._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfPassword;
