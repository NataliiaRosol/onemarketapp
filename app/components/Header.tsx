
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import twitterImg from '@/public/twitter.png'
import facebookImg from '@/public/facebook.png'
import instagramImg from '@/public/inst.png'

function Header() {

  return (
    <header className='p-[25px] shadow-md'>
      <nav className='flex items-center justify-center gap-[152px]'>
        
          <Link href='/' className='text-[18px]'>Home</Link>
          <Link href='/menu' className='text-[18px]'>Menu</Link>
          <Link href='/' className='border-b-[1px] border-b-[#FCAC45] text-[40px]'>Selve Restourant</Link>
          <Link href='/contacts' className='text-[18px]'>Contacts</Link>
          
            <div className='flex gap-[20px]'>
              <Link href='/'>
              <Image alt='twitter link' src={twitterImg} width={28} height={28}/>
              </Link>
              <Link href='/'><Image alt='facebook link' src={facebookImg} width={28} height={28}/></Link>
              <Link href='/'><Image alt='instagram link' src={instagramImg} width={28} height={28}/></Link>
            </div>
          
        
      </nav>
      
    </header>
  )
}

export default Header