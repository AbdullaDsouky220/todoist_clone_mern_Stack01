import Navbar from "../components/home/navbar/Navbar"
import Hero from "../components/home/herosection/Hero"
import Partner from "../components/home/partner/Partner"
import Parallax from '../components/home/Parallax/Parallax'

const Homepage = () => {
  return (
    <div className="h-[1000vh] ">
        {/* navbar */}
        <Navbar/>
        {/* hero section*/}
        <Hero/>
        {/* partner section */}
        <Partner/>
        {/* clear your mind */}
        <Parallax/>
        {/* progress bar */}
        {/* Expore all todoist  */}
        {/* task mangeer */}
        {/* reviews and download */}
        {/* footer */}
    </div>
  )
}

export default Homepage