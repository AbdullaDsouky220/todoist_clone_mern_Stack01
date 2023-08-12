import Button from "../../Button";
import bgVideo from "../../../assets/background-video-mobile.mp4"
import heroMobile from "../../../assets/hero-mobile.webp";
import heroPc from "../../../assets/hero-pc.webp";
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from "react";


const Hero = () => {
    const controls=useAnimation()
  

    const handleScroll = () => {
      const yScroll = -window.scrollY;
      controls.start({ y: yScroll ,ease: 'easeOut'});
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className="flex pt-16 overflow-hidden font-inter   items-center text-center justify-center flex-col">
      <div className="flex flex-col px-16  gap-8 max-w-[750px]">
        <p className="text-6xl   font-bold ">
          Organize your work and life, finally.
        </p>
        <p className="text-2xl text-slate-500">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </p>
        <Button bg={"red"} className={"p-4 px-8 m-auto w-fit rounded-lg"}>
          Start for free
        </Button>
      </div>
      <div className="mt-4 flex  relative w-full-300" >
        <img
          src={heroMobile}
          className="h-[500px] 
          xl:hidden flex
          object-cover left-[35%] top-[20px] absolute m-auto"
          alt="hero image in the hero section"
        />
        <motion.img
          src={heroPc}
          initial={{ y: '10%' }}
          animate={controls}
          transition={{
            duration: 0.88, // Adjust animation duration
            type:"linear",
          }}
          className="h-[700px] 
          xl:flex hidden
          object-cover left-[10%] top-[700px] absolute m-auto"
          alt="hero image in the hero section"
        />
        <video  autoPlay loop 
         muted width="1500" height="690" 
        poster="https://res.cloudinary.com/imagist/video/fetch/f_png/q_auto/so_0/https://todoist.com/static/home-teams/intro/background-video.mp4?_a=BATARNcY0"  >
          <source
            src={bgVideo}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
