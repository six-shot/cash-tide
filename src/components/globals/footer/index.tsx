import Image from "next/image";
import logo from "../../../../public/logo.avif"
import React from "react";
import book from "../../../../public/svgs/book.svg"
import x from "../../../../public/svgs/x.svg"
import medium from "../../../../public/svgs/medium.svg"
import youtube from "../../../../public/svgs/youtube.svg"
export default function Footer() {
  return (
    <div className="py-[60px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-[100px]">
          <div className="flex justify-between items-start">
            <Image src={logo} alt="logo" className="w-[104px] h-[30px]" />
            <div className="flex gap-4">
              <Image src={x} alt="x" />
              <Image src={book} alt="book" />
              <Image src={medium} alt="medium" />
              <Image src={youtube} alt="youtube" />
            </div>
          </div>
          <div className="mt-[41px] flex items-center gap-[31px] text-sm font-[family-name:var(--font-inter)] font-medium pb-8 border-b border-[#E1E1E1]">
            <h6 className="text-[#13181F]">Home</h6>
            <h6 className="text-[#475467]">Send money </h6>
            <h6 className="text-[#475467]">Receive money </h6>
          </div>
          <div className="mt-6 h-[76px] card-bg">
            <p className="text-[#13181F] text-sm font-medium font-[family-name:var(--font-inter)]">
              @2025 CashTide. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
