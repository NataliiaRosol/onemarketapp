import Image, { StaticImageData } from "next/image";
import React from "react";
type MealCard = {
  src: StaticImageData | string;
  name: string;
  text: string;
  reverse: boolean;
};

function MealCard({ src, name, text, reverse }: MealCard) {
  return (
    <div
      className={`recipe-item flex flex-col items-center lg:items-start gap-2 lg:flex-row md:gap-[22px] mb-[30px] md:mb-[70px] ${
        reverse ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="max-w-[540px]">
        <h3 className="lg:hidden font-italianno text-center text-[28px] mt-0 lg:mt-[36px] mb-2">
          {name}
        </h3>
      </div>
      <Image
        alt={name}
        src={src}
        width={538}
        height={274}
        style={{
          maxHeight: "274px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="max-w-[540px]">
        <h3 className="hidden lg:block font-italianno text-center text-[45px] mt-0 md:mt-[36px] mb-2">
          {name}
        </h3>
        <p className="font-roboto  recipe-text text-[14px]">{text}</p>
      </div>
    </div>
  );
}

export default MealCard;
