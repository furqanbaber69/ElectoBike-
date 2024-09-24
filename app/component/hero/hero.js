"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Hero = () => {
  const [countup, setCountup] = useState(false);

  const infocard = [
    {
      topheading: 5896,
      heading2: "Customer Served",
      content:
        "We offer emission-free local travel, Not only doing something good.",
    },
    {
      topheading: 1587,
      heading2: "Reviews",
      content:
        "Simply bock using our super app, chose your destination, jump in to our nearby service.",
    },
    {
      topheading: 21,
      heading2: "Certifications",
      content:
        "Know your travel octet's in advance then you can simply pay it using our super apps.",
    },
    {
      topheading: 8956,
      heading2: "Value Proposition",
      content:
        "We offer emission-free local travel, Not only doing something good for yourself.",
    },
  ];
  return (
    <div className="md:w-full h-full ">
      <div className="bg-primary w-full md:h-[42px] md:flex items-center justify-center">
        <Image src={"/images/pngegg.png"} alt="" width={45} height={40} />
        <p className="text-[14px] font-[400] md:leading-[20px] text-neutral800">
          EMotorad X2 Unisex Mountain Electric Cyclex-{" "}
        </p>
        <span className="font-[600] text-[14px] md:leading-[24px] text-neutral800">
          $1999.99
        </span>{" "}
        ($300 OFF)
      </div>
      <div className="bg-[url(/images/hero.png)] bg-no-repeat object-cover bg-cover w-full md:h-[732px] md:flex items-center">
        <div className=" inline-block translate-x-[100px]">
          <h2 className="font-[600] text-[56px] md:leading-[72px] text-white">
            Aventure.2 Ebike
          </h2>
          <p className="text-white  font-[400] text-[18px] leading-[24px]">
            The power of wildest dreams
          </p>
          <button className="bg-primary text-white rounded md:py-[10px] md:px-[18px] mt-5 flex gap-4 justify-center items-center">
            Buy Now{" "}
            <Image
              src={"/images/arrow-up-right.png"}
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className="bg-neutral50  md:w-full md:h-[332px] md:px-[120px] md:pn-[48px] md:pb-[48px] gap-[64px] md:flex items-center justify-center">
        {infocard.map((card) => (
          <div className="md:w-[252px] md:h-[188px] " key={card.heading2}>
            <ScrollTrigger
              onEnter={() => setCountup((prev) => !prev)}
              onExit={() => setCountup(false)}
            >
              <h3 className="text-primary md:font-[600] md:text-[48px] md:leading-[56px] text-center">
                <CountUp
                  start={0}
                  end={card.topheading}
                  delay={0}
                  duration={2}
                  separator=""
                />
              </h3>
            </ScrollTrigger>
            <h2 className="text-[24px] font-[600] leading-[32px] text-center text-neutral800">
              {card.heading2}
            </h2>
            <p className="font-[400] md:leading-[24px]  text-neutral700 text-center">
              {card.content}
            </p>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default Hero;
