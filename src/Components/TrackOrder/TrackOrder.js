import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiFillCheckCircle,AiFillExclamationCircle } from "react-icons/ai";
import { GiBoxUnpacking } from "react-icons/gi";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const TrackOrder = () => {
  const time = new Date().toLocaleDateString();
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tackOrder?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user?.email]);

  console.log(cart);

  return (
    <div className="my-7 mx-3 ">
      <div>
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          Hello, <span className="text-purple-600 ">{user?.displayName}</span>
          <AiFillCheckCircle className="ml-1 text-green-600 " />
        </h1>

        <h1 className="text-3xl font-bold  ">Order Details</h1>
      </div>

      {/* one order detaile  */}
      <div className="my-5">
        {/* order header  */}

        {/* header body  */}
        {
          cart?.length > 0 ? cart?.map((ct,i)=> <div  key={ct._id} className="mt-5 border border-purple-600">
             <div className="flex justify-between items-center shadow p-3 border  border-b-none shadow-b-none">
          <div>
            <h1 className="text-xl">
              Order #<span>{ct.transactionId}</span>
            </h1>
            <h1>
              <small>
                Place on <span>{ct.paidTime}</span>
              </small>
            </h1>
          </div>
          <div>
            <h1>
              Total : $ <span>{ct.price}</span>
            </h1>
          </div>
        </div>
          {/* body 1 Package  */}
          <div className="flex justify-between items-center shadow p-3 border border-t-none shadow-t-none">
            
            <div>
              <h1 className="text-xl flex gap-1 items-center">
                <GiBoxUnpacking /> Package {i +1}
              </h1>
              <h1>
                <small>
                  Sold by <span className="text-purple-600">{ct.productCatagory}</span>
                </small>
              </h1>
            </div>
            <div className="tooltip" data-tip="This feature not available">
              <button className="text-md flex gap-1 items-center text-[#27c8e4] ">
                {" "}
                <BsFillChatRightQuoteFill />
                Chat Now
              </button>
            </div>
          </div>
          {/* body 2  */}
          <div className="shadow p-3 border">
            <div className="flex justify-between items-center mb-3">
              <h1>Delivered on {time} </h1>
              <h1 className="flex  items-center text-base">
                <TbTruckDelivery />
                Standard Delivery
              </h1>
            </div>

            {/* steps  */}
            <div className="flex justify-center my-4">
            <ul  className="steps lg:min-w-[80rem]">
            <li className="step  step-primary">Payment Pending</li>
              <li  className="step step-primary">Processing</li>
              <li className="step step-primary">Shipped</li>
              <li className="step">Delivered</li>
            </ul>
            </div>
        {/* product detailes  */}
        <div className="flex justify-between mt-10 gap-3 ">
          <div className="flex gap-3">
          <img className="w-[80px] h-[80px]" src={ct.image} alt="" />
          <div>
            <h1>{ct.productName}</h1>
            <h1><small>No Warranty Available</small></h1>
          </div>
          </div>
          <h1>
            ${ct.price}
          </h1>
          <div>
            <h1 className="flex text-lg text-[#27c8e4] items-center gap-1">RETURN/REFUND <span><AiFillExclamationCircle/></span></h1>
          </div>
        </div>

        {/* address  */}
        <div className="mt-8 border shadow p-3">
          <h1 className="text-xl mb-2">Shipping Address</h1>
          <div className="flex gap-2 items-center">
            <h1 className="bg-orange-500 font-bold text-white p-1 text-sm rounded-lg mb-1">Home</h1>
            <h1>Thakurgaon Sadar</h1>
          </div>
          <h1>01218218910</h1>
        </div>

          </div>
        </div>)
            : <div className="text-4xl text-center font-bold mt-9 text-red-600">No Order Found</div>
        }
      </div>
    </div>
  );
};

export default TrackOrder;
