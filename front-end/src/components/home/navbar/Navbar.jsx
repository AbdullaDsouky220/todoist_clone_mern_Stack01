import { useState } from "react";
import logo from "../../../assets/logo.svg";
import DropDown from "./DropDown";
import { motion } from "framer-motion";
import NavbarList from "./NavbarList";
export default function Navbar() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  
  return (
    <div className=" w-full z-50 bg-white sticky top-0 font-inter px-10 py-5 border-b-2 pb-4">
      <div className="flex flex-row  items-center justify-between">
        <img
          src={logo}
          alt="website logo"
          className="h-8 w-fit object-contain"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setToggleDropDown(!toggleDropDown)}
          className="cursor-pointer visible xl:hidden"
        >
          {toggleDropDown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </motion.div>
      <NavbarList/>
      </div>
      <DropDown showDropDown={toggleDropDown} />
    </div>
  );
}
