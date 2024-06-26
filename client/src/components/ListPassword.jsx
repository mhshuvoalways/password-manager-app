import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Context } from "../app/Context";
import Edit from "../assets/edit.svg";
import Trash from "../assets/trash.svg";
import styles from "../style";
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
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mb-20 sm:px-10 px-5 mt-5`}
    >
      <div className="flex justify-between gap-4 items-center border-b pb-5 border-gray-500 flex-wrap sm:flex-nowrap">
        <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
          List of Passwords ({context.listPassword.length})
        </p>
        <input
          type="text"
          name="search"
          className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full sm:w-4/12"
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
        {reverseArr.map((el) => (
          <div
            className="flex items-center gap-2 border py-3 px-5 w-full border-gray-500 rounded-lg flex-wrap justify-center sm:justify-between"
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
                <p className="text-sm sm:text-xl break-all">{el.website}</p>
                <p className="text-sm sm:text-xl break-all">{el.username}</p>
                <p className="text-sm sm:text-xl break-all">
                  {showPass ? el.password : "********"}
                </p>
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
