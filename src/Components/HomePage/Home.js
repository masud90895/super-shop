import React from 'react';
import ElectronicCollection from '../ElectronicCollection/ElectronicCollection';
import GlobalProducts from '../GlobalProducts/GlobalProducts';
import LadiesBagCollection from '../LadiesBagCollection/LadiesBagCollection';
import ShareeCollection from '../ShareeCollection/ShareeCollection';
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
            <LadiesBagCollection/>
            <GlobalProducts/>
            <ShareeCollection/>
        </div>
    );
};

export default Home;