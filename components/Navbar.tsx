import React from 'react'
import{images} from '../constants'
import { Icon } from '@iconify/react';


const Navbar = () => {
  return (
    <div className='flex justify-between pb-5 px-6 '>
      <img  className='h-[22px]' src={images.logo.src} alt="" />
      <Icon className='h-6 w-6' icon="heroicons-solid:menu-alt-4" />
    </div>
  )
}

export default Navbar