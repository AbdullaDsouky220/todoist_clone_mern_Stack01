import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [stikyState,setStickyState]=useState(false)
    const controls=useAnimation()
  
    
    useEffect(() => {
        const handleScroll = () => {
              const yScroll = window.scrollY;
              controls.start({ y: yScroll ,ease: 'easeOut'});
              if (yScroll>=2550 && yScroll<=2750)
              {
                  console.log('this is the entry point',yScroll);
                  setStickyState(true)
             } 
                else if(yScroll<=3050 && yScroll>=2750)
                {
                  console.log('this is the end point',yScroll);
                  setStickyState(false)
              }
            };
        window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [controls]);
  return (
    <div className={`${stikyState?'sticky bg-red-500':'mt-16 bg-blue-300'}  top-[100px] h-[100vh]`}>
      <p className="text-[2.6rem] font-bold leading-[3rem] text-slate-700 max-w-[700px] text-center m-auto">
        “Todoist makes it easy to go as simple or as complex as you want”
      </p>
      <p className="text-3xl mt-8 font-bold leading-[3rem] text-slate-700 max-w-[600px] text-center m-auto">
        – The Verge
      </p>
      <progress 
      className="w-12 h-2"
      onScrollCapture={true}>
        ff
      </progress>
    </div>
  )
}

export default ProgressBar
