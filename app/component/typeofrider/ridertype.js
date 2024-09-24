import React from "react";

const RiderType = () => {
  return (
    <div className="md:w-full md:h-[1298px] md:py-[48px] bg-neutral50">
      <div className="md:mb-10">
        <h2 className="font-[600] text-[40px] leading-[50px] text-center">
          An Ebike for<span className="text-primary"> Every</span> Type of{" "}
          <span className="text-primary">Rider</span>
        </h2>
        <p className="text-[18px] leading-[24px] text-center font-[400] text-neutral700">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more <br /> users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="md:grid w-full md:h-[1120px] grid-cols-2 ">
        <div className=" bg-neutral800 md:flex items-center md:h-[560px]">
          <div className="md:w-[536px] md:h-[261px]  mx-auto my-auto md:flex md:flex-col justify-between items-start">
            <h3 className="font-[600] text-[48px] leading-[58px] ">
              <span className="text-primary">Beyond</span> the bike
            </h3>
            <h5 className="text-white text-[24px] leading-[32px] ">
              Real Riders. Real Experiences.
            </h5>
            <p className="text-neutral400 leading-[24px] font-[400] ">
              Our mini-series, Beyond the Bike, captures the stories of Aventon
              riders and how their ebikes are used in unexpected ways to bring
              them closer to what makes them feel most alive.
            </p>
            <button className="font-[500] leading-[24px] text-primary cursor-pointer">
              Watch More
            </button>
          </div>
        </div>
        <div
          className=" bg-[url(/images/typeriderbanner.png)] bg-no-repeat md:h-[560px]"
          style={{
            backgroundSize: "100% 100%",
            objectFit: "cover",
          }}
        ></div>
        <div
          className=" md:h-[560px] bg-[url(/images/typeriderbanner2.png)] object-cover bg-no-repeat"
          style={{
            backgroundSize: "100% 100%",
            objectFit: "cover",
          }}
        ></div>
        <div className=" md:h-[560px] md:flex items-center bg-neutral50">
          <div className="md:w-[536px] md:h-[261px]  mx-auto my-auto md:flex md:flex-col justify-between items-start">
            <h3 className="font-[600] text-[48px] leading-[58px] ">
              <span className="text-primary">21</span> Day At{" "}
              <span className="text-primary">Home Trial</span>
            </h3>
            <h5 className="text-neutral800  text-[24px] leading-[32px] ">
              Real Riders. Real Experiences.
            </h5>
            <p className="text-neutral400 leading-[24px] font-[400] ">
              Our mini-series, Beyond the Bike, captures the stories of Aventon
              riders and how their ebikes are used in unexpected ways to bring
              them closer to what makes them feel most alive.
            </p>
            <button className="font-[500] leading-[24px] text-primary cursor-pointer">
              21 Days Trail Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderType;
