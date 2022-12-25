import React from 'react';
import ElectronicCollection from '../ElectronicCollection/ElectronicCollection';
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
            <ElectronicCollection/>
        </div>
    );
};

export default Home;