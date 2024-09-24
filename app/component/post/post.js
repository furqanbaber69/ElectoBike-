import Image from "next/image";

const PostCard = ({ cardimage, cardheading, cardtext }) => {
  return (
    <div className="md:w-[388px] md:h-[386px] border-[1px]  rounded-t-xl flex flex-col items-center justify-between">
      <Image
        src={cardimage}
        alt="Post Image"
        width={388}
        height={238}
        objectFit="cover"
        className="rounded-t-xl"
      />
      <div className="md:text-left md:w-[356px] md:h-[132px] mx-auto md:flex flex-col items-start justify-between ">
        <div className="md:flex items-center justify-between md:w-[336px] md:h-[30px]">
          <h3 className="font-[500] text-[18px] leading-[24px] text-left text-neutral800">
            {cardheading}
          </h3>
          {/* <h5 className="bg-[url(/images/cardarrowpost.svg)] md:w-10 md:h-10 bordder-2"></h5> */}
          <Image
            src={"/images/card-arrow.png"}
            alt=" arrow Icon"
            width={22}
            height={22}
            className=""
          />
        </div>
        <p className="text-neutral700 font-[400] text-[14px] leading-[20px] nd:text-left md:mb-3 ">
          {cardtext}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
