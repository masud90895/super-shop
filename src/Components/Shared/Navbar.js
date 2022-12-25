import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BsSearch, BsCameraReelsFill } from "react-icons/bs";
import "./Navbae.css";
import companyLogo from "../../Assists/logo.png";
import orderTrack from "../../Assists/tracking.svg";

const Navbar = () => {
  const [language, setLanguages] = useState(false);
  return (
    <div className="">
      <div className="bg-gray-200 lg:block hidden ">
        <div className=" flex font-normal py-2 justify-evenly text-black mx-[350px]">
          <Link className="hover:text-purple-900">SAVE MORE ON APP</Link>
          <Link className="hover:text-purple-900">BECOME A MERCHANT</Link>
          <Link className="hover:text-purple-900">CAMPAIGN</Link>
          <Link className="hover:text-purple-900">TRACK MY ORDER</Link>
          <button
            className="underline hover:text-purple-900"
            onClick={() => setLanguages(!language)}
          >
            {language ? "English" : "বাংলা"}
          </button>
          <Link className="hover:text-purple-900">PRESS RELEASE</Link>
          <div className="flex items-center gap-2 text-green-700">
            <span>
              <HiOutlinePhoneMissedCall className="zoom-in-out-box" />
            </span>
            <h1 className="cursor-pointer " title="+8801821286135">
              +8801821286135
            </h1>
          </div>
        </div>
      </div>
      {/* navbar 2nd  */}
      <div className="lg:flex hidden lg:block justify-around lg:mx-[350px] mt-1 ">
        <div>
          <img className="h-11" src={companyLogo} alt="" />
        </div>
        <div className="flex border border-gray-500 rounded-md ">
          <select className="select">
            <option>Products</option>
            <option>Store</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="input w-full max-w-md  "
          />
          <button className="p-4 bg-purple-700">
            <BsSearch className="text-white font-bold" />
          </button>
        </div>
        {/* navbar 3rd */}
        <div className="flex items-center gap-3">
          <img className="h-12" src={orderTrack} alt="" />
          <button className="p-1 text-white rounded-lg flex gap-2  hover:bg-red-800  bg-red-600 border-none ">
            <h1 className="flipchar flex gap-2">
              * Live <BsCameraReelsFill className="inline" />
            </h1>
          </button>
        </div>

        {/* navbar 4rt  */}
        <div>
          <p> Hello, Sign In /Sign Up</p>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="font-semibold ">
              My Account
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className=" text-xl text-white bg-purple-900 mb-2 ">
                  Became a Seller
                </button>
              </li>
              <hr />
              <li>
                <a>My Account</a>
              </li>
              <li>
                <a>My Wishlists</a>
              </li>
              <li>
                <a>My Orders</a>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobail responsive              */}
      <div className="lg:hidden mx-2 mt-2">
        <div className=" flex  justify-between">
          {/* drower  */}
          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {/* logo  */}
            <div>
              <img className="h-10" src={companyLogo} alt="" />
            </div>
          </div>

          <div className="flex gap-1 items-center">
            <img className="h-12" src={orderTrack} alt="" />
            <button className=" text-white rounded-lg p-2 h-9   hover:bg-red-800  bg-red-600 border-none ">
              <BsCameraReelsFill className="flipchar" />
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* mObail input  */}

        <div className="flex border border-gray-500 rounded-md m-2">
          <select className="select">
            <option>Products</option>
            <option>Store</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="input w-full max-w-md  "
          />
          <button className="p-4 bg-purple-700">
            <BsSearch className="text-white font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
