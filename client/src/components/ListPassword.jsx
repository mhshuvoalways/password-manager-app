import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Context } from "../app/Context";
import Edit from "../assets/edit.svg";
import Trash from "../assets/trash.svg";
import styles from "../style";
import Axios from "../utils/axios";
import ListNote from "./ListNote";
import Pagination from "./Pagination";

const itemsEachPage = 8;

const ListOfPassword = ({ modalHandler }) => {
  const context = useContext(Context);
  const [buttonPress, setButtonPress] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [searchWebsite, setSearchWebsite] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

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

  const showpassHandler = () => {
    setShowPass(!showPass);
  };

  const filteredArray = [...context.listPassword]
    .reverse()
    .filter((el) =>
      el?.website.toLowerCase().includes(searchWebsite?.toLowerCase())
    )
    .filter((el) =>
      el?.email.toLowerCase().includes(searchEmail?.toLowerCase())
    );

  useEffect(() => {
    setTotalPage(Math.ceil(filteredArray.length / itemsEachPage));
  }, [filteredArray.length]);

  const pageHandler = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  };

  const startIdx = (currentPage - 1) * itemsEachPage;
  const endIdx = startIdx + itemsEachPage;
  const currentCategories = filteredArray.slice(startIdx, endIdx);

  useEffect(() => {
    context.getPassLists();
  }, []);

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow mb-20 sm:px-10 px-5 mt-5`}
    >
      <div className="border-b pb-5 border-gray-700">
        <div className="flex justify-between gap-5 sm:gap-10 items-center flex-wrap md:flex-nowrap">
          <p
            className={`text-3xl leading-normal whitespace-nowrap sm:${styles.heading2}`}
          >
            Passwords ({context.listPassword.length})
          </p>
          <div className="flex items-center gap-x-5 gap-y-2 w-full flex-wrap sm:flex-nowrap">
            <input
              type="text"
              name="search"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
              placeholder="Search with url..."
              onChange={(e) => setSearchWebsite(e.target.value)}
            />
            <input
              type="text"
              name="search"
              className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white font-thin w-full"
              placeholder="Search with email..."
              onChange={(e) => setSearchEmail(e.target.value)}
            />
          </div>
        </div>
        <label className="flex items-center justify-start md:justify-end gap-3 flex-wrap mt-2">
          <input
            type="checkbox"
            checked={showPass}
            className="w-5 h-5 rounded-lg cursor-pointer"
            onChange={showpassHandler}
          />
          <p className="cursor-pointer">Show password</p>
        </label>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {currentCategories.map((el) => (
          <div
            className="flex items-start gap-2 border py-3 px-5 border-gray-700 rounded-lg justify-between overflow-x-hidden overflow-y-auto h-36 shadow"
            key={el._id}
          >
            <div className="flex gap-3 w-10/12">
              <div>
                <SocialIcon url={`https://${el.website}`} />
              </div>
              <div>
                <p className="break-all">{el.website}</p>
                <p className="text-gray-300 text-sm break-all">{el.email}</p>
                <p className="text-gray-300 text-sm break-all">
                  {showPass ? el.password : "********"}
                </p>
                <ListNote note={el.note} />
              </div>
            </div>
            <div className="flex items-center w-2/12">
              <motion.img
                whileTap={{ scale: 0.95 }}
                src={Trash}
                className={`cursor-pointer w-7 transition-all hover:bg-gray-700 p-1 rounded-full ${
                  buttonPress && "opacity-50 cursor-not-allowed"
                }`}
                onClick={() => deleteHandler(el._id)}
              />
              <motion.img
                whileTap={{ scale: 0.95 }}
                src={Edit}
                className="cursor-pointer w-7 transition-all hover:bg-gray-700 p-1 rounded-full"
                onClick={() => modalHandler(el._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        pageHandler={pageHandler}
      />
    </div>
  );
};

export default ListOfPassword;
