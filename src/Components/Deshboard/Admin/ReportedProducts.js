import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ReportedProducts = () => {
  const [reportedProduct, setReportedProduct] = useState([]);

  useEffect(() => {
    fetch("https://supershop-server.vercel.app/report")
      .then((res) => res.json())
      .then((data) => setReportedProduct(data));
  }, []);

  const handlereportedProduct = () => {
    toast.error("This Featured is disabled for security reasons");
  };

  console.log("reportedProduct", reportedProduct);
  return (
    <>
      <h1 className="text-4xl font-xl md:font-2xl my-3 font-serif">
        Reported Products
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {reportedProduct?.length > 0 ? (
          reportedProduct?.map((deal) => (
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
                <p className="bg-[#ff7a01]  -mt-36  absolute text-white p-1">
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
                  <div className="bg-red-600 py-1.5 px-6 rounded-full">
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
                      <h3 className=" text-xl font-semibold">৳{deal.price}</h3>
                      <del className=" text- font-semibold ml-5 text-red-600">
                        /৳{deal.mainPrice}
                      </del>
                    </div>
                  </div>

                  <div
                    onClick={handlereportedProduct}
                    style={{ border: "1px solid red" }}
                    className="button "
                    id="button-5"
                  >
                    <div
                      style={{ backgroundColor: "red" }}
                      id="translate"
                    ></div>
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-[50px]">
            <h1>No Reported Product Found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ReportedProducts;
