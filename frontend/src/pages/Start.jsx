import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
       <div className=' bg-cover bg-center bg-[url(https://www.automatesystems.co.uk/wp-content/uploads/2009/09/WMARK-Uni-Of-Warwick-3-2-scaled.jpg)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
      <img  className=' w-16 ml-8' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'>
      </img>
      <div className=' bg-white pb-7 py-4 px-4'>
        <h2 className='text-3xl font-bold'> Get Started with Uber</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
      </div>
    </div>
    </div>
  )
}

export default Start
