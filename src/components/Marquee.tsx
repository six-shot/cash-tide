import Image from "next/image";
import React from "react";
import sent from "../../public/svgs/sent.svg";

const MarqueePage = () => {
  const cardContents = [
    "Anyone can receive funds instantly.",
    "Advanced protection for transactions.",
    "Send money with just a phone number.",
    "Your money arrives in seconds, not days.",
    "No downloads works on the web",
   
  ];

  const createCard = (text: string, index: number) => (
    <div
      key={index}
      className="md:px-[36px] md:w-[500px] w-full flex md:gap-0 gap-6 items-center h-[110px] card-bg rounded-[16px] border border-[#EAF0DD] font-[family-name:var(--font-inter)]"
    >
      <div className="flex justify-between items-center w-full md:pl-[38px] pl-4">
        <h5 className="text-[#13181F] text-[16px]">{text}</h5>
        <Image src={sent} alt="sent" />
      </div>
    </div>
  );

  return (
    <div className="h-[500px] flex flex-col items-center justify-center ">
      <div className="gallery w-full h-full relative">
        <div className="flex gap-5 ">
          <div className="block-33 display--inline-top">
            <div className="relative">
              <div className="gallery-h overflow-hidden">
                <div className="gallery-content animate-marquee-top flex gap-5 flex-col">
                  {cardContents.map((text, index) => (
                    <div key={index} className="gallery-image relative">
                      {createCard(text, index)}
                    </div>
                  ))}
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
