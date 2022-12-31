import { Tab } from "@headlessui/react";
import React, { Fragment, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductsDetailes = ({ products }) => {
  const [refresh, setRefesh] = useState(false);
  const date = new Date().toLocaleString();
  const { user } = useContext(AuthContext);

  const handleQuestion = (e) => {
    if (!user?.email) {
      return toast.error("please login to ask questions");
    }
    e.preventDefault();
    const question = e.target.question.value;

    const allQuestions = {
      name: user?.displayName,
      image: user?.photoURL,
      time: date,
      question,
    };
    fetch(`http://localhost:5000/question/${products?._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allQuestions),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("question added");
        setRefesh(!refresh);
        e.target.reset();
      });
  };
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
              {products?.hightlight?.replace(".", ".....")}
            </p>
          </div>
          <div className="my-3">
            <h1 className="text-xl font-bold">DESCRIPTION</h1>
            <hr className="my-3" />
            <p className="text-[#637381]">
              {products?.descriptions?.replace(".", ".....")}
            </p>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div>
            {products?.question?.length === 0 ? (
              <div className="bg-[rgb(94,167,245)] p-4 mt-2 rounded-lg text-center ">
                <h1>No Question Found</h1>
              </div>
            ) : (
              <div>
                {products?.question?.map((qr, i) => (
                  <div key={i} className="border-2 border-purple-300 rounded-md my-2 p-3">
                    <div className="text-2xl py-4 ">
                      <h1>{qr.question}</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img
                        className="rounded-[100%] w-12 h-12 "
                        src={qr.image}
                        alt=""
                      />
                      <div>
                        <h1>{qr.name}</h1>
                        <h1>{qr.time}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={handleQuestion}>
            <div className="my-3">
              <textarea
                className="border-2 w-full p-4 focus:border-purple-600"
                name="question"
                id=""
                cols="30"
                rows="2"
                placeholder="Leave your Question"
                required
              />
            </div>
            <button type="submit" className="button w-[300px]" id="button-5">
              <div id="translate"></div>
              <p>Submit</p>
            </button>
          </form>
        </Tab.Panel>
        <Tab.Panel>
          <div className="bg-[#e6c669] text-center p-4 mt-2 rounded-lg  ">
            <h1>No FAQ</h1>
          </div>{" "}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductsDetailes;
