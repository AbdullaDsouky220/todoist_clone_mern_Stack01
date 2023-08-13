import { partnersList } from '../../../constants'
import {motion} from 'framer-motion'
function RightPart() {
  return (
    <div className=''>
<div className="flex my-8  overflow-x-hidden w-[500px] shadow-gray-300 gap-8 flex-row xl:flex-nowrap items-center justify-center"> 
      {
        partnersList.map((item)=>(
          <motion.div
          initial={{
            x:0
          }}
          animate={{
            x:0
          }}
          transition={{
            repeat: Infinity,
            duration: 20, // Adjust animation duration
            type:"linear",
          }}
          key={item} className="flex flex-col items-center p-4 font-inter font-semibold shadow hover:shadow-xl cursor-pointer transition gap-16 border  rounded min-w-[200px]">
            <img src={item.path} className="='h-10 w-10"/>
            <p>
              {item.name}
            </p>
          </motion.div>
        ))
      }
            </div>
    </div>
  )
}

export default RightPart