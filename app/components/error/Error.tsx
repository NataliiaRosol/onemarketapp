import React from 'react'

interface errorMessageProps{
  errorMessage: string
}

function Error({errorMessage}:errorMessageProps) {
  return (
    <div className='text-xl mb-20'>
      <p className='text-center'>Sorry, an error occured: {errorMessage}</p>
      </div>
  )
}

export default Error