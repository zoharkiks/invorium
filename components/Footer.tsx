import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <a className='text-[#4A2AD3] font-gilmedium tracking-[1px] leading-8 mb-4' >info@invoriem.com</a>
      <div className="flex justify-center space-x-6 text-[#1F1F1F] mb-8">
      <Icon className='h-6 w-6'  icon="ant-design:instagram-filled" />
      <Icon className='h-6 w-6'icon="typcn:social-facebook" />
      <Icon className='h-6 w-6' icon="typcn:social-twitter" />
      <Icon className='h-6 w-6' icon="typcn:social-linkedin" />
      </div>
      <span className="font-gilmedium text-sm tracking-[2px] leading-7">Copyright © 2020 Invoriem </span>
    </div>
  )
}

export default Footer