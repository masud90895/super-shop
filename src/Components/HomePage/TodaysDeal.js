import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';

const TodaysDeal = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todayDeals")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);
  console.log(deals);
  return (
    <div className="mt-8 lg:mx-[100px]">
      <h1>Today's Deals</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        {deals?.map((deal) => (
          <div
            key={deal._id}
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
        ))}
      </div>
    </div>
  );
};

export default TodaysDeal;
