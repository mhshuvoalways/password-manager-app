import React from "react";
import styles from "../style";
import User from "../assets/people03.png";
import Trash from "../assets/trash.svg";
import Edit from "../assets/edit.svg";

const ListOfPassword = () => {
  const lists = [
    {
      id: 1,
      img: User,
      website: "youtube.com",
      username: "mlhnshuvo",
      password: "***********",
    },
    {
      id: 2,
      img: User,
      website: "youtube.com",
      username: "mlhnshuvo",
      password: "***********",
    },
    {
      id: 3,
      img: User,
      website: "youtube.com",
      username: "mlhnshuvo",
      password: "***********",
    },
    {
      id: 4,
      img: User,
      website: "youtube.com",
      username: "mlhnshuvo",
      password: "***********",
    },
    {
      id: 5,
      img: User,
      website: "youtube.com",
      username: "mlhnshuvo",
      password: "***********",
    },
    {
      id: 6,
      img: User,
      website: "youtube.com",
      username: "mlhnshuvo",
      password: "***********",
    },
  ];
  return (
    <div
      className={`${styles.paragraph} w-10/12 m-auto py-10 bg-gray-800 mb-20 sm:px-10 px-5 rounded-lg mt-5`}
    >
      <div className="flex justify-between gap-4 items-center border-b pb-5 border-gray-500 flex-wrap sm:flex-nowrap">
        <p className={`text-3xl leading-normal sm:${styles.heading2}`}>
          List of Passwords ({lists.length})
        </p>
        <input
          type="text"
          name="search"
          className="bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white placeholder-white font-thin w-full sm:w-4/12"
          placeholder="Search..."
        />
      </div>
      <label className="flex items-center justify-end gap-3 flex-wrap mt-2">
        <input type="checkbox" className="w-5 h-5 rounded-lg cursor-pointer" />
        <p className="cursor-pointer">Show password</p>
      </label>
      <div className="mt-10 flex gap-5 justify-between flex-wrap">
        {lists.map((el) => (
          <div
            className="flex items-center gap-2 border py-2 px-5 md:w-80 w-full border-gray-500 rounded-lg flex-wrap justify-center sm:justify-between"
            key={el.id}
          >
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-between">
              <div>
                <img src={el.img} className="w-14 h-14 rounded-full" />
              </div>
              <div>
                <p>{el.website}</p>
                <p>{el.username}</p>
                <p>{el.password}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={Trash} className="cursor-pointer w-5" />
              <img src={Edit} className="cursor-pointer w-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfPassword;
