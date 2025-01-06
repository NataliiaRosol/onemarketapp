import React from 'react'
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className='text-center text-xl mb-20 min-h-screen'>
      <p className={`text-xl pb-5 ${styles.loading}`} >Recipes is loading, please wait...</p>
    </div>
  )
}

export default Loading