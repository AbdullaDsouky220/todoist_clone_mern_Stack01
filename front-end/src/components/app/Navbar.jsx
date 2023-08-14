import {RxHamburgerMenu } from 'react-icons/rx'
import {HiHome } from 'react-icons/hi'
import Button from '../Button'
import {AiOutlinePlus ,AiOutlineUser} from 'react-icons/ai'
import {FaSearch } from 'react-icons/fa'
import {IoIosNotifications } from 'react-icons/io'
import PropsTypes from 'prop-types'
Navbar.propTypes={
    ToggleSideBar:PropsTypes.any
}
function Navbar({ToggleSideBar}) {
  return (
    <div className='bg-blue-400'>
        <div className='flex bg-red-400 items-center justify-between p-3 gap-16'>

        <div className='flex gap-4 space-x-4'>
            <Button onClick={()=>ToggleSideBar(current=>!current)}
            className=' p-1 rounded-lg  text-white hover:bg-white/30 hover:shadow-lg transition '>
            <RxHamburgerMenu className='text-2xl cursor-pointer rounded'/>
            </Button>
            <Button className=' p-1 rounded-lg  text-white hover:bg-white/30 hover:shadow-lg transition '>
            <HiHome className='text-2xl cursor-pointer'/>
            </Button>
        </div>
        <div className='flex items-center'>
            <input type='search'
            className='
              pr-16 
              placeholder:text-white
              placeholder:hover:text-slate-400
             pl-8 rounded p-1
             min-w-[100px]
            xl:min-w-[800px]
             transition
             bg-white/30
              focus:outline-none
               focus:xl:min-w-[1000px] 
               focus:min-w-[150%] 
               focus:bg-white
                hover:bg-white
                '
               
            placeholder={' Search'} />
            <div className="inline-block text-white  -ml-[40px]">
        <FaSearch />
      </div>
        </div>
        <div className='space-x-4'>
        <Button className=' p-1 rounded-lg  text-white hover:bg-white/30 hover:shadow-lg transition '>
            <AiOutlinePlus className='text-2xl'/>
            </Button>
        <Button className=' p-1 rounded-lg  text-white hover:bg-white/30 hover:shadow-lg transition '>
            <IoIosNotifications className='text-2xl'/>
            </Button>
        <Button className=' p-1 rounded-full  text-white hover:bg-white/30 hover:shadow-lg transition '>
            <AiOutlineUser className='text-2xl'/>
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Navbar