import Button from '../Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
Form.propTypes={
  state:PropTypes.string,
  children: PropTypes.node,

}
function Form({state}) {
  return (
    <form className='flex flex-col gap-4 border-b- pb-4'>
        <input type='email' className='p-4 rounded focus:outline-none border'placeholder='Enter your Email'/>
        <input type='password' className='p-4 rounded focus:outline-none border'placeholder='Enter your password'/>
        <Button className='p-4 rounded-lg bg-red-400 '>
            {state=='login'?'Login':'Sign up'}
        </Button>
        <Link to='/forget-pass' className='underline'>
            Forget your password?
        </Link>
        <p className='text-sm'>
        By continuing with Google, Apple, or Email, you agree to Todoist’s Terms of Service and 
        <Link to='/privacy' className='underline' >
        Privacy Policy.
        </Link>
        </p>


    </form>
  )
}

export default Form