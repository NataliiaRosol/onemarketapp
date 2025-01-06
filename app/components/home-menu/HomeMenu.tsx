import styles from './HomeMenu.module.css'

import MealCard from '../MealCard'
import { MenuData } from '@/app/utils/constants'


function HomeMenu() {
  return (
    <div>
      <h3 className="font-italianno text-[35px] homeMenu-header text-center mb-2 lg:mb-10">Menu</h3>
      <div className="mx-auto my-0 max-w-[1120px] px-3">
        {
          MenuData.map((menuItem, index)=> (
            <MealCard src={menuItem.src} name={menuItem.name} text={menuItem.text} reverse={index % 2 !== 0} key={menuItem.name} />
          ))
        }
      </div>
      <div className='mt-[40px] md:mt-[98px] mb-[50px] md:mb-[146px] text-center'>
      <a href="#!" className={`${styles.moreBtn} font-roboto`}>More</a>
      </div>
      
    </div>
  )
}

export default HomeMenu