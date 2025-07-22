import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/productsBranch/headerlogo.svg";
import { headerList } from "../../static";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header w-full sticky top-0 left-0 bg-white z-50">
      <nav className="container flex justify-between items-center py-[20px] relative">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        {/* Burger menu button (mobile only) */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer min-[900px]:hidden focus:outline-none z-50"
          aria-label="Open menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[10px]" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
          ></span>
        </button>
        <ul className="flex justify-between items-center gap-[50px] max-[900px]:hidden">
          {headerList?.map(({ id, link, to }) => (
            <NavLink
              key={id}
              to={to}
              className="text-black font-medium duration-200 hover:cursor-pointer hover:underline"
            >
              {link}
            </NavLink>
          ))}
        </ul>
        <ul className="flex justify-between items-center gap-[50px] max-[900px]:hidden">
          <NavLink to="#">
            <FaRegUser className="size-5" />
          </NavLink>
          <NavLink to="#">
            <MdOutlineSearch className="size-6" />
          </NavLink>
          <NavLink to="#">
            <FaRegHeart className="size-5" />
          </NavLink>
          <NavLink to="#">
            <AiOutlineShoppingCart className="size-6" />
          </NavLink>
        </ul>
        {/* Mobile dropdown menu with animation */}
        <div
          className={`absolute top-[70px] left-0 w-full min-[900px]:hidden z-40 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="bg-white shadow-lg flex flex-col items-center gap-6 py-6">
            <ul className="flex flex-col items-center gap-4 w-full">
              {headerList?.map(({ id, link, to }) => (
                <NavLink
                  key={id}
                  to={to}
                  className="text-black font-medium duration-200 hover:cursor-pointer hover:underline w-full text-center py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </NavLink>
              ))}
            </ul>
            <ul className="flex justify-center items-center gap-8 w-full">
              <NavLink to="#">
                <FaRegUser className="size-5" />
              </NavLink>
              <NavLink to="#">
                <MdOutlineSearch className="size-6" />
              </NavLink>
              <NavLink to="#">
                <FaRegHeart className="size-5" />
              </NavLink>
              <NavLink to="#">
                <AiOutlineShoppingCart className="size-6" />
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
