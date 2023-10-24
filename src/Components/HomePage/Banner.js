import React from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../Assists/1.jpg";
import img2 from "../../Assists/2.jpg";
import img3 from "../../Assists/3.jpg";
import img4 from "../../Assists/4.jpg";
import img5 from "../../Assists/5.jpg";
import img6 from "../../Assists/6.jpg";
import img7 from "../../Assists/7.jpg";
import img8 from "../../Assists/8.jpg";
import img9 from "../../Assists/9.jpg";
import img10 from "../../Assists/10.webp";
import img11 from "../../Assists/11.webp";
import "./Banner.css";

const Banner = () => {
  const slider = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  return (
    <>
      <Carousel showThumbs={false} autoPlay infiniteLoop className="w-[90%]  mt-10 mx-auto">
        {slider.map((sl, i) => (
          <div className="lg:h-[500px]" key={i}>
            <img loading="lazy" className="h-full" src={sl} alt="" />
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
