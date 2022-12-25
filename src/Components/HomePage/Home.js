import React from 'react';
import Banner from './Banner';
import Category from './Category';
import TodaysDeal from './TodaysDeal';
import TodaysDeals from './TodaysDeals';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <TodaysDeals/>
            {/* <TodaysDeal/> */}
        </div>
    );
};

export default Home;