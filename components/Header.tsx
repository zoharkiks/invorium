import React from 'react'
import {images} from '../constants'

const Header = () => {
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col justify-center items-center pt-[127px] font-gilmedium tracking-[1px] text-[#1F1F1F] ">
      <img className='h-8' src={images.logodark.src} alt="" />
      <span className='w-[50%] text-center mt-7'>We fulfill international property developments</span>
      </div>

    </div>
  )
}

export default Header