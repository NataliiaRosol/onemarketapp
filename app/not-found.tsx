import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flex items-center gap-3">
      <Link href='/' className='text-base w-[200px] border-[1px] border-[#FCAC45] px-5 py-2 hover:bg-[#FCAC45] hover:text-white duration-1000 rounded-md'>Go Back Home</Link>
      <Link href='/menu' className='text-base w-[200px] border-[1px] border-[#FCAC45] px-5 py-2 hover:bg-[#FCAC45] hover:text-white duration-1000 rounded-md'>Menu</Link>
      </div>
      
      
    </div>
  )
}

export default NotFound