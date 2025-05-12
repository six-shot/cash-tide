"use client";
import Image from "next/image";
import left from "../../public/svgs/left.svg";
import right from "../../public/svgs/right.svg";
import widget1 from "../../public/svgs/widget1.svg";
import widget from "../../public/svgs/widget.svg";
import benefits from "../../public/svgs/benefits.svg";
import dollar from "../../public/svgs/dollar.svg";
import speed from "../../public/svgs/speed.svg";
import star from "../../public/svgs/star.svg";
import Marquee from "react-fast-marquee";
import MarqueePage from "@/components/Marquee";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
 
  const data = [
    {
      title: "What is Whisper?",
      answer:
        "Whisper is a decentralized, wallet-based messaging app built for Web3. It offers end-to-end encrypted chat, in-chat crypto transfers, and AI-powered insights — all without usernames, emails, or centralized servers.",
    },
    {
      title: "How is Whisper different from other messaging apps?",
      answer:
        "Unlike traditional messengers, Whisper uses your Ethereum wallet as your identity, supports on-chain actions like sending ETH, and ensures total privacy with decentralized protocols like XMTP.",
    },
    {
      title: "Can I use Whisper on multiple devices?",
      answer:
        "Yes. Whisper supports secure multi-device syncing, so you can continue conversations seamlessly across mobile and desktop.",
    },
    {
      title: "How does Whisper protect my privacy?",
      answer:
        "Messages are end-to-end encrypted and stored off-chain. Your identity stays anonymous, with no metadata exposure or centralized storage — ensuring full control and privacy.",
    },
    {
      title: "What can Whisper's AI Assistant do??",
      answer:
        "Whisper's AI gives you live gas estimates, token trends, wallet stats, and answers to basic blockchain questions — all within the chat experience.",
    },
  ];

  return (
    <div>
      <div className="pt-[92px] relative h-[702px]  overflow-hidden ">
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
            className="absolute bottom-[120px] left-[60px] hu"
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
              <h5 className="text-[14px] text-[#13181f] font-medium font-[family-name:var(--font-inter)]">
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
                className="p-[36px] rounded-[14px] card-bg border border-[#EAF0DD]"
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
              <h5 className="text-[14px] text-[#13181f] font-medium font-[family-name:var(--font-inter)]">
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
      <div className="faq ">
        <div className="max-w-[1440px] mx-auto py-[96px] px-[100px] flex items-center">
          <div className="flex flex-col gap-4  items-start w-[570px] flex-1">
            <div className="flex gap-2 items-center">
              <Image src={benefits} alt="benefits" />
              <h5 className="text-[14px] text-[#13181f] font-medium font-[family-name:var(--font-inter)]">
                Product
              </h5>
            </div>
            <h5 className="text-[44px] font-[family-name:var(--font-TWKLausanne500)] text-[#13181f]">
              Send money instantly and for free
            </h5>
            <p className="font-[family-name:var(--font-inter)] text-[#13181f]">
              Transferring money across borders has never been easier. Just log
              in to CashTide with your phone number, add funds, and send them to
              any recipient using their phone number. No fees, no delays, no
              banks.
            </p>
            <button className=" cursor-pointer bg-[#1C77FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] text-white px-4 h-[44px] rounded-[9px] font-medium font-[family-name:var(--font-inter)]">
              Get Started
            </button>
          </div>
          <div className="flex-1 pl-[100px]">
            <video className="rounded-[20px] w-full" autoPlay loop>
              <source src="/video/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto py-[96px] px-[100px] flex items-center pt-[100px]">
          <div className="flex-1 mr-[100px]">
            <video className="rounded-[20px] w-full" autoPlay loop>
              <source src="/video/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col gap-4  items-start w-[570px] flex-1">
            <div className="flex gap-2 items-center">
              <Image src={benefits} alt="benefits" />
              <h5 className="text-[14px] text-[#13181f] font-medium font-[family-name:var(--font-inter)]">
                Product
              </h5>
            </div>
            <h5 className="text-[44px] font-[family-name:var(--font-TWKLausanne500)] text-[#13181f]">
              Receive Money from Any Corner of the Globe
            </h5>
            <p className="font-[family-name:var(--font-inter)] text-[#13181f]">
              Get paid instantly from any part of the world, straight to your
              phone number. No paperwork or bureaucracy. CashTide makes
              receiving money fast, free, and accessible — even without a bank
              account.
            </p>
            <button className=" cursor-pointer bg-[#1C77FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] text-white px-4 h-[44px] rounded-[9px] font-medium font-[family-name:var(--font-inter)]">
              Enter Dapp
            </button>
          </div>
        </div>
      </div>
      <div className="why ">
        <div className="max-w-[1440px] mx-auto py-[96px] px-[100px] flex items-center">
          <div className="flex flex-col gap-4  items-start w-[570px] flex-1">
            <div className="flex gap-2 items-center">
              <Image src={benefits} alt="benefits" />
              <h5 className="text-[14px] text-[#13181f] font-medium font-[family-name:var(--font-inter)]">
                Key Takeaway
              </h5>
            </div>
            <h5 className="text-[44px] font-[family-name:var(--font-TWKLausanne500)] text-[#13181f]">
              Financial freedom as simple as sending a text.
            </h5>
            <p className="font-[family-name:var(--font-inter)] text-[#13181f]">
              Access global money transfers without the complexity of
              traditional banking—just a phone number connects you to instant,
              secure.
            </p>
            <button className=" cursor-pointer bg-[#1C77FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] text-white px-4 h-[44px] rounded-[9px] font-medium font-[family-name:var(--font-inter)]">
              Enter Dapp
            </button>
          </div>
          <div className="flex-1 pl-[100px] h-[500px] overflow-hidden">
            <MarqueePage />
          </div>
        </div>
      </div>
      <div className="faq ">
        <div className="max-w-[1440px] mx-auto py-[96px] px-[100px]">
          <div className="flex justify-center items-center flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image src={benefits} alt="benefits" />
              <h5 className="text-[14px] text-[#13181f] font-medium font-[family-name:var(--font-inter)]">
                FAQ&apos;S
              </h5>
            </div>
            <h5 className="text-[44px] font-[family-name:var(--font-TWKLausanne500)] text-[#13181f]">
              Got a quick question?
            </h5>
            <p className="font-[family-name:var(--font-inter)] text-[#13181f]  text-center">
              We&apos;re here to help you make the right decision. Explore our
              frequently asked <br /> questions and find answers below.
            </p>
          </div>
          <div className="mt-[44px] flex justify-center  ">
            <div className="  flex flex-col p-[36px] w-[900px] gap-4 card-bg shadow-[0px_-22px_37px_0px_#1d1f130d] rounded-[20px]">
              {data.map((item, index) => (
                <Accordion
                  key={index}
                  index={index}
                  title={item.title}
                  answer={item.answer}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="why py-20">
        <div className="flex gap-4 flex-col justify-center items-center">
          <h2 className="text-[#061833] text-[44px] tracking-[-0.01em] font-medium font-[family-name:var(--font-TWKLausanne500)] text-center leading-[79px] mt-[23px]">
            🚀 Ready to Send Money Like a Text?
          </h2>
          <p className=" w-[640px] text-[#475467] leading-[23px] text-center font-[family-name:var(--font-inter)]">
            Join thousands who are already sending and receiving money globally
            in <br /> seconds—free, fast, and secure.
          </p>
          <button className=" cursor-pointer bg-[#1C77FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] text-white px-4 h-[44px] rounded-[9px] font-medium font-[family-name:var(--font-inter)]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

const Accordion = ({
  title,
  answer,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  answer: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => setHoveredIndex(isOpen ? null : index)}
      className="relative p-[1px] overflow-hidden cursor-pointer"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className=" card-bg border border-[#EAF0DD] rounded-[12px] font-[family-name:var(--font-inter)] py-[30px]">
        <motion.button
          className="flex justify-between items-center w-full px-[30px] "
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-[16px] text-[#13181F] font-medium">
            {title}
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 27 27"
            fill="none"
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <g clipPath="url(#clip0_1_556)">
              <path
                d="M13.2018 25.1331C12.7266 25.1331 12.2709 24.9444 11.9349 24.6084C11.5989 24.2724 11.4102 23.8166 11.4102 23.3415V1.84147C11.4102 1.36629 11.5989 0.910575 11.9349 0.574572C12.2709 0.23857 12.7266 0.0498047 13.2018 0.0498047C13.677 0.0498047 14.1327 0.23857 14.4687 0.574572C14.8047 0.910575 14.9935 1.36629 14.9935 1.84147V23.3415C14.9935 23.8166 14.8047 24.2724 14.4687 24.6084C14.1327 24.9444 13.677 25.1331 13.2018 25.1331Z"
                fill="#13181F"
              />
              <path
                d="M2.45182 14.3831C1.97664 14.3831 1.52093 14.1944 1.18492 13.8584C0.848921 13.5224 0.660156 13.0666 0.660156 12.5915C0.660156 12.1163 0.848921 11.6606 1.18492 11.3246C1.52093 10.9886 1.97664 10.7998 2.45182 10.7998H23.9518C24.427 10.7998 24.8827 10.9886 25.2187 11.3246C25.5547 11.6606 25.7435 12.1163 25.7435 12.5915C25.7435 13.0666 25.5547 13.5224 25.2187 13.8584C24.8827 14.1944 24.427 14.3831 23.9518 14.3831H2.45182Z"
                fill="#13181F"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_556">
                <rect
                  width="24"
                  height="24"
                  fill="#13181F"
                  transform="translate(0.5 0.0498047)"
                />
              </clipPath>
            </defs>
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className=" text-[1rem] text-[#13181F] mt-[21px] px-[30px] ">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
