import logo from '../../assets/logo.png';
import login from '../../assets/login.png'
import AuthButton from '../../components/auth/AuthButton';
import  Form  from '../../components/auth/Form';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import bgVideo from '../../assets/signup_bg.mp4'
function SignUpPage() {
    const variants={
        hiddenRight:{
            x:-1000,
            opacity:0
        },
        hiddenLeft:{
            x:-1000,
            opacity:0
        },
        start:{
            x:0,
            opacity:1
        }
    }
  return (
    <div className='px-0 xl:px-16  '>
        <nav className='px-16 xl:px-32 py-8'>
            <img src={logo} className='h-10 '/>
        </nav>
        <div className='flex flex-col items-center gap-8 md:flex-row px-16 xl:px-32 py-8'>
            <motion.div
             initial={variants.hiddenLeft}
             animate={variants.start}
             
            className='flex flex-col gap-7'>
                {/* left part */}
                <p className='text-5xl font-bold'>
                   Sign up 
                </p>
               {/* auth button */}
               <AuthButton/>
               <Form state={'signup'}/>
               <p>
                Already signed up?
                <Link to='/auth/login' className='underline'>
              Go to login
                </Link>
               </p>
            </motion.div>
            <motion.div
            className='min-w-[50%] hidden xl:flex'
            initial={variants.hiddenRight}
            animate={variants.start}
            >
            
            <video  autoPlay loop 
         muted width="600" height="690" 
        poster='https://todoist.b-cdn.net/assets/images/c3fd023a570fc04ad3a60190af32ddd8.png'  >
          <source
            src={bgVideo}
            type="video/mp4"
          />
        </video>
            </motion.div>
        </div>
    </div>
  )
}

export default SignUpPage