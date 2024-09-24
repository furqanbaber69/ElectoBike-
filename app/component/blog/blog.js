import PostCard from "../post/post";

const Blog = () => {
  const postcard = [
    {
      imagesrc: `/images/Image.png`,
      cardheading: "My Dream Cycling Tour",
      cardtext: `Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet `,
    },
    {
      imagesrc: `/images/post2.png`,
      cardheading: `Best Cycling Accessories`,
      cardtext: `Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet `,
    },
    {
      imagesrc: `/images/post3.png`,
      cardheading: `Cycling through The Night`,
      cardtext: `Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet `,
    },
    {
      imagesrc: `/images/post4.png`,
      cardheading: `My Dream Cycling Tour`,
      cardtext: `Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet `,
    },
    {
      imagesrc: `/images/post3.png`,
      cardheading: `My Dream Cycling Tour`,
      cardtext: `Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet `,
    },
    {
      imagesrc: `/images/post2.png`,
      cardheading: `My Dream Cycling Tour`,
      cardtext: `Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet `,
    },
  ];
  return (
    <div className="border-2 md:mt-2 md:h-[1144px] w-full">
      <div className="md:my-16">
        <h4 className="font-[600] text-[40px] leading-[50px] text-center text-neutral700">
          Latest <span className="text-primary ">Blog</span> post
        </h4>
        <p className="font-[400] text-[18px] leading-[24px] text-center text-neutral700">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more
          <br />
          users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {postcard.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-8 ">
            <PostCard
              cardimage={card.imagesrc}
              cardheading={card.cardheading}
              cardtext={card.cardtext}
            />
          </div>
        ))}
        <button className="bg-primary text-white md:w-[250px] md:h-[44px] rounded-lg">
          View all
        </button>
      </div>
    </div>
  );
};

export default Blog;
