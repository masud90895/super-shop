import React from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../Assists/slider1.webp";
import img2 from "../../Assists/slider2.webp";
import img3 from "../../Assists/slider3.webp";
import img4 from "../../Assists/slider4.webp";
import img5 from "../../Assists/slider5.webp";
import img6 from "../../Assists/slider6.webp";
import img7 from "../../Assists/slider7.webp";
import img8 from "../../Assists/slider8.webp";
import "./Banner.css";

const Banner = () => {
  const slider = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <>
      <Carousel showThumbs={false} autoPlay infiniteLoop className="w-[90%]  mt-10 mx-auto">
        {slider.map((sl, i) => (
          <div className="lg:h-[500px]" key={i}>
            <img className="h-full" src={sl} />
          </div>
        ))}
      </Carousel>

      <div className="flex lg:mx-[96px] mx-2 my-6">
        <div>
          <h1 className="w-36 py-2 btn--doar">Latest News</h1>
        </div>
        <Marquee gradient={false} className="bg-gray-100">
          <h1 className="mr-16">
          • নতুন রুপে,নতুন অঙ্গীকে সুপার-শপ
          </h1>
          
          <h1 className="mr-16">
           • ঠাকুরগাঁও গৃহস্থ বাড়ির খাসির মাংস এখন সুপার-শপে!
          </h1>
          <h1 className="mr-16">
           • সুপার শপে পাবেন সকল প্রকার পণ্য
          </h1>
          <h1 className="mr-16">
           • আমাদের রয়েছে সারা দেশে ১০ টির ও বেশি আউটলেট
          </h1>
          <h1 className="mr-16">
           • নতুন গ্রাহকদের জন্য রয়েছে ৫০% Discounts
          </h1>
        </Marquee>
      </div>
    </>
  );
};

export default Banner;
