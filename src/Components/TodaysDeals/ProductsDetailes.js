import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";

const ProductsDetailes = ({ products }) => {
  return (
    <Tab.Group>
      <Tab.List className="bg-gray-200 p-4">
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-[#92278f] text-white md:text-2xl  md:mx-5 mx-2 p-2 rounded-xl"
                  : "bg-gray-200 text-black md:text-2xl  md:mx-5 mx-2 p-2 rounded-xl"
              }
            >
              Overview
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-[#92278f]  text-white md:text-2xl  md:mx-5 mx-2 p-2 rounded-xl"
                  : "bg-gray-200 text-black   md:text-2xl  md:mx-5 mx-2 p-2 rounded-xl"
              }
            >
             Ask Questions
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected
                  ? "bg-[#92278f] text-white md:text-2xl  md:mx-5 mx-2 p-2 rounded-xl"
                  : "bg-gray-200 text-black md:text-2xl  md:mx-5 mx-2 p-2 rounded-xl"
              }
            >
              FAQ
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="my-3">
            <h1 className="text-xl font-bold">HIGHLIGHT</h1>
            <hr className="my-3" />
            <p className="text-[#637381]">
              {products.hightlight.replace(".", ".....")}
            </p>
          </div>
          <div className="my-3">
            <h1 className="text-xl font-bold">DESCRIPTION</h1>
            <hr className="my-3" />
            <p className="text-[#637381]">
              {products.descriptions.replace(".", ".....")}
            </p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
              <div>
                {
                products?.question?.length === 0 ? <div className="bg-[rgb(94,167,245)] p-4 mt-2 rounded-lg text-center ">
                    <h1 >No Question Found</h1>
                </div> : <div><h1>Question Found</h1></div>
                }
              </div>
              <div className="my-3">
                <textarea className="border-2 w-full p-4 focus:border-purple-600"  name="" id="" cols="30" rows="2" placeholder="Leave your Question"/>
              </div>
              <div className="button w-[300px]" id="button-5">
              <div id="translate"></div>
              <p>Submit</p>
            </div>

        </Tab.Panel>
        <Tab.Panel><div className="bg-[#e6c669] text-center p-4 mt-2 rounded-lg  ">
                    <h1 >No FAQ</h1>
                </div> </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductsDetailes;
