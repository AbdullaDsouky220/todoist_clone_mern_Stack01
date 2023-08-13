import logo from '../../assets/logo.png';
import login from '../../assets/login.png'
import AuthButton from '../../components/auth/AuthButton';
import  Form  from '../../components/auth/Form';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function LoginPage() {
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
    <div className=' '>
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
                    log in
                </p>
               {/* auth button */}
               <AuthButton/>
               <Form state={'login'}/>

               <p>
                Don&apos;t Have an account?
                <Link to='/auth/signup' className='underline'>
                Sign up
                </Link>
               </p>
            </motion.div>
            <motion.div
            initial={variants.hiddenRight}
            animate={variants.start}
            >
            
                <img src={login} className='hidden xl:flex'/>
                {/* right part */}
            </motion.div>
        </div>
    </div>
  )
}

export default LoginPage