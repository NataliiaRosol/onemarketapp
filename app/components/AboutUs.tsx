import Image from 'next/image'
import React from 'react'

import aboutUsImg from '@/public/aboutUsImg.jpg'

function AboutUs() {
  return (
    <div className='aboutUs flex gap-5 items-center'>
      <div className="aboutUs-info max-w-[540px]">
        <h2 className='aboutUs-header text-[44px]'>About Us</h2>
        <p className='mt-[22px] mb-5 text-[14px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services.</p>
        <p className='text-[14px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services.</p>
      </div>
      <div className="aboutUs-image max-w-[540px]">
        <Image src={aboutUsImg} alt='About Us' />
      </div>
    </div>
  )
}

export default AboutUs