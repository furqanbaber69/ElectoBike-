"use client";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/app/features/slices/productslices";

const Card = ({ productimage, producttitle, rating, count, price }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProducts(data)); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="md:w-[285px] md:h-[434px] rounded-md md:p-3 md:flex md:flex-col  md:gap-[16px] justify-center items-center bg-white border-[1px] mx-auto">
      <Image
        src={productimage}
        alt=""
        width={261}
        height={226}
        className="rounded"
      />
      <div className="md:w-[260px] md:h-[168px] flex md:flex-col items-center  gap-4">
        <p className="md:w-[260px] md:h-[48px] md:font-[500] md:text-[14px] md:leading-[24px] text-neutral800">
          {/* ECO BIKE MAX - India’s Best Value for Money E-Cycle */}
          {producttitle}
        </p>
        <div className="md:flex items-center gap-4 md:w-[260px]">
          <IoIosStarOutline color="orange" size={15} />
          {`(${rating})`} {count}
        </div>
        <div className="md:flex flex-col items-start  md:w-[261px] md:h-[84px] text-left mb-2 ">
          <h3 className="font-[600] text-[18px] md:leading-[24px] text-neutral800 text-left">
            {price}$
          </h3>
          <button className="md:px-[14px] bg-primary bg-opacity-5 gap-2 py-2 text-center font-[600] border-[1px] border-primary rounded-md text-[18px] md:leading-[24px] text-neutral800 md:w-[260px]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
