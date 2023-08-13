// Photos from https://citizenofnowhe.re/lines-of-the-city
import {
  motion,
  useScroll,
  useSpring,
} from 'framer-motion'
import Image from './Image'
import { clearYourMind } from '../../../constants/index'

export default function Parallax() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {

    stiffness: 100,
    damping: 300,
    restDelta: 0.001,
  })

  return (
    <div className=" md:px-4 px-28">
        
      {clearYourMind.map((item, i) => (
        <div
          key={i}
        >
          <Image className="h-10 w-10/12" data={item} />
        </div>
      ))}
      <motion.div
        className="fixed left-0 right-0 h-3 bg-teal-300 bottom-10"
        style={{ scaleX }}
      />
    </div>
  )
}
