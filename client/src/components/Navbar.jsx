import { useState, useContext, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { Context } from "../app/Context";

const Navbar = () => {
  const context = useContext(Context);
  const [newNavLinks, setNewNavLinks] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    context.isAuthenticateHandler();
  }, []);

  useEffect(() => {
    if (context.user.isAuthenticate) {
      const newArr = navLinks.filter((el) => el.title !== "Login");
      setNewNavLinks(newArr);
    } else {
      const newArr2 = navLinks.filter(
        (el) =>
          el.title !== "Logout" &&
          el.title !== "Generator" &&
          el.title !== "Manager"
      );
      setNewNavLinks(newArr2);
    }
  }, [context.user.isAuthenticate]);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <NavLink to="/">
        <img
          src={logo}
          alt="passwordvault"
          className="w-[300px] h-[300px] mt-[-100px]"
        />
      </NavLink>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {newNavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
              index === newNavLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={nav.title === "Logout" && context.logoutHandler}
          >
            <NavLink
              to={`${nav.id}`}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-dimWhite"
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mt-[-150px] ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col ">
            {newNavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-secondary ${
                  index === newNavLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={nav.title === "Logout" && context.logoutHandler}
              >
                <NavLink
                  to={`${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-dimWhite"
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
