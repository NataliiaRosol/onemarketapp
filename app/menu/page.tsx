import React from 'react'
import SearchField from '../components/search/Search'

function MenuPage() {
  return (
    <div className='w-[1120px] mx-auto px-[10px] mt-[50px]'>
      <h2 className='text-center  mb-[15px] text-[35px]'>Menu</h2>
      <SearchField />
    </div>
  )
}

export default MenuPage