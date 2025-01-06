"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import twitterImg from "@/public/twitter.png";
import facebookImg from "@/public/facebook.png";
import instagramImg from "@/public/inst.png";
import closeBtn from "@/public/closeBtn.png";
import { useMediaQuery } from "usehooks-ts";

function Header() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)");
  const [isMenuIsToggled, setIsMenuIsToggled] = useState<boolean>(false);

  return (
    <header className="p-[25px] shadow-md">
      {isAboveMediumScreens ? (
        <nav className="md:flex items-center justify-center gap-[152px]">
          <Link href="/" className="font-roboto text-[18px]">
            Home
          </Link>
          <Link href="/menu" className="font-roboto text-[18px]">
            Menu
          </Link>
          <Link href="/" className="header-logo font-italianno text-[40px]">
            Selve Restourant
          </Link>
          <Link href="/contacts" className="font-roboto text-[18px]">
            Contacts
          </Link>

          <div className="flex gap-[20px]">
            <Link href="/">
              <Image
                alt="twitter link"
                src={twitterImg}
                width={28}
                height={28}
              />
            </Link>
            <Link href="/">
              <Image
                alt="facebook link"
                src={facebookImg}
                width={28}
                height={28}
              />
            </Link>
            <Link href="/">
              <Image
                alt="instagram link"
                src={instagramImg}
                width={28}
                height={28}
              />
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between">
          <Link href="/" className="header-logo font-italianno text-[40px]">
            Selve Restourant
          </Link>

          <div
            className="w-[29px] cursor-pointer"
            onClick={() => setIsMenuIsToggled(true)}
          >
            <span className="block w-[29px] h-[2px] bg-black mb-[10px]"></span>
            <span className="block w-[29px] h-[2px] bg-black mb-[10px]"></span>
            <span className="block w-[29px] h-[2px] bg-black"></span>
          </div>
        </nav>
      )}

      {!isAboveMediumScreens && isMenuIsToggled && (
        <div className="fixed right-0 top-0 h-full z-40 w-[300px] bg-white drop-shadow-lg rounded-tl-lg rounded-bl-lg pt-[20px] pr-[20px]">
        {/* close icon */}
        <div className="flex justify-end mb-[60px]">
          <button onClick={() => setIsMenuIsToggled(!isMenuIsToggled)}>
            <span className="block w-[18px] h-[18px] text-black text-[18px]">
              <Image
                src={closeBtn}
                width={18}
                height={18}
                alt="close button"
              />
            </span>
          </button>
        </div>
      
        {/* Menu items */}
        <div className="flex flex-col h-full">
          {/* Верхній блок меню */}
          <div className="flex flex-col items-end gap-5 text-lg">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
          </div>
      
          {/* Contacts */}
          <div className="mt-auto mb-20 text-center"> {/* Додаємо нижній відступ */}
            <p className="relative mb-5 after:absolute after:bottom-[-10px] after:bg-[#fcac45] after:h-[1px] after:w-[163px] after:left-12">Contacts</p>
            <a href="tel:+380777777777" className="">+380 (77) 77 77 777</a>
            <div className="flex items-center justify-center gap-[39px] mt-5 mb-[21px]">
              <Link href=''>
              <Image
                alt="twitter link"
                src={twitterImg}
                width={28}
                height={28}
              />
            </Link>
            <Link href="/">
              <Image
                alt="facebook link"
                src={facebookImg}
                width={28}
                height={28}
              />
            </Link>
            <Link href="/">
              <Image
                alt="instagram link"
                src={instagramImg}
                width={28}
                height={28}
              />
            </Link>
              
            </div>
          </div>
        </div>
      </div>
      )}
    </header>
  );
}

export default Header;
