import React, { useContext, useRef } from 'react'
import UserContext from './UserContext'

const Header = () => {
  const query = useRef(null)
  const {handleSubmit} = useContext(UserContext)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(query?.current?.value)
  }
  return (
    <div className='flex items-center justify-between py-6 px-10 text-white'>
        <div className='flex items-center gap-2 font-semibold tracking-wide'>
            <i className="fa-solid fa-cloud text-3xl"></i>
            <p>Wheather</p>
        </div>
        <form className='w-1/3' onSubmit={handleFormSubmit}>
            <input ref = {query} className='w-full py-2 px-6 rounded-3xl bg-neutral-700 outline-none' type='text' placeholder='Please Enter City Name'/>
        </form>
        <div className='flex items-center gap-2'>
          <i className="fa-solid fa-location-dot pt-1"></i>
            <p className='text-lg' >current location</p>
        </div>
    </div>
  )
}

export default Header