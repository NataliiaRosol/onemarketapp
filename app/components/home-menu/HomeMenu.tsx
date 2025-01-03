import styles from './HomeMenu.module.css'

import MealCard from '../MealCard'
import { MenuData } from '@/app/utils/constants'


function HomeMenu() {
  return (
    <div>
      <h3 className="homeMenu-header text-center mb-10">Menu</h3>
      <div className="mx-auto my-0 max-w-[1120px] px-3">
        {
          MenuData.map((menuItem, index)=> (
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