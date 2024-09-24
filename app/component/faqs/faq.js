"use client";
import { useState } from "react";
import Image from "next/image";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "Do I need a License to ride an Electric Bicycle?",
      answer:
        "Yes, electric bicycles are faster than normal bicycles when riding in the electric-assisted mode and can go up to 25km/h speed. One can operate them as a regular bicycle by turning off the electric assist, and they will be as fast as a regular bicycle.",
    },
    // Repeat the same structure for other FAQs
    {
      question: "How fast can an electric bicycle go?",
      answer:
        "Electric bicycles can reach speeds of up to 25-28 km/h depending on the model and electric assist level.",
    },
    {
      question: "Are electric bikes eco-friendly?",
      answer:
        "Yes, electric bicycles are much more eco-friendly compared to motorized vehicles as they emit no direct emissions.",
    },
    {
      question: "How long does it take to charge an electric bike?",
      answer:
        "Charging times vary, but most electric bicycles take 4-6 hours for a full charge.",
    },
    {
      question: "What is the range of an electric bicycle?",
      answer:
        "The range depends on battery size, rider weight, terrain, and assist level, but most electric bikes offer between 30-70 kilometers on a single charge.",
    },
  ];

  return (
    <div className="md:h-[856px]">
      <div className="md:w-[900px] md:h-[118px] mx-auto md:my-12 text-center">
        <h3 className="font-semibold text-[40px] leading-[50px] text-neutral800">
          <span className="text-primary">FAQs</span> For Electobike
        </h3>
        <p className="text-[18px] leading-[24px] font-[500] text-neutral700 text-center">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain <br />
          more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Loop through faqItems */}
      {faqItems.map((faq, index) => (
        <div
          key={index}
          className={`md:flex items-center justify-between md:w-[900px] mx-auto border-b-[1px] md:py-2 ${
            openIndex === index ? "md:flex-col" : ""
          }`}
        >
          <div className="flex justify-between md:w-[900px] md:h-[51px] items-center">
            <h5 className="font-medium text-[18px] leading-[24px] text-neutral800">
              {faq.question}
            </h5>

            {/* Toggle icon */}
            <Image
              src="/images/faqplusicon.svg"
              alt="plus icon"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => toggle(index)}
            />
          </div>

          {/* FAQ Answer - Rendered when isopen is true */}
          {openIndex === index && (
            <div className="md:w-[900px] md:h-[74px] md:flex items-center mt-6">
              <p className="mt-2 text-neutral800 py-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
