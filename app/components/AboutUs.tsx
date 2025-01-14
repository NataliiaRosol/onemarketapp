import Image from 'next/image'
import React from 'react'

import aboutUsImg from '@/public/aboutUsImg.jpg'

function AboutUs() {
  return (
    <div className='aboutUs py-[50px] md:py-[150px] px-[10px] flex flex-col text-center md:flex-row md:text-justify gap-5 items-center'>
      <div className="aboutUs-info max-w-[540px]">
        <h2 className='aboutUs-header font-italianno text-[35px]'>About Us</h2>
        <p className='font-roboto mt-[22px] md:mb-5 mb-2 text-[14px]'>I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services.</p>
        <p className='font-roboto text-[14px]'>I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services.</p>
      </div>
      <div className="aboutUs-image max-w-[540px]">
        <Image src={aboutUsImg} alt='About Us' />
      </div>
    </div>
  )
}

export default AboutUs