import React from 'react';
import SummerCollection from '../SummerCollection/SummerCollection';
import Banner from './Banner';
import Category from './Category';
import TodaysDeals from './TodaysDeals';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <TodaysDeals/>
            <SummerCollection/>
        </div>
    );
};

export default Home;