import Image from "next/image";
import React from "react";
import sent from "../../public/svgs/sent.svg";
const MarqueePage = () => {
  const cardContent = (
    <>
      <div className="px-[36px] w-[500px] flex items-center h-[110px] card-bg rounded-[16px] border border-[#EAF0DD] font-[family-name:var(--font-inter)]">
        <div className="flex justify-between items-center w-full pl-[38px]">
          <h5 className="text-[#13181F]  text-[16px]">
            Send money with just a phone number.
          </h5>
          <Image src={sent} alt="sent" />
        </div>
      </div>
    </>
  );

  return (
    <div className="h-[500px] flex flex-col items-center justify-center ">
      <div className="gallery w-full h-full relative">
        <div className="flex gap-5 ">
          <div className="block-33 display--inline-top">
            <div className="relative">
              <div className="gallery-h overflow-hidden">
                <div className="gallery-content animate-marquee-top flex gap-5 flex-col">
                  <div className="gallery-image relative ">{cardContent}</div>
                  <div className="gallery-image relative ">{cardContent}</div>
                  <div className="gallery-image relative">{cardContent}</div>
                  <div className="gallery-image relative">{cardContent}</div>
                  <div className="gallery-image relative ">{cardContent}</div>
                  <div className="gallery-image relative ">{cardContent}</div>
                  <div className="gallery-image relative">{cardContent}</div>
                  <div className="gallery-image relative">{cardContent}</div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default MarqueePage;
