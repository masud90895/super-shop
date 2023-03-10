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
import Partner from '../Partner/Partner';

const Home = () => {
    const categorys =[
        <TodaysDeals/>,
            <MobailCollection/>,
            <SummerCollection/>,
            <ElectronicCollection/>,
            <WomenCollection/>,
            <LadiesBagCollection/>,
            <GlobalProducts/>,
            <ShareeCollection/>,
            <Partner/>,
            <MobailApp/>
    ]
    return (
        <div>
            <Banner/>
            <Category/>
            {
                categorys?.map((category,i)=> <div key={i}>{category}</div>)
            }
            
        </div>
    );
};

export default Home;