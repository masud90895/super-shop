import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { AiOutlineRollback } from "react-icons/ai";
import logo from "../Assists/logo.png";
import { toast } from "react-hot-toast";

const DeshBoardLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(false);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout()
      .then((result) => {
        toast("LogOut!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#FF0000",
            color: "#fff",
          },
        });
        navigate("../login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    fetch(`https://super-shop-server.vercel.app/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserRole(data))
      .catch((err) => console.log(err));
  }, [user?.email]);


  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
              <div>
                <Link to="/" className="-mx-6 px-6 py-4">
                  <div title="home">
                    <img src={logo} className="w-32" alt="tailus logo" />
                  </div>
                </Link>

                <div className="mt-8 text-center">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://cdnb.artstation.com/p/assets/images/images/002/036/123/large/pablo-munoz-gomez-zbg-3d-avatar.jpg"
                    }
                    alt=""
                    className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                  />
                  <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                    {user?.displayName}
                  </h5>
                  <span className="hidden text-gray-400 lg:block">
                    {userRole?.role}
                  </span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                  <li>
                    <NavLink
                      to="/deshboard"
                      aria-label="dashboard"
                      className={({ isActive }) =>
                        `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                          ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                          : "text-gray-600"
                        }`
                      }
                    >
                      <svg
                        className="-ml-1 h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                          className="fill-current text-cyan-400  "
                        ></path>
                        <path
                          d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                          className="fill-current text-cyan-200 group-hover:text-cyan-300"
                        ></path>
                        <path
                          d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                          className="fill-current group-hover:text-sky-300"
                        ></path>
                      </svg>
                      <span className="-mr-1 font-medium">Dashboard</span>
                    </NavLink>
                  </li>

                  {userRole?.role === "admin" && (
                    <li>
                      <NavLink
                        to="allseller"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          All Seller
                        </span>
                      </NavLink>
                    </li>
                  )}
                  {userRole?.role === "admin" && (
                    <li>
                      <NavLink
                        to="allbuyer"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          All Buyer
                        </span>
                      </NavLink>
                    </li>
                  )}
                  {userRole?.role === "admin" && (
                    <li>
                      <NavLink
                        to="sellerrequest"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Seller Request
                        </span>
                      </NavLink>
                    </li>
                  )}
                  {userRole?.role === "admin" && (
                    <li>
                      <NavLink
                        to="reportedproduct"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Reported Products
                        </span>
                      </NavLink>
                    </li>
                  )}
                  {(userRole?.role === "seller" || userRole?.role === "admin") && (
                    <li>
                      <NavLink
                        to="addproducts"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Add Products
                        </span>
                      </NavLink>
                    </li>
                  )}
                  {userRole?.role === "seller" && (
                    <li>
                      <NavLink
                        to="myproducts"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          My Products
                        </span>
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>

              <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button
                  onClick={handleLogOut}
                  className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="group-hover:text-gray-700">Logout</span>
                </button>
              </div>
            </aside>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full h-full absolute z-40  transform  translate-x-0 "
                : "   w-full h-full absolute z-40  transform -translate-x-full"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
              onClick={() => setShow(!show)}
            />
            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
              <aside className="   px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300  lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                  <div className="-mx-6 px-6 py-4">
                    <Link to="/" title="home">
                      <img src={logo} className="w-32" alt="tailus logo" />
                    </Link>
                  </div>

                  <div className="mt-8 text-center">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://cdnb.artstation.com/p/assets/images/images/002/036/123/large/pablo-munoz-gomez-zbg-3d-avatar.jpg"
                      }
                      alt=""
                      className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                    />
                    <h5 className=" mt-4 text-xl font-semibold text-gray-600 lg:block">
                      {user?.displayName}
                    </h5>
                    <span className=" text-gray-400 lg:block">
                      {userRole?.role}
                    </span>
                  </div>

                  <ul className="space-y-2 tracking-wide mt-8">
                    <li>
                      <NavLink
                        to="../deshboard"
                        aria-label="dashboard"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          className="-ml-1 h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                            className="fill-current text-cyan-400  "
                          ></path>
                          <path
                            d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                            className="fill-current text-cyan-200 group-hover:text-cyan-300"
                          ></path>
                          <path
                            d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                            className="fill-current group-hover:text-sky-300"
                          ></path>
                        </svg>
                        <span className="-mr-1 font-medium">Dashboard</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="allseller"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          All Seller
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="allbuyer"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                            clipRule="evenodd"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          All Buyer
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="sellerrequest"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                          />
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Seller Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="reportedproduct"
                        className={({ isActive }) =>
                          `relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                            : "text-gray-600"
                          }`
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className="fill-current text-gray-300 group-hover:text-cyan-300"
                            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                          />
                          <path
                            className="fill-current text-gray-600 group-hover:text-cyan-600"
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="group-hover:text-gray-700">
                          Reported Products
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="group-hover:text-gray-700">Logout</span>
                  </button>
                </div>
              </aside>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}
          <div className="w-full">
            {/* Navigation starts */}
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow  z-10 ">
              <div className="hidden lg:flex w-full pr-6 lg:mx-[80px]">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                  <div className="relative w-full">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
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
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                      </svg>
                    </div>
                    <input
                      className="border border-gray-100 focus:outline-none focus:border-purple-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-1/2 hidden lg:flex">
                  <div className="w-full flex items-center pl-8 justify-end">
                    <div className="h-full w-20 flex items-center justify-center border-r border-l">
                      <div className="relative cursor-pointer text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                      </div>
                    </div>
                    <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-messages"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                      </svg>
                    </div>
                    <div
                      className="flex items-center relative cursor-pointer"
                      onClick={() => setProfile(!profile)}
                    >
                      <div className="rounded-full">
                        {profile ? (
                          <ul className="p-2 w-[150px] border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                            <li className="flex w-full justify-between text-gray-600 hover:text-purple-700 cursor-pointer items-center">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-user"
                                  width={18}
                                  height={18}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <circle cx={12} cy={7} r={4} />
                                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span className="text-sm ml-2">My Profile</span>
                              </div>
                            </li>
                            <Link to="/">
                              <li className="flex w-full justify-between text-gray-600 hover:text-purple-700 cursor-pointer items-center mt-2">
                                <div className="flex items-center">
                                  <AiOutlineRollback />
                                  <span className="text-sm ml-2">Go Back </span>
                                </div>
                              </li>
                            </Link>
                            <li
                              onClick={handleLogOut}
                              className="flex w-full justify-between text-gray-600 hover:text-purple-700 cursor-pointer items-center mt-2"
                            >
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-logout"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                                <span className="text-sm ml-2">Sign out</span>
                              </div>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                        <div className="relative">
                          <img
                            className="rounded-full h-10 w-10 object-cover"
                            src={
                              user?.photoURL
                                ? user.photoURL
                                : "https://cdnb.artstation.com/p/assets/images/images/002/036/123/large/pablo-munoz-gomez-zbg-3d-avatar.jpg"
                            }
                            alt="avatar"
                          />
                          <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                        </div>
                      </div>
                      <p className="text-gray-800 text-sm mx-3">
                        {user?.displayName}
                      </p>
                      <div className="cursor-pointer text-gray-600">
                        <svg
                          aria-haspopup="true"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
            </nav>
            {/* Navigation ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="lg:mx-[80px]">
              {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeshBoardLayout;
