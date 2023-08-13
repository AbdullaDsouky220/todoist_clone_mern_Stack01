import { motion,  } from 'framer-motion'
import { useRef } from 'react'
import propTypes from 'prop-types'
Image.propTypes = {
  children: propTypes.node,
  data: propTypes.string,
}
export default function Image({ data }) {
  const ref = useRef(null)
  
  return (
    <section className="h-[70vh] 
    flex md:flex-row flex-col
    px-32
    max-w-[600px]
     items-center relative ">
         <motion.div
        className="h-[50vh]
    flex items-center"
      >
        <img src={data.img}
        className='max-h-[400px] 
         min-w-[350px] object-cover rounded-md'
        alt={data.title}/>
      </motion.div>
      <div
        ref={ref}
        className="
        min-w-[300px]
        md:w-[500px]
        p-4
        h-[400px]
        relative
        min-h-[40vh] m-20
       
"
      >
        <motion.div className=' flex 
        flex-col
  
        gap-4'
        
        >
        <p className='text-red-500  font-inter text-md font-bold'>{data.title}</p>
        <p className='text-slate-800 min-w-[400px] font-graphic text-4xl   font-bold'>{data.header}</p>
        <p className='text-slate-400 min-w-[400px]  font-inter text-xl   font-semibold leading-8'>{data.paragraph}</p>
</motion.div>
      </div>
     
    </section>
  )
}
