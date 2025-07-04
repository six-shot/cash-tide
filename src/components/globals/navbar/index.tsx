import React from "react";
import logo from "../../../../public/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import menu from "../../../../public/svgs/menu.svg";
export default function Navbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50">
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[1100px] w-full mx-5 nav-bg md:h-[72px] h-[64px] px-5 md:px-[38px] border border-[#EAECF0] rounded-[40px] flex justify-between items-center">
          <Image src={logo} alt="logo" width={107} height={33} />
          <nav className="md:flex hidden items-center gap-[39px] text-sm font-medium font-[family-name:var(--font-inter)] text-[#13181F]">
            <Link href="/">Home</Link>
            <Link href="/">Send money</Link>
            <Link href="/">Recieve money </Link>
          </nav>
          <div className="md:flex hidden items-center gap-[10px]">
            <div>
              <FaXTwitter className="cursor-pointer text-[24px] text-[#13181F]" />
            </div>
            <div>
              <FaTelegramPlane className=" cursor-pointer text-[24px] text-[#13181F]" />
            </div>
            <button className="ml-2 cursor-pointer bg-[#1C77FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] text-white px-4 h-[44px] rounded-[9px] font-medium font-[family-name:var(--font-inter)]">
              Get Started
            </button>
          </div>
          <div className=" md:hidden  w-[44px] h-[44px] rounded-[10px] bg-[#F7F8F5] flex justify-center items-center">
            <Image src={menu} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
}
