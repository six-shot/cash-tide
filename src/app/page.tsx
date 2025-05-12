"use client";
import Image from "next/image";
import left from "../../public/svgs/left.svg";
import right from "../../public/svgs/right.svg";
import widget1 from "../../public/svgs/widget1.svg";
import widget from "../../public/svgs/widget.svg";
import benefits from "../../public/svgs/benefits.svg";
import { motion } from "framer-motion";
import dollar from "../../public/svgs/dollar.svg";
import speed from "../../public/svgs/speed.svg";
import star from "../../public/svgs/star.svg";
import Marquee from "react-fast-marquee";

const benefitsData = [
  {
    title: "Global Access",
    description:
      "Use your phone number anywhere in the world. One wallet, global access - No borders & No banking apps.",
    icons: [dollar, speed],
  },
  {
    title: "Instant Transactions",
    description:
      "Your money moves at the speed of a text message. Send funds globally and have them arrive within seconds, not days.",
    icons: [dollar, speed],
  },
  {
    title: "Blockchain-Powered",
    description:
      "Your transactions are secured on the blockchain - fast, transparent, and tamper-proof from end to end.",
    icons: [dollar, speed],
  },
  {
    title: "Global Access",
    description:
      "Use your phone number anywhere in the world. One wallet, global access - No borders & No banking apps.",
    icons: [dollar, speed],
  },
  {
    title: "Instant Transfers",
    description:
      "Send and receive money instantly across borders with just a phone number.",
    icons: [dollar, speed],
  },
  {
    title: "Zero Fees",
    description:
      "Enjoy completely free transfers with no hidden charges or transaction fees.",
    icons: [dollar, speed],
  },
];

const marqueeFeatures = [
  "Smart Payment Requests",
  "Instant Global Transfers",
  "No Hidden Fees",
  "Send to Any Phone Number",
  "Blockchain Security",
];

