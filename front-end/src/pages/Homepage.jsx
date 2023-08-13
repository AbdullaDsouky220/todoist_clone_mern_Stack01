import Navbar from "../components/home/navbar/Navbar"
import Hero from "../components/home/herosection/Hero"
import Partner from "../components/home/partner/Partner"
import Parallax from '../components/home/Parallax/Parallax'
import ProgressBar from "../components/home/progressbar/ProgressBar"
import Offers from "../components/home/offers/Offers"
import TaskManager from "../components/home/TaskManager/TaskManager"
import Download from "../components/home/download/download"
import Footer from "../components/home/footer/footer"
const Homepage = () => {
  return (
    <div className="  relative ">
        {/* navbar */}
        <Navbar/>
        {/* hero section*/}
        <Hero/>
        {/* partner section */}
        <Partner/>
        {/* clear your mind */}
        <Parallax/>
        {/* progress bar */}
        {/* <ProgressBar/> */}
        {/* Expore all todoist  */}
        <Offers/>
        {/* task mangeer */}
        <TaskManager/>
        {/* reviews and download */}
        <Download/>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Homepage