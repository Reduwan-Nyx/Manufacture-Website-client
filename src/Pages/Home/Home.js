import React from 'react';
import Banner from './Banner';
import Bussiness from './Bussiness';
import Tool from './Tool';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Tool></Tool>
           <Bussiness></Bussiness>
        </div>
    );
};

export default Home;