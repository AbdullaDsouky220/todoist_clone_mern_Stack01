import {GoInbox,GoFilter} from 'react-icons/go'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineUpcoming} from 'react-icons/md'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Sidebar.propTypes={
  opened:PropTypes.bool
}
function Sidebar({opened}) {
  return (
    <motion.aside 
    initial={{
      opacity:0,
      x:-100
    }}
    animate={{
      opacity:opened?0:1,
      x:0
    }}
    transition={
      {
        duration:0.15,
        delay:0.452,
        type:'tween'
        
      }
      }
    className={` 
    ${opened?'hidden':'block'} 
    py-4 px-2 border-r-2 
    max-w-fit 
     bg-slate-100/10 min-h-[100vh] 
     flex flex-col gap-2`}>

        <Link to={'/app/project'} className='side_icon '>

        <GoInbox className='text-blue-400 text-xl'/>
        <p>Inbox</p>
        </Link>
      <Link to={'/app/today'} className='side_icon'>
        <BsCalendarDate className='text-blue-400 text-xl'/>
        <p>Today</p>
      </Link>
      <Link to={'/app/upcoming'} className='side_icon '>
        <MdOutlineUpcoming className='text-blue-400 text-xl'/>
        <p>Upcoming</p>
      </Link>
      <Link to={'/app/filters-labels'} className='side_icon '>
        <GoFilter className='text-blue-400 text-xl'/>
        <p>Filters & Labels</p>
      </Link>
      
    </motion.aside>
  )
}

export default Sidebar