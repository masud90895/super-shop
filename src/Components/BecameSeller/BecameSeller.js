import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./BecameSeller.css";

const BecameSeller = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleBecameSeller = (e) => {
    e.preventDefault();

    if (!user?.email) {
      return toast.error("please login first");
    }

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const number = form.number.value;
    const brand = form.brand.value;
    const address = form.address.value;
    const recoveryEmail = form.recoveryEmail.value;
    const altPhone = form.altPhone.value;

    const data = {
      name: firstName + " " + lastName,
      email,
      number,
      brand,
      address,
      recoveryEmail,
      altPhone,
      role: "unknown",
    };
    fetch("https://supershop-server.vercel.app/sellerRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result?.status === 401) {
          return toast.error(result?.message);
        }
        toast.success(result.message);
        form.reset();
      });
  };
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="xl:w-10/12 w-full px-8">
          <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
            <div className="w-52 h-16 relative md:mt-0 mt-4">
              <img
                loading="lazy"
                src="https://i.ibb.co/DwNs7zG/Steps.png"
                alt="step1"
                className="w-full h-full"
              />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className="w-full text-sm font-medium leading-4 text-white">
                  All Ready User
                </p>
                <p className="w-full text-xs mt-1 leading-none text-white">
                  description of step 1
                </p>
              </div>
            </div>
            <div className="w-52 h-16 relative md:mt-0 mt-4">
              <img
                loading="lazy"
                src="https://i.ibb.co/wNZ4nzy/Steps2.png"
                alt="step2"
                className="w-full h-full"
              />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className="w-full text-sm font-medium leading-4 text-indigo-800">
                  Seller Form
                </p>
                <p className="w-full text-xs mt-1 leading-none text-indigo-800">
                  Some info about you
                </p>
              </div>
            </div>
            <div className="w-52 h-16 relative md:mt-0 mt-4">
              <img
                loading="lazy"
                src="https://i.ibb.co/c2k4Gbr/Steps3.png"
                alt="step3"
                className="w-full h-full"
              />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className="w-full text-sm font-medium leading-4 text-gray-700">
                  Onboarding
                </p>
                <p className="w-full text-xs mt-1 leading-none text-gray-500">
                  Get accquainted
                </p>
              </div>
            </div>
            <div className="w-52 h-16 relative lg:mt-0 mt-4">
              <img
                loading="lazy"
                src="https://i.ibb.co/XCdjrhm/Steps4.png"
                alt="step4"
                className="w-full h-full"
              />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className="w-full text-sm font-medium leading-4 text-gray-700">
                  Submit To Review{" "}
                </p>
                <p className="w-full text-xs mt-1 leading-none text-gray-500">
                  Resources to begin
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleBecameSeller} className="xl:px-24">
            <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>

                <p className="text-sm text-gray-800 pl-3">
                  We take privacy issues seriously. You can be sure that your
                  personal data is securely protected.
                </p>
              </div>
              <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                <svg
                  aria-label="Close this banner"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z"
                    fill="#79808F"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
              <div className="w-80">
                <div className="flex items-center">
                  <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Personal Information
                  </h1>
                </div>
                <p className="mt-4 text-sm leading-5 text-gray-600">
                  Information about the section could go here and a brief
                  description of how this might be used.
                </p>
              </div>
              <div>
                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div className="md:w-64">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="firstName"
                    >
                      First name
                    </label>
                    <input
                      type="name"
                      tabIndex="0"
                      name="firstName"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="firstName"
                      placeholder="First name..."
                      required
                    />
                  </div>
                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Last name
                    </label>
                    <input
                      type="name"
                      tabIndex="0"
                      name="lastName"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="lastName"
                      placeholder="Last name..."
                      required
                    />
                  </div>
                </div>
                <div className="md:flex items-center lg:ml-24 mt-8">
                  <div className="md:w-64">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="emailAddress"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      tabIndex="0"
                      name="email"
                      defaultValue={user?.email}
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="emailAddress"
                      placeholder="youremail@gmail.com"
                      readOnly
                    />
                  </div>
                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="phone"
                    >
                      Phone number
                    </label>
                    <input
                      type="name"
                      tabIndex="0"
                      name="number"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="phone"
                      placeholder="123-1234567"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div className="w-80">
                <div className="flex items-center">
                  <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                    Security
                  </h1>
                </div>
                <p className="mt-4 text-sm leading-5 text-gray-600">
                  Information about the section could go here and a brief
                  description of how this might be used.
                </p>
              </div>
              <div>
                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                  <div className="md:w-64">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="brand"
                    >
                      Brand Name
                    </label>
                    <input
                      type="name"
                      tabIndex="0"
                      name="brand"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="password"
                      placeholder="Enter your Brand Name"
                      required
                    />
                  </div>
                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="securityCode"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      tabIndex="0"
                      name="address"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby=""
                      placeholder="Enter your Address"
                      required
                    />
                  </div>
                </div>
                <div className="md:flex items-center lg:ml-24 mt-8">
                  <div className="md:w-64">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="recoverEmail"
                    >
                      Recovery Email address
                    </label>
                    <input
                      type="name"
                      tabIndex="0"
                      name="recoveryEmail"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="recoveryEmail"
                      placeholder="Your recovery email"
                      required
                    />
                  </div>
                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="altPhone"
                    >
                      Alternate phone number
                    </label>
                    <input
                      type="name"
                      tabIndex="0"
                      name="altPhone"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                      aria-labelledby="altPhone"
                      placeholder="Your alternate phone number"
                      required
                    />
                  </div>
                </div>
                {/* <div className='flex items-center text-center'>
                                    <button className='btn font-normal  text-center p-2'>Submit</button>
                                    </div> */}

                {/* test  */}
                <button type="submit" className="wrapper mx-auto">
                  <a className="cta mt-12">
                    <span className="font-serif span">SUBMIT</span>
                    <span className="span">
                      <svg
                        width="66px"
                        height="43px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="arrow"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <path
                            className="one"
                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                          ></path>
                          <path
                            className="two"
                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                          ></path>
                          <path
                            className="three"
                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                            fill="#FFFFFF"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </button>

                {/* test  */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BecameSeller;
