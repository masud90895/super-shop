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
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductsDetailes;
