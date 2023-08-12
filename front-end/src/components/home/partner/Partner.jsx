import { motion } from "framer-motion";
import {
  netflix,
  amazon,
  adobe,
  microsoft,
  sales,
  disney,
} from "../../../assets/index";
import { useEffect, useState } from "react";

const partnersList = [
  {
    name: "microsoft",
    path: microsoft,
  },
  {
    name: "disney",
    path: disney,
  },
  {
    name: "amazon",
    path: amazon,
  },
  {
    name: "netflix",
    path: netflix,
  },
  {
    name: "sales",
    path: sales,
  },
  {
    name: "adobe",
    path: adobe,
  },
];
function Partner() {
    const [animation,setAnimation]=useState(window.innerWidth)

    useEffect(()=>{
        const handleResize=()=>{
                setAnimation(innerWidth)
        }
    window.addEventListener('resize',handleResize)
    return( )=>{
        window.removeEventListener('resize',handleResize)

    }
    
    },[animation])

  return (
    <div
    
      className="flex flex-col overflow-hidden gap-8 xl:gap-16 items-center p-8 m-auto   "
    >
      <p className="text-2xl text-center max-w-[650px] font-semibold">
        30 million+ people and teams trust their sanity and productivity to
        Todoist
      </p>
      <motion.div 
      animate={{
        transform: ` ${animation<=750?"translateX(-100%)":"translateX(0)"}`,
      }}
      transition={{
        repeat: Infinity,
        duration: 25, // Adjust animation duration
        type:"linear",
      }}
      className="flex flex-row gap-8 xl:gap-16 items-center p-8 m-auto   ">
        {partnersList.map((partner, index) => {
          return (
            <div key={index} className="">
              <img
                src={partner.path}
                className=" min-h-[50px]   min-w-[80px]   filter  grayscale fill-current text-red-400"
                alt={partner.name}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Partner;
5