import React from "react";
import Image from "next/image";

const PerfectEBike = () => {
  return (
    <div
      className="bg-[url(/images/frame.jpg)] md:w-full md:h-[600px] bg-no-repeat bg-cover "
      style={{ backgroundSize: "100% 100%", objectFit: "cover" }}
    >
      <h2 className="font-[600] text-[40px] leading-[50px] text-center md:pt-[65px]">
        Find your <span className="text-primary">perfect</span> Ebike in less
        than<span className="text-primary"> 3 minutes</span>
      </h2>
      <p className="text-center font-[400] leading-[24px] text-neutral700 md:w-[50%]  mx-auto md:pt-4">
        Answer a few quick questions and we'll instantly recommend the best
        eBike for you. Get custom recommendations based on your height and
        riding needs.
      </p>
      <button className="bg-primary text-white md:w-[260px] md:py-3 md:mt-4 md:rounded-2xl md:text-center md:mx-auto md:flex justify-center">
        Get Your Recommendations
      </button>

      <Image
        src={"/images/pngegg3.png"}
        alt={"Ebike Image"}
        width={505}
        height={316}
        className=" md:mx-auto md:flex translate-y-[10%]"
      />
    </div>
  );
};

export default PerfectEBike;
