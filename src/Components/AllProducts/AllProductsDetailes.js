import React, { useContext, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useLoaderData } from "react-router-dom";
import ImageMagnify from "../ImageMagnify/ImageMagnify";
import {
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineFileProtect,
  AiOutlineFieldTime,
} from "react-icons/ai";

import { FaDonate } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { GiBank } from "react-icons/gi";

import { toast } from "react-hot-toast";
import ProductsDetailes from "../TodaysDeals/ProductsDetailes";
import TodaysDealsProductsHeader from "../TodaysDeals/TodaysDealsProductsHeader";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllProductsDetailes = () => {
  const { user } = useContext(AuthContext);
  const [addToCart, setAddToCart] = useState({});

  const [quantity, setQuantity] = useState(1);
  const products = useLoaderData();

  const productsMinus = () => {
    if (quantity < 2) {
      return toast.error("You Can't selected less than 1 products");
    }
    setQuantity(quantity - 1);
  };

  const handleAddToCard = (product) => {
    if (!user?.email) {
      return toast.error("Please Login to add to card");
    }
    const productCart = {
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
      email: user?.email,
    };
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productCart),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg border border-purple-600 rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {user?.displayName}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                   You Added <span className="text-purple-600">{product?.name}</span> On Your Card
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      });
  };

  return (
    <div className="lg:mx-[200px]">
      <TodaysDealsProductsHeader products={products} />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {/* image magnify  */}
        <div className="w-[339px] border">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                isFluidWidth: true,
                src: products?.image,
              },
              largeImage: {
                src: products?.image,
                width: 400,
                height: 600,
              },
            }}
          />
        </div>
        {/* image stock  */}
        <div className="border p-4">
          <h1 className="text-xl font-bold mb-2">{products?.name}</h1>
          <div className="flex gap-3 items-center mb-2">
            <div className="flex ">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div>
              <h1>{products.question.length} Review</h1>
            </div>
          </div>

          <div className="flex gap-3 mb-3">
            <h1>
              Store :{" "}
              <span className="text-[#92278f]"> {products.storeName}</span>
            </h1>
            <h1>||</h1>
            <h1>
              Brand : <span className="text-[#92278f]">Unknown</span>{" "}
            </h1>
          </div>

          <hr className="mx-3 mb-5" />
          {/* quantity  */}
          <div className="flex gap-4 my-3">
            <h1>Quantity :</h1>
            <div className="flex text-center">
              <AiOutlineMinus
                onClick={productsMinus}
                className="bg-[#e2e6e8] p-2 w-[45px] h-[30px]"
              />
              <h1 className="bg-[#f0f2f3] p-1 w-[45px] h-[30px]">{quantity}</h1>
              <AiOutlinePlus
                onClick={() => setQuantity(quantity + 1)}
                className="bg-[#e2e6e8] p-2 w-[45px] h-[30px]"
              />
            </div>
          </div>
          {/* Order Quantity:  */}

          <div className="flex gap-4 mt-3 my-3">
            <h1>Order Quantity:</h1>
            <div className="flex gap-3">
              <h1>Min - 1</h1>
              <h1>Max - 0</h1>
            </div>
          </div>

          <hr />
          {/* button  */}
          <div className="flex gap-5  my-5">
            <div className="button " id="button-5">
              <div id="translate"></div>
              <p>Buy Now</p>
            </div>

            <button
              onClick={() => handleAddToCard(products)}
              className="button "
              id="button-5"
            >
              <div id="translate"></div>
              <p>Add To Cart</p>
            </button>
          </div>

          {/* warranty  */}
          <div>
            <h1 className="my-2 text-xl text-gray-600">Warranty</h1>
            <div className="flex gap-3 items-center text-lg">
              <AiOutlineFileProtect />
              <h1>Local seller warranty</h1>
            </div>
          </div>
        </div>

        {/* delivery info  */}

        <div className=" p-4 border">
          <h1 className="text-xl my-3">Delivery Info</h1>
          <div className="flex items-center gap-3 my-3">
            <AiOutlineFieldTime className="text-3xl" />
            <div>
              <h1>Delivery Time : 2-7 Days</h1>
              <h1 className="text-sm text-gray-500">
                Shipping Charge : Tk 120
              </h1>
            </div>
          </div>
          <h1 className="text-xl my-3">Payment Info</h1>
          <div className="flex items-center gap-3 my-3">
            <FaDonate className="text-3xl" />
            <div>
              <h1>COD</h1>
              <h1 className="text-sm text-gray-500">
                Available Cash on Delivery
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <MdPayment className="text-3xl" />
            <h1>Online Payment</h1>
          </div>

          <div className="flex items-center gap-3">
            <GiBank className="text-3xl" />
            <div>
              <h1>Bank Payment</h1>
              <small className="text-sm text-[#92278f]">Learn More</small>
            </div>
          </div>

          {/* sold by  */}

          <div className="border shadow-2xl p-3 my-3">
            <h1>Sold By</h1>
            <h1 className="font-bold text-[#92278f]">{products.storeName}</h1>
          </div>

          {/* report  */}
          <div>
            <h1 className="my-4 font-bold text-center bg-gray-200 p-2">
              GO TO STORE{" "}
            </h1>
            <button
              style={{ fontSize: "16px", padding: "10px" }}
              className="btn text-lg   w-full hover:bg-red-600 bg-white hover:text-white text-black border-2 hover:border-red-600 border-red-600"
            >
              REPORT
            </button>
          </div>
        </div>
      </div>
      <ProductsDetailes products={products} />
    </div>
  );
};

export default AllProductsDetailes;
