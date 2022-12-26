import React from "react";

const Category = () => {
  const categorys = [
    "Today's Deals",
    "Summer collections",
    "Electronics",
    "Women's Collection",
    "Ladies Bag Collections",
    "Global Products",
    "Sharee's Collection",
    "SMARTPHONES",
  ];
  return (
    <div className="mt-8 lg:mx-[100px]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
          Today's Deals
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
          Summer collections
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
          Electronics
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
         Women's Collection
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
        Ladies Bag Collections
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
         Global Products
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
         Sharee's Collection
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
        <button
          type="button"
          className="relative px-8 py-4 ml-4 overflow-hidden bg-gray-100  inline-block rounded border border-current  text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
        >
         SMARTPHONES
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left text-white transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
            New
          </span>
        </button>
      </div>
    </div>
  );
};

export default Category;
