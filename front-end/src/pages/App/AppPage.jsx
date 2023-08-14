import { useState } from "react"
import Navbar from "../../components/app/Navbar"
import Sidebar from "../../components/app/Sidebar"
import { Outlet } from "react-router"
function AppPage() {
    const [isOpened,setISOpened]=useState(true)
  return (
    <div>
        {/* navbar */}
        <Navbar ToggleSideBar={setISOpened}/>
        {/* toggel side bar  */}
        <div className="flex flex-row">

        <Sidebar opened={isOpened}/>
        {/* main section */}
        <Outlet/>
        </div>
    </div>
  )
}

export default AppPage