import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
  } from "pure-react-carousel";
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";

const ShareeCollection = () => {
    const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sharee")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);
    return (
        <div className="container mx-auto my-20 border-2 p-2">
       <div className="flex justify-between">
       <h1 className="text-2xl font-bold">Sharee's collections</h1>
       <Link className="text-[#92278f] underline">View All</Link>
       </div>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          isPlaying={true}
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={deals?.length}
          visibleSlides={5}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {deals.map((deal, i) => (
                    <Slide key={deal._id} index={i}>
                      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div
                          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                          style={{ backgroundImage: `url(${deal.image})` }}
                        ></div>
                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg border md:w-64 dark:bg-gray-800">
                          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                            {deal.name.length > 20
                              ? deal.name.slice(0, 20) + "..."
                              : deal.name}
                          </h3>

                          <div className=" px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <h1 className="font-bold text-gray-800 dark:text-gray-200">
                              ${deal.price}
                            </h1>
                            <h1>
                              <del>${deal.mainPrice} </del>{" "}
                              <span className="bg-[#ff7a01] text-white ml-3 p-1 rounded-md font-bold">
                                {" "}
                                {deal.discount}% OFF
                              </span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          isPlaying={true}
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={deals.length}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {
                    deals?.map((deal,i)=><Slide key={deal._id} index={i}>
                        <div
            className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
          >
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{ backgroundImage: `url(${deal.image})` }}
            ></div>
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg border md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {deal.name.length > 20
                  ? deal.name.slice(0, 20) + "..."
                  : deal.name}
              </h3>

              <div className=" px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <h1 className="font-bold text-gray-800 dark:text-gray-200">
                  ${deal.price}
                </h1>
                <h1>
                  <del>${deal.mainPrice} </del>{" "}
                  <span className="bg-[#ff7a01] text-white ml-3 p-1 rounded-md font-bold">
                    {" "}
                    {deal.discount}% OFF
                  </span>
                </h1>
              </div>
            </div>
          </div>
                      </Slide>)
                  }
                 
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          isPlaying={true}
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                 {
                    deals?.map((deal,i)=> <Slide key={deal._id} index={i}>
                        <div
            className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
          >
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{ backgroundImage: `url(${deal.image})` }}
            ></div>
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg border md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {deal.name.length > 20
                  ? deal.name.slice(0, 20) + "..."
                  : deal.name}
              </h3>

              <div className=" px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <h1 className="font-bold text-gray-800 dark:text-gray-200">
                  ${deal.price}
                </h1>
                <h1>
                  <del>${deal.mainPrice} </del>{" "}
                  <span className="bg-[#ff7a01] text-white ml-3 p-1 rounded-md font-bold">
                    {" "}
                    {deal.discount}% OFF
                  </span>
                </h1>
              </div>
            </div>
          </div>
                      </Slide>)
                 }
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
    );
};

export default ShareeCollection;