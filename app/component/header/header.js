"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CartSidebar from "../cart/cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart sidebar state

  const cartRef = useRef();

  const navlinks = [
    { href: "/", text: "Ebikes Menu" },
    { href: "/bookyourtestridetoday", text: "Book Your Test Ride Today" },
    { href: "/rental-an-ebikes", text: "Rental An Ebike" },
    { href: "/fullserviceandmobile", text: "Full Service And Mobile Assembly" },
  ];
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleclick = (e) => {
      console.log(e);
    };
    document.body.addEventListener("click", handleclick);
    console.log(cartRef);

    return () => {
      // document.body.removeEventListener("click" handleclick);
    };
  }, []);

  return (
    <div className="max-w-full ">
      <div className="bg-primaryextradark max-w-full text-center md:flex items-center justify-between">
        <h2 className="text-white text-[12px] font-[400] leading-[18px] md:mx-auto">
          Amazing discounts on top-quality Ebike! Shop now and save big. Limited
          time offer.
          <span className="cursor-pointer font-[500] text-[12px] leading-[18px] text-primary">
            Buy Now
          </span>
        </h2>
      </div>
      <div className="bg-neutral50 max-w-full md:h-[84px] md:py-4 md:px-[120px] gap-[64px] flex items-center justify-center mx-auto">
        <div className="md:flex w-[265px] items-center ">
          <Link href="/" className="md:flex gap-x-2">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={65}
              height={40}
              className="cursor-pointer"
            />
            <h1 className="text-primarydark text-[27px] font-[500] cursor-pointer">
              ELECTOBIKE
            </h1>
          </Link>
        </div>

        <ul className="md:flex items-center md:py-[16px] md:w-[778px] md:h-[52px] justify-around ">
          {navlinks.map((link) => (
            <li
              key={link.href}
              className="space-x-3 font-[400] text-[14px] leading-[20px] text-neutral hover:underline decoration-primary decoration-[2px]"
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>

        <div className="md:flex items-center justify-center md:w-[120px] md:h-[20px] gap-[24px]">
          <Image
            src="/images/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <Image
            src="/images/user.svg"
            alt="User Icon"
            width={20}
            height={20}
          />
          <Image
            src="/images/shoppingcart.svg"
            alt="Cart Icon"
            width={20}
            height={20}
            className="cursor-pointer"
            ref={cartRef}
            onClick={toggleCart} // Toggle cart sidebar when clicked
          />
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default Header;
