import React from 'react'

function Search() {
  return (
    <form className='searchShadow w-[500px] h-10 mx-auto flex mb-[65px] border-solid border-[1px]'>
      <input className='w-[390px] h-full px-3 rounded-[3px] text-[18px] outline-none' type="text" name="search" id="search" />
      <button className='search-decor px-5 py-2 text-[#747474] text-[18px]'>Search</button>
    </form>
  )
}

export default Search