import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-[100px] '>
      <a className='text-[#4A2AD3] order-2 font-gilmedium tracking-[1px] leading-8 mb-4 lg:mb-0' >info@invoriem.com</a>
      <div className="flex justify-center items-center space-x-6 text-[#626262] lg:order-3 mb-8 lg:mb-0">
      <Icon className='h-6 w-6'  icon="ant-design:instagram-filled" />
      <Icon className='h-6 w-6'icon="typcn:social-facebook" />
      <Icon className='h-6 w-6' icon="typcn:social-twitter" />
      <Icon className='h-6 w-6' icon="typcn:social-linkedin" />
      </div>
      <span className="font-gilmedium text-sm tracking-[2px] leading-7  text-[#757575]">Copyright © 2020 Invoriem </span>
    </div>
  )
}

export default Footer