export default function Home() {
  return (
    <div>
      <div className="pt-[92px] relative h-[902px]  overflow-hidden ">
        <Image
          src={left}
          alt="left"
          className="absolute top-0 left-0 opacity-10"
        />
        <Image
          src={right}
          alt="left"
          className="absolute -bottom-[50px] right-0 opacity-10"
        />
        <div className="max-w-[1440px] mx-auto  h-[702px] relative">
          <div className="pt-[68px] flex gap-6 flex-col justify-center items-center">
            <div className="px-[35px] bg-[#D1EEFF] rounded-[18px] flex items-center">
              <h6 className="text-[#13181F] h-[31px] flex items-center text-[13px] font-medium font-[family-name:var(--font-suisee)] mt-[3px]">
                Powering Global Payments
              </h6>
            </div>
            <div>
              <h2 className="text-[#061833] text-[72px] tracking-[-0.01em] font-bold font-[family-name:var(--font-TWKLausanne500)] text-center leading-[79px] mt-[23px]">
                Transfers as Simple as a <br /> Text Message.
              </h2>
              <p className="mt-[17px] w-[640px] text-[#475467] leading-[23px] text-center font-[family-name:var(--font-inter)]">
                No App needed. Send and receive globally, instantly, and for
                free. With just a phone number, your wallet is ready.
              </p>
            </div>
            <button className="ml-2 cursor-pointer bg-[#1C77FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] text-white px-4 h-[44px] rounded-[9px] font-medium font-[family-name:var(--font-inter)]">
              Enter Dapp
            </button>
          </div>
          <motion.div
            className="absolute bottom-[300px] right-[-34px] hu"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={widget}
              alt="widget"
              style={{ pointerEvents: "none" }}
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[-12px] left-[-26px] hu"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={widget1}
              alt="widget1"
              style={{ pointerEvents: "none" }}
            />
          </motion.div>
        </div>
      </div>
      <div className="why ">
        <div className="max-w-[1440px] mx-auto py-[96px] px-[100px]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image src={benefits} alt="benefits" />
              <h5 className="text-[14px] text-[#13181f] font-medium">
                BENEFITS
              </h5>
            </div>
            <h5 className="text-[44px] font-[family-name:var(--font-TWKLausanne500)] text-[#13181f]">
              Why Choose Cashtide?
            </h5>
            <p className="font-[family-name:var(--font-inter)] text-[#13181f]">
              Global transfers, redefined - Instant, Borderless, and Effortless.
              Just a phone <br /> number is all it takes.
            </p>
          </div>
          <div className="mt-[44px] grid grid-cols-3 gap-8 ">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="p-[36px] rounded-[14px] card-bg border border-[#EAECF1]"
              >
                <div className="flex justify-between items-center">
                  <Image src={dollar} alt="dollar" />
                  <div className="w-[36px] h-[36px] bg-[#F7F8F5] rounded-full flex items-center justify-center -mt-10 -mr-4">
                    <Image src={speed} alt="speed" />
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <h5 className="text-[#13181F] text-[23px] font-[family-name:var(--font-inter)] font-medium">
                    {benefit.title}
                  </h5>
                  <h5 className="text-[#13181F] text-[14px] font-[family-name:var(--font-inter)]">
                    {benefit.description}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="why ">
        <div className="max-w-[1440px] mx-auto py-[96px] px-[100px]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image src={benefits} alt="benefits" />
              <h5 className="text-[14px] text-[#13181f] font-medium">
                THE CASHTIDE ADVANTAGES
              </h5>
            </div>
            <h5 className="text-[44px] font-[family-name:var(--font-TWKLausanne500)] text-[#13181f]">
              Get more with Cashtide
            </h5>
            <p className="font-[family-name:var(--font-inter)] text-[#13181f]">
              Leverage the power of AI to automatically optimize your purchases,
              ensuring you <br /> get the best value for your business with
              every transaction.
            </p>
          </div>
          <div className="my-[44px] flex card-bg border border-[#EAECF1] p-[36px] rounded-[15px]">
            <div className="pr-6">
              <div className="w-[53px] h-[53px] bg-black flex justify-center items-center rounded-full">
                <Image src={star} alt="star" />
              </div>
              <div className="mt-6">
                <h5 className="text-[#13181F] text-[23px] font-[family-name:var(--font-inter)] font-medium">
                  Send and receive money at Zero Cost
                </h5>
                <h5 className="text-[#13181F] text-[14px] font-[family-name:var(--font-inter)]">
                  Send and receive money globally with no fees or hidden
                  charges. CashTide makes cross-border transfers fast and
                  affordable.
                </h5>
              </div>
            </div>
            <div className="px-6 border-l border-[#EAF0DD]">
              <div className="w-[53px] h-[53px] bg-black flex justify-center items-center rounded-full">
                <Image src={star} alt="star" />
              </div>
              <div className="mt-6">
                <h5 className="text-[#13181F] text-[23px] font-[family-name:var(--font-inter)] font-medium">
                  Send to Any Phone Number
                </h5>
                <h5 className="text-[#13181F] text-[14px] font-[family-name:var(--font-inter)]">
                  Send money to any phone number, even without the app. Once the
                  recipient installs CashTide, they can instantly access their
                  funds.
                </h5>
              </div>
            </div>
            <div className="pl-6 border-l border-[#EAF0DD]">
              <div className="w-[53px] h-[53px] bg-black flex justify-center items-center rounded-full">
                <Image src={star} alt="star" />
              </div>
              <div className="mt-6">
                <h5 className="text-[#13181F] text-[23px] font-[family-name:var(--font-inter)] font-medium">
                  Request and Approve Payments with Ease
                </h5>
                <h5 className="text-[#13181F] text-[14px] font-[family-name:var(--font-inter)]">
                  Easily request payments and let the recipient approve or
                  decline. CashTide streamlines payment management with a simple
                  tap.
                </h5>
              </div>
            </div>
          </div>
          <div className="p-2.5">
            <Marquee className="" direction="left" speed={40}>
              <div className="flex gap-8">
                {marqueeFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-6 h-[60px] rounded-full bg-[#F7F8F5] flex items-center"
                  >
                    <h5 className="text-[#13181F] font-[family-name:var(--font-inter)]">
                      {feature}
                    </h5>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="p-2.5">
            <Marquee className="" direction="right" speed={40}>
              <div className="flex gap-8">
                {marqueeFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-6 h-[60px] rounded-full bg-[#F7F8F5] flex items-center"
                  >
                    <h5 className="text-[#13181F] font-[family-name:var(--font-inter)]">
                      {feature}
                    </h5>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
