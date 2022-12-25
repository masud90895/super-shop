import React from 'react';
import ElectronicCollection from '../ElectronicCollection/ElectronicCollection';
import SummerCollection from '../SummerCollection/SummerCollection';
import WomenCollection from '../WomenCollection/WomenCollection';
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
            <WomenCollection/>
        </div>
    );
};

export default Home;