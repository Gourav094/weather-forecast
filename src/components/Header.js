import React, { useContext, useRef } from 'react'
import UserContext from './UserContext'
import logo from "../assets/logo.png"
import { MAP_API_KEY } from '../utils/Constant'

const Header = () => {
  const query = useRef(null)
  const { handleSubmit } = useContext(UserContext)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(query?.current?.value)
  }


  return (
    <div className='flex items-center justify-between py-6 px-2 md:px-10 text-white'>
      <div className='flex items-center gap-2 font-semibold tracking-wide'>
        {/* <i className="fa-solid fa-cloud text-3xl"></i> */}
        <img className='w-10' src={logo} alt='logo' />
        <p className='pt-1'>Wheather</p>
      </div>
      <form className='w-1/3' onSubmit={handleFormSubmit}>
        <input ref={query} className='w-full py-2 px-6 rounded-3xl bg-neutral-700 outline-none' type='text' placeholder='Enter City...' />
      </form>
      <div className='flex items-center gap-2'>
        <i className="fa-solid fa-location-dot pt-1"></i>
        <button className='text-lg'>current location</button>
      </div>
    </div>
  )
}

export default Header