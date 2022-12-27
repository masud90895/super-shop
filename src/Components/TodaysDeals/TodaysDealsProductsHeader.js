import React from 'react';

const TodaysDealsProductsHeader = ({products}) => {
    return (
        <div className="py-16 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center">
        <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-start items-start text-[#92278f] underline">
                <p className="text-lg leading-none ">Home / {products?.collections} / <strong>{products?.name}</strong></p>
            </div>
        </div>
    </div>
    );
};

export default TodaysDealsProductsHeader;