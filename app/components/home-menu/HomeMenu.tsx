import React from 'react'

import styles from './HomeMenu.module.css'

import pastaImg from '@/public/pasta.jpg'
import rissotoImg from '@/public/rissoto.jpg'
import lasagnaImg from '@/public/lasagna.jpg'
import MealCard from '../MealCard'

const HomeMenuData = [
  {
    src: pastaImg,
    name: 'Pasta Bolognese',
    text: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes...'
  },
  {
    src: rissotoImg,
    name: 'Rissoto',
    text: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes...'
  },
  {
    src: lasagnaImg,
    name: 'Lasagna',
    text: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes...'
  }

]

function HomeMenu() {
  return (
    <div>
      <h3 className="homeMenu-header text-center mb-10">Menu</h3>
      <div className="mx-auto my-0 max-w-[1120px] px-3">
        {
          HomeMenuData.map((menuItem, index)=> (
            <MealCard src={menuItem.src} name={menuItem.name} text={menuItem.text} reverse={index % 2 !== 0} key={menuItem.name} />
          ))
        }
      </div>
      <div className='mt-[98px] mb-[146px] text-center'>
      <a href="#!" className={styles.moreBtn}>More</a>
      </div>
      
    </div>
  )
}

export default HomeMenu