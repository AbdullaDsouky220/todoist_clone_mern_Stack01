import { motion } from "framer-motion";
import { useState } from "react";

function DropDown({ showDropDown }) {
  const dropDownElement = [
    "Features",
    "Templates",
    "For Teams",
    "Resources",
    "Pricing",
  ];
  const resourceDropDown = [
    "Integration",
    "Getting Started Guide",
    "Help Center",
    "Productivity Methods +Quiz",
    "Inspiration Hub",
  ];
  const svgList = {
    arrowUp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    ),
    arrowDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    ),
  };
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const [showSubList, setShowSubList] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`  ${showDropDown ? "visble" : "hidden"}`}
    >
      <ul className="mt-4   flex flex-col gap-4 pl-2 md:pl-32 pb-6">
        {dropDownElement.map((ele, index) => {
          if (ele === "Resources") {
            return (
              <div key={index}>
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowSubList(!showSubList)}
                  className=" flex justify-between sflex-row font-semibold
                       hover:bg-neutral-200 
                        p-4 rounded-md transition hover:text-slate-600 
                       cursor-pointer text-md w-full"
                >
                  <span className="flex ">{ele}</span>
                  <span className="flex">
                    {showSubList ? svgList.arrowUp : svgList.arrowDown}
                  </span>
                </motion.div>
                {showSubList && (
                  <motion.ul className="px-8">
                    {resourceDropDown.map((subEle, index) => {
                      return (
                        <motion.div
                          whileTap={{ scale: 0.92 }}
                          className=" font-semibold
                          hover:bg-neutral-200 
                          p-4 rounded-md transition hover:text-slate-600 
                          cursor-pointer text-md w-full"
                          key={index}
                        >
                          {subEle}
                        </motion.div>
                      );
                    })}
                  </motion.ul>
                )}
              </div>
            );
          }
          return (
            <motion.div
              whileTap={{ scale: 0.92 }}
              className="
                    font-semibold
                     hover:bg-neutral-200 
                      p-4 rounded-md transition hover:text-slate-600 
                     cursor-pointer text-md w-full"
              key={index}
            >
              {ele}
            </motion.div>
          );
        })}
      </ul>
      <hr className="w-[70%] text-center self-center m-auto" />
      <div className="mt-4 flex py-2  flex-row gap-4 pl-2 md:pl-24 ">
        <motion.button
          whileTap={{ scale: 0.92 }}
          className="p-3 px-6 w-[50%] text-slate-600 font-bold rounded bg-neutral-200 transition hover:bg-neutral-300 duration-75"
        >
          log in
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.92 }}
          button
          className="p-3 px-6  w-[50%] font-bold rounded bg-red-600/80 hover:bg-red-700 transition duration-75 text-white"
        >
          Start for free
        </motion.button>
      </div>
    </motion.div>
  );
}

export default DropDown;
