import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const Links = [
    { href: "support", text: "support" },
    { href: "Cancellation Policy", text: "Cancellation Policy" },
    { href: "Register Bike", text: "Register Bike" },
    { href: "Return Policy", text: "Return Policy" },
    { href: "Shipping Info", text: "Shipping Info" },
    { href: "Warranty", text: "Warranty" },
  ];

  const links2 = [
    { href: "All Electric Bike", text: "All Electric Bike" },
    { href: "Accessories", text: "Accessories" },
    { href: "Gift Cards", text: "Gift Cards" },
    { href: "Promotions", text: "Promotions" },
  ];

  const links3 = [
    { href: "/aboutus", text: "About Us" },
    { href: "/contact", text: "Contact" },
    { href: "/blog", text: "Blog" },
    { href: "/videos", text: "Videos" },
  ];

  const Footerlogo = [
    { src: "/images/Vector.svg", alt: "Twitter Logo" },
    { src: "/images/Vector1.svg", alt: "Linkedin Logo" },
    { src: "/images/Vector2.svg", alt: "Facebook Logo" },
    { src: "/images/Vector3.svg", alt: "Github Logo" },
    { src: "/images/Vector4.svg", alt: "Github Logo" },
  ];

  return (
    <div className="md:w-full  border-2 ">
      <div className=" md:w-full translate-y-[100%] flex items-center justify-center ">
        <div className="md:w-[80%] md:h-[260px] md:px-[32px] md:flex items-center text-left md:gap-[32px] bg-primary rounded-md mx-auto">
          <div className="md:w-[588px] md:h-[132px]  ">
            <h2 className="text-white text-[30px] leading-[48px] font-[600]">
              Get updates on new gear and <br />
              discounts
            </h2>
            <p className="text-white text-[18px] leading-[24px] font-[400]">
              Stay up to date on new and exciting things available to you soon!
            </p>
          </div>
          <div className="md:w-[476px] md:h-[86px] md:flex flex-col item-center justify-around gap-4 relative bottom-8">
            <form className="gap-x-2 flex">
              <input
                type="email"
                placeholder="Email"
                className="py-[10px] px-10 placeholder:text-white placeholder:text-left rounded-md mt-1 bg-transparent outline-white outline outline-[1px] md:ml-2"
              />
              <input
                type="submit"
                className="bg-neutral800 text-white px-5 py-[10px] rounded-md md:mt-1"
              />
            </form>
            <p className="text-white text-[14px] md:leading-[20px] font-[400] md:ml-2">
              We care about your data in our privacy policy
            </p>
          </div>
        </div>
      </div>
      <div className="md:max-w-full bg-neutral800 md:h-[520px] md:flex items-center justify-center md:mt-[10%] md:-mb-[10%]">
        <div className="md:w-[80%] md:h-[212px] mx-auto md:flex items-center justify-around  relative ">
          {/* Footer Logo Section   */}
          <div className="flex flex-col md:w-[240px] md:h-[132px] gap-[32px] items-center justify-center">
            <div className="flex items-center gap-x-2">
              <Image
                src={"/images/Logofooter.png"}
                alt=""
                width={40}
                height={40}
                className="z-10"
              />
              <h2 className="text-primary text-[24px] font-[600] inline">
                ElectoBike
              </h2>
            </div>
            <p className="font-[400] text-[14px] md:leading-[20px] text-neutral400 text-left">
              Design amazing digital <br /> experiences that create more
              <br /> happy in the world.
            </p>
          </div>
          {/* Footer Second Support Section */}
          <div className="md:w-[137px] md:h-[212px]  relative">
            <ul className="md:flex items-start gap-y-[14px] flex-col">
              <h5 className="text-neutral400 text-[14px] leading-[18px] font-[600]">
                Support
              </h5>
              {Links.map((link) => (
                <li
                  key={link.href}
                  className="font-[600] text-[14px] leading-[18px] text-neutral200 hover:text-primary"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Footer Third Section Electric Section  */}
          <div className="md:w-[102px] md:h-[155px]  -translate-y-7">
            <ul className="md:flex items-start gap-y-[14px] flex-col">
              <h5 className="text-neutral400 text-[14px] leading-[18px] font-[600]">
                Electric Bike
              </h5>
              {links2.map((link) => (
                <li
                  key={link.href}
                  className="font-[400] text-[14px] leading-[20px] text-neutral200 hover:text-primary"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Footer Fourth Section Company Section  */}
          <div className="md:w-[102px] md:h-[155px]  -translate-y-7">
            <ul className="md:flex items-start gap-y-[14px] flex-col">
              <h5 className="text-neutral400 text-[14px] leading-[18px] font-[600]">
                Company
              </h5>
              {links3.map((link) => (
                <li
                  key={link}
                  className="font-[400] text-[14px] leading-[20px] text-neutral200 hover:text-primary"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Last Contact Section footer */}
          <div className="md:-mt-[110px] md:py-5 ">
            <h5 className="text-neutral400 text-[14px] leading-[18px] font-[600]">
              Contact
            </h5>
            <p className="md:flex md:gap-2 font-[400] text-[14px] leading-[20px] text-neutral200 md:my-3 md:pt-3">
              <Image
                src={"/images/phone-call.svg"}
                alt="Phone Icon"
                width={15}
                height={15}
              />
              +92 3052537941
            </p>
            <p className="md:flex md:gap-2 font-[400] text-[14px] leading-[20px] text-neutral200 md:my-3">
              <Image
                src={"/images/Icon.svg"}
                alt="Email Icon"
                width={15}
                height={15}
              />
              furqanbaber69@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className=" z-10 w-full p-10 bg-neutral800 md:h-[120px] md:-mt-10 md:mb-5">
        <div className="md:w-[80%] mx-auto border-t border-neutral400 md:flex md:items-center md:justify-between">
          <p className="font-[400] text-[14px] leading-[20px] text-neutral400 md:mt-2">
            &#169; 2077 ElectoBike. All right reserved.
          </p>
          <ul className="md:flex items-center gap-x-4 md:mt-2">
            {Footerlogo.map((icon) => (
              <li key={icon.src} className="">
                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
