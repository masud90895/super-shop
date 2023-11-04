import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`https://super-shop-server.vercel.app/addToCart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user?.email]);
  useEffect(() => {
    fetch(`https://super-shop-server.vercel.app/tackOrder?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  console.log("myProfile", user);
  console.log("myProfile", cart);
  return (
    <>
      <div className="flex items-center justify-center w-full py-8">
        {/* Card code block start */}
        <div className="bg-white   shadow rounded">
          <div className="relative ">
            <img
              className="h-56 shadow rounded-t w-full object-cover  object-center"
              src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1800&t=st=1672838391~exp=1672838991~hmac=c3dad3160026e3413889824d7454321bd0b9b60f87382f71345f6a15deabb1bd"
              alt=""
            />
            <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-yellow-700">
              <img
                className="w-full h-full overflow-hidden object-cover rounded"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1672838464~exp=1672839064~hmac=ccd0beb334d707328144727ba3d0d2d612410c91679682487c98ac58385e2d7c"
                }
                alt=""
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="pt-3 mt-16 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className="xl:pr-16 w-full xl:w-2/3">
                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                  <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800   font-medium tracking-normal">
                    {user?.displayName}
                  </h2>
                  <div className="text-sm bg-purple-700  text-white px-5 py-1 font-normal rounded-full">
                    {order?.length > 2 ? "Pro" : "New User"}
                  </div>
                </div>
                <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600   leading-5">
                  HI, I am{" "}
                  <span className="text-purple-600">{user?.displayName}</span> .{" "}
                  <br /> I really enjoyed to visit Super Shop , Also Happy To by
                  product from them
                </p>
              </div>
              <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-gray-600   font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    82
                  </h2>
                  <p className="text-gray-800   text-sm xl:text-xl leading-5">
                    Reviews
                  </p>
                </div>
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-gray-600   font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    {order?.length}
                  </h2>
                  <p className="text-gray-800   text-sm xl:text-xl leading-5">
                    Orders
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-600   font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    {cart?.length}
                  </h2>
                  <p className="text-gray-800   text-sm xl:text-xl leading-5">
                    Carts
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-2/3 justify-center text-lg  md:pl-6">
                <div className="text-lg">
                  <h1>
                    Email :{" "}
                    <span className="text-purple-600">{user?.email}</span>
                  </h1>
                </div>
                <div>
                  Created Time :{" "}
                  <span className="text-purple-600">
                    {user?.metadata?.creationTime?.replace("GMT", "")}
                  </span>
                </div>
                <div>
                  Last Sign in :{" "}
                  <span className="text-purple-600">
                    {user?.metadata?.lastSignInTime?.replace("GMT", "")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card code block end */}
      </div>
    </>
  );
};

export default MyAccount;
