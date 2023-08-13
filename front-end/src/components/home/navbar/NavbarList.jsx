
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const NavbarList = () => {
    const ListItems = [
        "Features",
        "Templates",
        "For Teams",
        "Resources",
        "Pricing",
      ];
  return (
    <div className='hidden xl:flex'>
        <ul className="flex gap-3 ">
            {
               ListItems.map((item,index)=>{
                return (
                    <motion.li 
                    whileTap={{
                        scale:0.9
                    }}
                    transition={{
                        duation:1
                    }}
                    key={index} className="font-semibold cursor-pointer hover:bg-slate-300 p-2 rounded">
                        {item}
                    </motion.li>
                )
               })
            }
            <div className=" flex  border-l-2 flex-row gap-4 pl-4  ">
        <motion.button
          whileTap={{ scale: 0.92 }}
          
          className=" px-4 text-slate-600 font-bold rounded bg-neutral-200 transition hover:bg-neutral-300 duration-75"
        >
          <Link to='/auth/login'>
          log in

          </Link>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.92 }}
          button
          className="px-4 font-bold rounded bg-red-600/80 hover:bg-red-700 transition duration-75 text-white"
        >
          Start for free
        </motion.button>
      </div>
        </ul>
    </div>
  )
}

export default NavbarList