import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TodaysDealsProductsDetailes = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <h1>TodaysDealsProductsDetailes</h1>
        </div>
    );
};

export default TodaysDealsProductsDetailes;