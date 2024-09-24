import React from "react";

import Hero from "./component/hero/hero";
// import Card from "./component/card/card";
import PerfectEBike from "./component/perfectebike/perfect";
import CardSection from "./component/ebikecardsection/cardsection";
import RiderType from "./component/typeofrider/ridertype";
import YourEBike from "./component/yourebike/yourebike";
import CalendarComponent from "./component/calender/calender";
import Blog from "./component/blog/blog";
import FAQs from "./component/faqs/faq";

const Home = () => {
  return (
    <div className="max-w-full max-h-full">
      <Hero />
      <PerfectEBike />
      <CardSection />
      <RiderType />
      <YourEBike />
      <CalendarComponent />
      <Blog />
      <FAQs />
    </div>
  );
};

export default Home;
