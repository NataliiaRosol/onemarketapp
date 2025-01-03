import React from 'react'

interface SearchInfoMessageProps {
  message: string
}

function SearchInfoMessage({message}: SearchInfoMessageProps) {
  return (
    <div className='text-center mb-20 text-xl'>{message}</div>
  )
}

export default SearchInfoMessage