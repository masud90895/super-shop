import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BsSearch, BsCameraReelsFill } from "react-icons/bs";
import "./Navbae.css";
import companyLogo from "../../Assists/logo.png";
import orderTrack from "../../Assists/tracking.svg";
import qr from "../../Assists/frame.png";

const Navbar = () => {
  const [language, setLanguages] = useState(false);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="">
      <div className="bg-gray-200 lg:block hidden ">
        <div className=" flex font-normal py-2 justify-evenly text-black mx-[350px]">
          {/* <label className="hover:text-purple-900" htmlFor="my-modal">
            SAVE MORE ON APP
          </label> */}
          <Link to="/" className="hover:text-purple-900">
            Home
          </Link>
          <div className="relative">
            <div
              className=" cursor-pointer flex justify-between border rounded "
              onClick={() => setShowMenu(!showMenu)}
            >
              <p> SAVE MORE ON APP</p>
            </div>
            {showMenu && (
              <ul className="visible z-50 transition duration-300 opacity-100 border border-gray-400 bg-white   shadow rounded mt-2 py-1 w-96 absolute p-2">
                <p className="text-center text-lg">
                  Download the App for the best experience
                </p>
                <div className="mt-2 flex gap-3">
                  <img className="w-24 " src={qr} alt="" />
                  <ul className="text-[#92278f]">
                    <p>Super Shop through our app to enjoy:</p>
                    <li className="decoration-dotted">• Exclusive Deals</li>
                    <li>• Personalised recommendations</li>
                    <li>• Find out first </li>
                  </ul>
                </div>
              </ul>
            )}
          </div>
          <Link to='becameseller' className="hover:text-purple-900">BECOME A SELLER</Link>
          <Link className="hover:text-purple-900">CAMPAIGN</Link>
          <Link className="hover:text-purple-900">TRACK MY ORDER</Link>
          <button
            className="underline hover:text-purple-900"
            onClick={() => setLanguages(!language)}
          >
            {language ? "English" : "বাংলা"}
          </button>
          <Link to="/about" className="hover:text-purple-900">
            ABOUT US
          </Link>
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
                <Link
                  to="/becameseller"
                  className=" text-xl text-white bg-purple-900 mb-2 "
                >
                  Became a Seller
                </Link>
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
            {/* test  */}
            <div className="relative">
              <div
                className=" flex justify-between  rounded"
                onClick={() => setShow(!show)}
              >
                <div className="border border-gray-700 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-8"
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
              </div>
              {show && (
                <ul className="visible z-50 border transition duration-300 opacity-100 bg-white dark:bg-gray-800  shadow rounded mt-2 py-1 w-48 absolute ">
                  <Link to='becameseller' className="cursor-pointer text-white bg-purple-700  text-sm leading-3 tracking-normal py-3 px-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-clipboard"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                      <rect x={9} y={3} width={6} height={4} rx={2} />
                    </svg>
                    <span className="ml-2 font-normal">BECOME A SELLER</span>
                  </Link>
                  <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-device-mobile"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={7} y={4} width={10} height={16} rx={1} />
                      <line x1={11} y1={5} x2={13} y2={5} />
                      <line x1={12} y1={17} x2={12} y2="17.01" />
                    </svg>
                    <Link to="/" className="ml-2">
                      Home
                    </Link>
                  </li>
                  <li className="cursor-pointer text-gray-600   text-sm leading-3 tracking-normal py-3 px-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-clipboard"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                      <rect x={9} y={3} width={6} height={4} rx={2} />
                    </svg>
                    <span className="ml-2 font-normal">My Account</span>
                  </li>
                  <li className="cursor-pointer  text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-book"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                      <line x1={3} y1={6} x2={3} y2={19} />
                      <line x1={12} y1={6} x2={12} y2={19} />
                      <line x1={21} y1={6} x2={21} y2={19} />
                    </svg>
                    <span className="ml-2 font-normal">SAVE MORE ON APP</span>
                  </li>

                  <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                    <span className="ml-2 font-normal">CAMPAIGN</span>
                  </li>
                  <li>
                    <hr className="border-gray-200 dark:border-gray-700 my-1" />
                  </li>
                  <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-device-mobile"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={7} y={4} width={10} height={16} rx={1} />
                      <line x1={11} y1={5} x2={13} y2={5} />
                      <line x1={12} y1={17} x2={12} y2="17.01" />
                    </svg>
                    <span className="ml-2">TRACK MY ORDER</span>
                  </li>
                  <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-tag"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                      <circle cx={9} cy={9} r={2} />
                    </svg>
                    <span className="ml-2">ABOUT US</span>
                  </li>
                  <li className="cursor-pointer text-gray-600  text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                    <span className="ml-2">Sign Out</span>
                  </li>
                </ul>
              )}
            </div>
            {/* end  */}
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
