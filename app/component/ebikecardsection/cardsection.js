"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Card from "../card/card";

const CardSection = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Assuming your Redux state structure is { products: { products: [...] } }
  const products = useSelector((state) => state.product.products);
  console.log(products);

  // Initialize limitedProducts based on showAllProducts state
  const limitedProducts = showAllProducts ? products : products.slice(0, 8);

  useEffect(() => {
    const handleclick = (e) => {
      console.log(e.target);
    };
    document.body.addEventListener("click", handleclick);
  }, []);

  const cardlink = [
    { src: "/images/pngwing.png", heading1: "MONTRA" },
    { src: "/images/pngwing.png", heading1: "GIANT" },
    { src: "/images/pngwing.png", heading1: "SILVERBACK" },
    { src: "/images/pngwing.png", heading1: "ELEMENT" },
  ];

  const checkbox = [
    { text: "Comfort" },
    { text: "Folding" },
    { text: "Light Troll" },
    { text: "Hunting/Fishing" },
    { text: "Full Suspension" },
  ];

  const uniqueIds = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8"];

  return (
    <div>
      <div className="w-full md:h-[90%]  md:mb-[48px] md:mx-auto bg-neutral50  md:pb-4">
        <h2 className="font-[600] font-lexendDeca text-[40px] leading-[50px] text-center mx-auto md:mt-[2%]">
          An Ebike for <span className="text-primary">Every</span> Type of
          <span className="text-primary"> Rider</span>
        </h2>
        <p className="text-center text-[18px] leading-[24px] font-[400] text-neutral700 md:w-[900px] mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="md:flex md:mt-[2%]">
          {cardlink.map((link, index) => (
            <div
              className="md:max-w-full text-center md:flex items-center justify-center rouonded-md mt-[calc(10%)] mx-auto   "
              key={index}
            >
              <div className="md:flex justify-center items-center flex-col  md:w-[256px] md:h-[149px] ">
                <Image
                  src={link.src}
                  alt="Bicycle Image"
                  width={246}
                  height={149}
                  className="mx-auto "
                />
                <div className="md:w-[285px] md:h-[270px] bg-gradient-to-b from-[rgba(249,250,251,0.5)] to-[#F9FAFB] md:py-6 rounded-b-lg ">
                  <p className="text-[30px] font-[600] leading-[48px] text-neutral800 text-center ">
                    {link.heading1}
                  </p>
                  <p className="font-[400] text-[14px] leading-[24px] text-neutral700 text-center ">
                    Bicycle
                  </p>
                  <Link href={"#"}>
                    <p className="bg-primary text-white rounded-lg py-3 md:flex items-center text-center justify-center md:w-[150px] mx-auto">
                      Explore
                      <Image
                        src={"/images/arrow-up-right.png"}
                        alt="Arrow Icon"
                        width={20}
                        height={20}
                      />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-[1200px] md:h-[56px] rounded-md border-1 md:p-[6px] gap-2 md:flex md:mt-[10%] mx-auto">
          <input
            type="button"
            placeholder="Best Seller"
            value={"Best Seller"}
            className="bg-primary md:w-[49%] md:h-[44px] rounded-md text-white md:shadow-[0px_1px_2px_0px_#1018280F]"
          />
          <input
            type="button"
            placeholder="Best Seller"
            value={"New Arrival"}
            className="bg-neutral200 md:w-[49%] md:h-[44px] rounded-md text-neutral400 md:py-[10px] md:px-[14px]"
          />
        </div>
        <div className="md:w-[1200px] md:h-[36px] md:flex gap-9  md:mx-auto md:mt-[2%]">
          <ul className="md:flex md:gap-5">
            {checkbox.map((text, index) => (
              <li
                key={index}
                className="bg-primary bg-opacity-5 cardinput space-x-2 flex items-center gap-x-2 md:border-[1px] border-primary md:w-[224px] md:h-[36px] rounded-md md:py-2 md:px-3 text-left "
              >
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                {text.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:grid md:grid-cols-4 gap-y-3 md:grid-rows-2 mt-4 justify-evenly items-center bg-neutral50">
          {limitedProducts.map((product, index) => (
            <Card
              key={index}
              productimage={
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              }
              producttitle={product.title}
              rating={product.rating.rate}
              price={product.price}
              count={product.rating.count}
            />
          ))}
          {!showAllProducts && (
            <button
              className="bg-primary text-white text-center rounded-md md:px-3 md:py-2 md:translate-x-[150%] md:my-3"
              onClick={() => setShowAllProducts(true)}
            >
              View All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
