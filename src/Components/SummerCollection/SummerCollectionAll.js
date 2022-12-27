import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SummerCollectionAll = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/summer")
        .then((res) => res.json())
        .then((data) => setDeals(data));
    }, []);
    return (
        <div className=" 2xl:container 2xl:mx-auto">
        <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
          <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
            Summer Collection{" "}
          </p>
        </div>
        <div className=" py-6 lg:px-20 md:px-6 px-4">
          <p className=" font-normal text-sm leading-3 text-gray-600 ">
            Home / Shop by Category / Summer Collection
          </p>
          <hr className=" w-full bg-gray-200 my-6" />
  
          <div className=" flex justify-between items-center">
            <div className=" flex space-x-3 justify-center items-center">
              <svg
                className=" cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 7.5H20.25"
                  stroke="#1F2937"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M3.75 12H20.25"
                  stroke="#1F2937"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M3.75 16.5H20.25"
                  stroke="#1F2937"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
              <p className=" font-normal text-base leading-4 text-gray-800">
                Filter
              </p>
            </div>
            <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
              Showing {deals.length} products
            </p>
          </div>
  
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {/* Card 1 */}
            {deals?.map((deal) => (
              <div
                key={deal._id}
                className="mx-2 w-72 lg:mb-0 mb-8 border shadow-lg"
              >
                <div>
                  <img
                  loading="lazy"
                    src={deal.image}
                    alt=""
                    className="w-full h-44 relative border"
                  />
                  <p className="bg-[#ff7a01]  -mt-36 z-50 absolute text-white p-1">
                    {deal.discount} % OFF
                  </p>
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-purple-700 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-white">{deal.storeName}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">
                        {deal.name.length > 22
                          ? deal.name.slice(0, 22) + "..."
                          : deal.name}
                      </h2>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 h-[120px]">
                      {deal.descriptions.length > 200
                        ? deal.descriptions.slice(0, 200) + "..."
                        : deal.descriptions}
                    </p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className=" py-4">
                      <div className="flex items-center mt-2">
                        <h3 className=" text-xl font-semibold">${deal.price}</h3>
                        <del className=" text- font-semibold ml-5 text-red-600">
                          /${deal.mainPrice}
                        </del>
                      </div>
                    </div>
  
                    <Link to={`../summer/${deal._id}`}>
                    <div className="button " id="button-5">
                      <div id="translate"></div>
                      <p >View Detail's</p>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
  
            {/* Card 1 Ends */}
          </div>
        </div>
      </div>
    );
};

export default SummerCollectionAll;