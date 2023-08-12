import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import useParallax from '../../../hooks/useParallax'
import propTypes from 'prop-types'
Image.propTypes = {
  children: propTypes.node,
  data: propTypes.string,
}
export default function Image({ data }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 400)

  return (
    <section className="h-[100vh] 
    bg-blue-400
    flex md:flex-row flex-col
    px-32
    gap-32
     items-center relative ">
         <motion.div
        className="  w-[300px]
        h-[400px] "
        style={{ y }}
      >
        <p className='text-red-400'>{data.title}</p>
      </motion.div>
      <div
        ref={ref}
        className="
        min-w-[300px]
        md:w-[500px]
        p-4
        h-[400px]
        bg-green-400
        relative
        max-h-[40vh] m-20
       
"
      >
        <div className=' flex 
        flex-col
        gap-4'>
        <p className='text-red-500  font-inter text-md font-bold'>{data.title}</p>
        <p className='text-slate-800 min-w-[400px] font-graphic text-4xl   font-bold'>{data.header}</p>
        <p className='text-slate-400 min-w-[400px]  font-inter text-xl   font-semibold leading-8'>{data.paragraph}</p>
</div>
      </div>
     
    </section>
  )
}
