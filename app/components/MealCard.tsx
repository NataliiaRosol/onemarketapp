import Image, { StaticImageData } from 'next/image'
import React from 'react'
type MealCard = {
  src: StaticImageData | string,
  name: string,
  text: string,
  reverse: boolean
}

function MealCard({src, name, text, reverse}:MealCard) {
  return (
    <div className={`flex gap-[22px] mb-[70px] ${reverse ? "flex-row" : "flex-row-reverse"}`}>
      <Image alt={name} src={src} width={538} height={274} style={{maxHeight:'274px', objectFit:'cover', objectPosition:'center'}} />
      <div className="max-w-[540px]">
        <h3 className='text-center text-[45px] mt-[36px] mb-2'>{name}</h3>
        <p className='recipe-text text-[14px]'>{text}</p>
      </div>
    </div>
  )
}

export default MealCard