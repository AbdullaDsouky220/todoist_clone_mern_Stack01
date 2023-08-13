import { OffersList, } from '../../../constants'
import {motion} from 'framer-motion'
function RightPart() {
  return (
    <div className=''>
<div className="flex my-8  overflow-x-hidden w-[500px] shadow-gray-300 gap-8 flex-row xl:flex-nowrap items-center justify-center"> 
      {
        OffersList.map((item)=>(
          <motion.div
          initial={{
            x:0,
          }}
          animate={{
            x: [ -1000,1000]
          }}
          transition={{
            repeat: Infinity,
            duration: 20, // Adjust animation duration
            type:"linear",
          }}
          key={item} className="
          flex flex-col items-center
           p-4 font-inter font-semibold cursor-pointer transition gap-16   rounded min-w-[200px]">
            <img src={item.img}
            className='max-w-[200px]' 
    />
    <div className='text-center'>

            <p className='text-xl mb-2 font-bold'>
              {item.amount}
            </p>
            <p className='text-md text-slate-600 font-bold'>
              {item.for}
            </p>
    </div>
          </motion.div>
        ))
      }
            </div>
    </div>
  )
}

export default RightPart