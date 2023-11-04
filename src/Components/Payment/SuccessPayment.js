import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuccessPayment = () => {
  const [show, setShow] = useState(true);
  const query = new URLSearchParams(window.location.search).get(
    "transactionId"
  );
  console.log(query);
  useEffect(() => { });
  const changeHandler = (e) => {
    const slider = document.getElementById("slider");
    slider.defaultValue = 0;
    const react1 = document.querySelector("#react1");
    const react2 = document.querySelector("#react2");
    const react3 = document.querySelector("#react3");
    const exp = document.querySelector("#exp");

    switch (parseInt(e.target.value)) {
      case 0:
        react1.style.display = "block";
        react2.style.display = "none";
        react3.style.display = "none";
        slider.classList.add("accent-red-500");
        slider.classList.remove("accent-blue-500");
        slider.classList.remove("accent-green-500");
        exp.innerText = "Bad";
        break;
      case 1:
        react2.style.display = "block";
        react1.style.display = "none";
        react3.style.display = "none";
        slider.classList.remove("accent-red-500");
        slider.classList.add("accent-blue-500");
        slider.classList.remove("accent-green-500");
        exp.innerText = "Good";
        break;
      case 2:
        react3.style.display = "block";
        react1.style.display = "none";
        react2.style.display = "none";
        slider.classList.remove("accent-blue-500");
        slider.classList.add("accent-green-500");
        exp.innerText = "Excellent";
        break;
      default:
        react1.style.display = "block";
        react3.style.display = "none";
        react2.style.display = "none";

        break;
    }
  };
  return (
    <>
      <div className="py-12 px-4">
        {show ? (
          <div className=" mx-auto container lg:max-w-[356px] md:max-w-[720px] max-w-[343px] py-8 px-4 bg-white shadow rounded-md border border-gray-600">

            <div className="w-full flex justify-center text-green-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-check"
                width={56}
                height={56}
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <h1 className="text-center text-gray-800   font-lg font-bold tracking-normal leading-tight mb-4">
              Payment Processing Successful
            </h1>
            <p className="mb-5 text-sm text-gray-600   text-center font-normal">
              Thank you for your payment. An automated payment receipt will be
              sent to your email. Check the action below for more details.
            </p>


            <p className="text-base font-semibold leading-normal text-center text-gray-800">
              How was your experience with us?
            </p>
            <div
              id="react1"
              style={{ display: "block" }}
              className="border  mx-auto rounded-full w-[64px] h-[64px] border-red-500 relative mt-6 mb-6"
            >
              <svg
                className="absolute  top-[11px] left-[11px]"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1017_352)">
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="#FFE17D"
                  />
                  <path
                    d="M22.9032 37.0967C11.8575 37.0967 2.9032 28.1424 2.9032 17.0967C2.9032 12.3134 4.58453 7.92398 7.3857 4.48242C2.87992 8.14961 0 13.7376 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999C26.2624 39.9999 31.8504 37.1199 35.5177 32.6141C32.076 35.4153 27.6866 37.0967 22.9032 37.0967Z"
                    fill="#FFD164"
                  />
                  <path
                    d="M10.3191 23.3867C10.023 23.3867 9.73824 23.2232 9.59707 22.9406C9.39801 22.5421 9.55926 22.0579 9.95808 21.8585L13.6765 19.9993L9.95801 18.14C9.55918 17.9407 9.39793 17.4565 9.59699 17.0579C9.79543 16.6597 10.2806 16.4966 10.6788 16.6972L15.8401 19.2779C16.1136 19.4146 16.2862 19.6937 16.2862 19.9993C16.2862 20.3048 16.1136 20.584 15.8401 20.7207L10.6788 23.3013C10.5636 23.359 10.44 23.3867 10.3191 23.3867Z"
                    fill="#AA7346"
                  />
                  <path
                    d="M29.6723 23.3871C29.5513 23.3871 29.4278 23.3597 29.3125 23.3017L24.1512 20.7211C23.8777 20.5844 23.7051 20.3053 23.7051 19.9997C23.7051 19.6942 23.8777 19.415 24.1512 19.2783L29.3125 16.6977C29.7107 16.4992 30.1952 16.6605 30.3943 17.0584C30.5934 17.4569 30.4321 17.941 30.0333 18.1405L26.3148 19.9997L30.0334 21.8589C30.4322 22.0583 30.5934 22.5425 30.3944 22.941C30.2532 23.2236 29.9684 23.3871 29.6723 23.3871Z"
                    fill="#AA7346"
                  />
                  <path
                    d="M9.03308 15.6453C8.7237 15.6453 8.42886 15.4667 8.29527 15.1662C8.11441 14.7592 8.29776 14.2826 8.7048 14.1017L14.5113 11.5211C14.9196 11.3384 15.3953 11.5239 15.576 11.9303C15.7569 12.3374 15.5735 12.8139 15.1665 12.9948L9.36003 15.5754C9.25362 15.623 9.14206 15.6453 9.03308 15.6453Z"
                    fill="#AA7346"
                  />
                  <path
                    d="M30.9671 15.6453C30.8581 15.6453 30.7466 15.623 30.6402 15.5754L24.8337 12.9948C24.4266 12.8139 24.2434 12.3374 24.4241 11.9303C24.6043 11.5239 25.0794 11.3384 25.4889 11.5211L31.2954 14.1017C31.7024 14.2826 31.8857 14.7592 31.7049 15.1662C31.5713 15.4667 31.2765 15.6453 30.9671 15.6453Z"
                    fill="#AA7346"
                  />
                  <path
                    d="M26.7095 30.1439C26.2886 30.1439 25.8885 29.9612 25.6126 29.6424L23.3552 27.0378L21.0971 29.6431C20.5465 30.2794 19.4546 30.28 18.9027 29.6424L16.6452 27.0378L14.3872 29.6431C13.836 30.2797 12.7453 30.2797 12.1934 29.6424L11.0038 28.2702C10.7121 27.9338 10.7481 27.4243 11.0851 27.1327C11.4215 26.8403 11.9306 26.8772 12.2223 27.2136L13.2902 28.4456L15.5482 25.8407C15.8242 25.5222 16.2242 25.3398 16.6451 25.3398C16.6457 25.3398 16.6457 25.3398 16.6463 25.3398C17.0672 25.3402 17.4667 25.5229 17.7426 25.8413L20.0002 28.4459L22.2582 25.8407C22.5335 25.5228 22.933 25.3402 23.3538 25.3398C23.3545 25.3398 23.3545 25.3398 23.3551 25.3398C23.776 25.3398 24.176 25.5223 24.452 25.8407L26.71 28.4456L27.7779 27.2136C28.069 26.8772 28.5781 26.84 28.9151 27.1327C29.2522 27.4244 29.2881 27.9338 28.9963 28.2702L27.8062 29.6431C27.531 29.9612 27.131 30.1439 26.7095 30.1439Z"
                    fill="#AA7346"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1017_352">
                    <rect width={40} height={40} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              id="react2"
              style={{ display: "none" }}
              className="border  mx-auto rounded-full w-[64px] h-[64px] border-blue-500 relative mt-6 mb-6"
            >
              <svg
                className="absolute  top-[11px] left-[11px]"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1017_333)">
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="#FFE17D"
                  />
                  <path
                    d="M19.9999 29.8386C17.2246 29.8386 14.591 28.7763 12.9548 26.9974C12.653 26.6698 12.6744 26.1595 13.0021 25.858C13.3297 25.5565 13.8407 25.5776 14.1418 25.9056C15.4781 27.3585 17.6681 28.2257 19.9999 28.2257C22.3317 28.2257 24.5217 27.3584 25.858 25.9056C26.1592 25.5776 26.6701 25.5565 26.9978 25.858C27.3254 26.1595 27.3468 26.6698 27.045 26.9974C25.4088 28.7764 22.7752 29.8386 19.9999 29.8386Z"
                    fill="#AA7346"
                  />
                  <path
                    d="M13.2257 20C12.3349 20 11.6128 19.2779 11.6128 18.3871V17.0968C11.6128 16.206 12.3349 15.4839 13.2257 15.4839C14.1165 15.4839 14.8386 16.206 14.8386 17.0968V18.3871C14.8386 19.2779 14.1165 20 13.2257 20Z"
                    fill="#7D5046"
                  />
                  <path
                    d="M13.2259 15.4839C13.1154 15.4839 13.0076 15.4952 12.9033 15.5164V17.7419C12.9033 18.2764 13.3366 18.7097 13.8711 18.7097C14.4055 18.7097 14.8388 18.2764 14.8388 17.7419V17.0968C14.8388 16.2059 14.1168 15.4839 13.2259 15.4839Z"
                    fill="#9C6846"
                  />
                  <path
                    d="M26.774 20C25.8832 20 25.1611 19.2779 25.1611 18.3871V17.0968C25.1611 16.206 25.8832 15.4839 26.774 15.4839C27.6648 15.4839 28.3869 16.206 28.3869 17.0968V18.3871C28.3869 19.2779 27.6648 20 26.774 20Z"
                    fill="#7D5046"
                  />
                  <path
                    d="M26.7742 15.4839C26.6638 15.4839 26.556 15.4952 26.4517 15.5164V17.7419C26.4517 18.2764 26.8849 18.7097 27.4194 18.7097C27.9538 18.7097 28.3871 18.2764 28.3871 17.7419V17.0968C28.3871 16.2059 27.665 15.4839 26.7742 15.4839Z"
                    fill="#9C6846"
                  />
                  <path
                    d="M22.9032 37.0967C11.8575 37.0967 2.9032 28.1424 2.9032 17.0967C2.9032 12.3134 4.58453 7.92398 7.3857 4.48242C2.87992 8.14961 0 13.7376 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999C26.2624 39.9999 31.8504 37.1199 35.5177 32.6141C32.076 35.4153 27.6866 37.0967 22.9032 37.0967Z"
                    fill="#FFD164"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1017_333">
                    <rect width={40} height={40} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              id="react3"
              style={{ display: "none" }}
              className="border  mx-auto rounded-full w-[64px] h-[64px] border-green-400 relative mt-6 mb-6"
            >
              <svg
                className="absolute  top-[11px] left-[11px]"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1017_311)">
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="#FFE17D"
                  />
                  <path
                    d="M22.9032 37.0967C11.8575 37.0967 2.9032 28.1424 2.9032 17.0967C2.9032 12.3134 4.58453 7.92398 7.3857 4.48242C2.87992 8.14961 0 13.7376 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999C26.2624 39.9999 31.8504 37.1199 35.5177 32.6141C32.076 35.4153 27.6866 37.0967 22.9032 37.0967Z"
                    fill="#FFD164"
                  />
                  <path
                    d="M19.9954 24.9838C16.3545 24.9838 12.8792 24.5922 9.69075 23.8843C9.27778 23.7926 8.92184 24.1923 9.04919 24.6088C10.5196 29.4173 14.8598 32.9056 19.9953 32.9056C25.1307 32.9056 29.471 29.4173 30.9414 24.6088C31.0687 24.1922 30.7129 23.7926 30.2998 23.8843C27.1115 24.5922 23.6362 24.9838 19.9954 24.9838Z"
                    fill="#9C6846"
                  />
                  <path
                    d="M20.0015 27.7416C23.3795 27.7416 26.7117 27.422 29.9906 26.8498C30.3761 26.1428 30.7007 25.3956 30.9414 24.6084C31.0689 24.1918 30.7129 23.7922 30.2999 23.8838C27.1115 24.5917 23.6362 24.9833 19.9954 24.9833C16.3545 24.9833 12.8791 24.5917 9.69075 23.8838C9.27778 23.7922 8.92184 24.1918 9.04919 24.6084C9.28966 25.3948 9.61395 26.1413 9.99887 26.8476C13.2821 27.4213 16.6188 27.7416 20.0015 27.7416Z"
                    fill="#7D5046"
                  />
                  <path
                    d="M14.1167 19.3365C15.2133 17.9578 17.8097 14.2562 16.3289 11.74C15.7565 10.7674 14.6301 10.2124 13.5088 10.3405C12.5981 10.4446 11.8674 10.923 11.4089 11.5813C11.221 11.8511 10.8805 11.9626 10.5694 11.8563C9.81035 11.5969 8.93816 11.6435 8.14238 12.0984C7.16253 12.6586 6.58285 13.7724 6.69683 14.8952C6.99168 17.7998 11.275 19.2479 12.9748 19.7107C13.3953 19.825 13.8453 19.6777 14.1167 19.3365Z"
                    fill="#E6646E"
                  />
                  <path
                    d="M25.8835 19.3365C24.7869 17.9578 22.1905 14.2562 23.6713 11.74C24.2437 10.7674 25.3701 10.2124 26.4914 10.3405C27.4021 10.4446 28.1328 10.923 28.5912 11.5813C28.7792 11.8511 29.1197 11.9626 29.4308 11.8563C30.1898 11.5969 31.062 11.6435 31.8578 12.0984C32.8377 12.6586 33.4173 13.7724 33.3034 14.8952C33.0085 17.7998 28.7252 19.2479 27.0254 19.7107C26.6048 19.825 26.1548 19.6777 25.8835 19.3365Z"
                    fill="#E6646E"
                  />
                  <path
                    d="M14.6793 18.026C12.9794 17.5632 8.69613 16.1151 8.40129 13.2105C8.35527 12.7573 8.42699 12.3075 8.58769 11.8931C8.43761 11.9497 8.28847 12.0149 8.14238 12.0985C7.16253 12.6585 6.58285 13.7724 6.69683 14.8953C6.99168 17.7999 11.275 19.248 12.9748 19.7107C13.3953 19.8252 13.8453 19.6778 14.1167 19.3367C14.3689 19.0196 14.7011 18.5757 15.0441 18.0556C14.9231 18.0644 14.8004 18.0589 14.6793 18.026Z"
                    fill="#DC4655"
                  />
                  <path
                    d="M25.8835 19.3365C24.7869 17.9578 22.1905 14.2562 23.6713 11.74C24.2437 10.7674 25.3701 10.2124 26.4914 10.3405C27.4021 10.4446 28.1328 10.923 28.5912 11.5813C28.7792 11.8511 29.1197 11.9626 29.4308 11.8563C30.1898 11.5969 31.062 11.6435 31.8578 12.0984C32.8377 12.6586 33.4173 13.7724 33.3034 14.8952C33.0085 17.7998 28.7252 19.2479 27.0254 19.7107C26.6048 19.825 26.1548 19.6777 25.8835 19.3365Z"
                    fill="#E6646E"
                  />
                  <path
                    d="M28.0496 18.9422C26.953 17.5634 24.3565 13.8618 25.8373 11.3457C26.0662 10.9567 26.3862 10.6385 26.7565 10.4C26.6671 10.3818 26.5843 10.3511 26.4909 10.3405C25.3696 10.2124 24.2432 10.7674 23.6708 11.74C22.19 14.2562 24.7864 17.9579 25.883 19.3365C26.1544 19.6776 26.6044 19.825 27.0249 19.7106C27.401 19.6082 27.9068 19.4544 28.4646 19.2505C28.3072 19.1805 28.1612 19.0825 28.0496 18.9422Z"
                    fill="#DC4655"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1017_311">
                    <rect width={40} height={40} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-sm leading-none text-center text-gray-600">
              <span id="exp">Bad</span> Experience
            </p>
            <div className="slider mt-4 mb-4 mx-auto ">
              <input
                id="slider"
                onChange={changeHandler}
                className="w-full cursor-pointer accent-red-500 rounded-full "
                type="range"
                defaultValue={0}
                min={0}
                max={2}
                step={0}
              />
            </div>
            <button
              onClick={() => setShow(false)}
              className="text-sm font-medium leading-none text-white px-6 py-4 bg-purple-700 rounded w-full hover:bg-purple-600 transform duration-300 ease-in-out"
            >
              Submit Review
            </button>
          </div>
        ) : (
          <div className=" mx-auto container lg:max-w-[356px] md:max-w-[720px] max-w-[343px] py-8 px-8 bg-white shadow rounded-md mt-12 border border-gray-500">
            <div className="py-4 ">
              <svg
                className="mx-auto"
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={48} height={48} rx={24} fill="#10B981" />
                <path
                  d="M34 16L20 32L14 26"
                  stroke="white"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-base font-semibold leading-normal text-center text-gray-800">
              Thanks for your Feedback!
            </p>
            <p className=" text-sm leading-none text-center text-gray-600 mt-2">
              {" "}
              Excellent Experience
            </p>
            <div className="mt-6">
              <Link to='/'>
                <button className="text-sm font-medium leading-none text-white px-6 py-4 bg-[#10b981] rounded w-full hover:bg-green-400 transform duration-300 ease-in-out">
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SuccessPayment;
