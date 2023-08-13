import { footerLinks } from '../../../constants'
import logo from '../../../assets/logo.png'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="justify-between flex flex-col xl:flex-row gap-4  m-auto px-32 xl:px-32">
      <div>
        <img src={logo} className="h-10 mb-4" />
        <p className="font-inter font-semibold text-md max-w-[400px] leading-7">
          Join millions of people who organize work and life with Todoist.
        </p>
      </div>
      <div className='flex flex-col gap-2 xl:flex-row '>

      {footerLinks.map((item, i) => {
          return (
          <div key={i} className='min-w-[30%]'>
            <p className="bg-white font-inter p-2 font-bold text-xl my-4 ">
              {item.category}
            </p>
            {item.subCategories.map((sub, ik) => (
              <p
                key={ik}
                className=" hover:bg-slate-200 
                        cursor-pointer transition rounded text-sm  font-inter px-4 py-2 my-2"
              >
                {sub}
              </p>
            ))}
          </div>
        )
      })}
      <div className='flex flex-row xl:flex-col xl:m-16 m-4 gap-4'>
        <AiOutlineTwitter className='icon' />
        <FaFacebookF className='icon'  />
        <BsYoutube  className='icon' />
        <BsInstagram  className='icon' />
      </div>
            </div>
    </div>
  )
}

export default Footer
