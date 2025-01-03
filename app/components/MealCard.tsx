import Image, { StaticImageData } from 'next/image'
import React from 'react'
type MealCard = {
  src: StaticImageData,
  name: string,
  text: string,
  reverse: boolean
}

function MealCard({src, name, text, reverse}:MealCard) {
  return (
    <div className={`flex gap-[22px] mb-[70px] ${reverse ? "flex-row" : "flex-row-reverse"}`}>
      <Image alt={name} src={src} />
      <div className="max-w-[540px]">
        <h3 className='text-center text-[45px] mt-[36px] mb-2'>{name}</h3>
        <p className='text-[14px]'>{text}</p>
      </div>
    </div>
  )
}

export default MealCard