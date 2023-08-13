import Button from '../Button';
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
function AuthButton() {
  return (
    <div className=' mt-4 flex  flex-col gap-4 '>
    <Button className='auth_button bg-white hover:bg-slate-100'>
       <FcGoogle className='text-2xl'/> Continue with Google
    </Button>
    <Button className='auth_button bg-white hover:bg-slate-100'>
       <FaGithub className='text-2xl'/> Continue with Github
    </Button>
    <Button className='auth_button bg-white hover:bg-slate-100'>
       <AiFillApple className='text-2xl'/> Continue with Apple
    </Button>
    </div>
  )
}

export default AuthButton