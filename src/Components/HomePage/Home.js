import React from 'react';
import ElectronicCollection from '../ElectronicCollection/ElectronicCollection';
import GlobalProducts from '../GlobalProducts/GlobalProducts';
import LadiesBagCollection from '../LadiesBagCollection/LadiesBagCollection';
import MobailCollection from '../MobailCollection/MobailCollection';
import ShareeCollection from '../ShareeCollection/ShareeCollection';
import SummerCollection from '../SummerCollection/SummerCollection';
import WomenCollection from '../WomenCollection/WomenCollection';
import Banner from './Banner';
import Category from './Category';
import MobailApp from './MobailApp';
import TodaysDeals from '../TodaysDeals/TodaysDeals';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <TodaysDeals/>
            <MobailCollection/>
            <SummerCollection/>
            <ElectronicCollection/>
            <WomenCollection/>
            <LadiesBagCollection/>
            <GlobalProducts/>
            <ShareeCollection/>
            <MobailApp/>
        </div>
    );
};

export default Home;