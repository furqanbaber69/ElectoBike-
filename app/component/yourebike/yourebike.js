"use client";
import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const YourEBike = () => {
  const [countup, setCountUp] = useState(false);

  const testride = [
    {
      text: "We offer emission-free local travel, Not only doing something good for yourself, but also for everyone else.",
      number: 3000,
      heading2: "Test Rides",
    },
    {
      text: "Simply bock using our super app, chose your destination, jump in to our nearby services and wheedle only.",
      number: 127,
      heading2: "Repair",
    },
    {
      text: "Know your travel octet's in advance then you can simply pay it using our super apps or choose another method.",
      number: 38700,
      heading2: "Miles of smiles",
    },
  ];

  return (
    <div className="md:h-[1175px] md:w-full md:pt-5">
      <div className="md:my-10">
        <h2 className="text-[40px] font-[600] leading-[50px] text-center">
          Choose Your <span className="text-primary">Ebike</span>
        </h2>
        <p className="text-center font-[400] text-[18px] leading-[24px] text-neutral700 border-2 ">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more <br /> users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="md:max-w-full md:h-[501px] border-2 md:flex mx-auto justify-center items-center ">
        <div
          className=" relative md:w-[468px] md:h-[501px] border-2 bg-[url(/images/brand.png)] object-cover md:flex items-end"
          style={{ objectFit: "cover", backgroundPosition: "100% 100%" }}
        >
          <h2 className="text-white font-[600] text-[30px] -translate-y-[65%] translate-x-[45%] z-10">
            Brand
          </h2>
          <div className="absolute inset-x-0 bottom-0 h-full md:w-[100%] bg-gradient-to-t from-neutral800  opacity-90"></div>
        </div>
        <div
          className=" relative md:w-[468px] md:h-[501px] border-2 bg-[url(/images/styles.png)] object-cover md:flex items-end"
          style={{ objectFit: "cover", backgroundPosition: "100% 100%" }}
        >
          <h2 className="text-white font-[600] text-[30px] -translate-y-[65%] translate-x-[45%] z-10">
            Styles
          </h2>
          <div className="absolute inset-x-0 bottom-0 h-full md:w-[100%] bg-gradient-to-t from-neutral800  opacity-90"></div>
        </div>
        <div
          className=" relative md:w-[468px] md:h-[501px] border-2 bg-[url(/images/feature.png)] object-cover md:flex items-end"
          style={{ objectFit: "cover", backgroundPosition: "100% 100%" }}
        >
          <h2 className="text-white font-[600] text-[30px] -translate-y-[65%] translate-x-[45%] z-10">
            Feature
          </h2>
          <div className="absolute inset-x-0 bottom-0 h-full md:w-[100%] bg-gradient-to-t from-neutral800  opacity-90"></div>
        </div>
      </div>
      <div className="md:mt-[3%] border-2 border-black w-full h-[316px] md:px-[120px] md:py-[64px] bg-neutral50 md:flex items-center justify-evenly">
        {testride.map((ride) => (
          <div
            key={ride.number}
            className="md:w-[357px] md:h-[188px] border-2 items-center md:flex flex-col justify-between "
          >
            <ScrollTrigger
              onEnter={() => setCountUp((prev) => !prev)}
              onExit={() => setCountUp(false)}
            >
              <h3 className="text-primary font-[600] text-[48px] leading-[56px] text-center">
                <CountUp
                  start={30}
                  end={ride.number}
                  duration={0.5}
                  delay={0.1}
                  separator=""
                />
              </h3>
            </ScrollTrigger>
            <h4 className="text-[24px] font-[600] leading-[32px] text-center ">
              {ride.heading2}
            </h4>
            <p className="leading-[24px] text-neutral700 font-[400] text-center">
              {ride.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourEBike;
