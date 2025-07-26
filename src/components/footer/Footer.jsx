import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex justify-between py-[30px] items-baseline max-[790px]:flex-col max-[790px]:gap-[30px]">
            <div className="flex gap-[100px] max-[480px]:flex-col max-[480px]:gap-10">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[24px] font-bold ">Funiro.</h1>
                <p className="text-[#9F9F9F]">
                  400 University Drive Suite 200 Coral <br /> Gables, <br />
                  FL 33134 USA
                </p>
              </div>
              <ul className="flex flex-col gap-[10px] max-[400px]:gap-0">
                <li className="text-[#9F9F9F]">Links</li>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="*">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="*">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-[10px]">
                <li className="text-[#9F9F9F]">Help</li>
                <li>
                  <NavLink to="*">Payment Options</NavLink>
                </li>
                <li>
                  <NavLink to="*">Returns</NavLink>
                </li>
                <li>
                  <NavLink to="*">Privacy Policies</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[10px] max-[790px]:mt-[30px]">
              <p className="text-[#9F9F9F]">Newsletter</p>
              <div className="flex gap-2 items-center">
                <input
                  className="border-1 border-[#0000] border-b-gray-500 outline-none"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <button className="border-1 border-[#0000] border-b-gray-500 font-medium cursor-pointer">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container  border-1 border-[#0000] border-t-[#D9D9D9] py-[15px]">
          <p className="text-[16px]">2023 furniro. All rights reverved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
