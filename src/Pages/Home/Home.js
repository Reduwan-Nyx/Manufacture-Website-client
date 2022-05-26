import React from 'react';
import Banner from './Banner';
import Brand from './Brand';
import Bussiness from './Bussiness';
import Feature from './Feature';
import ReviewShow from './ReviewShow';
import Testimonials from './Testimonials';
import Tool from './Tool';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Tool></Tool>
           <Bussiness></Bussiness>
           <Feature></Feature>
           <Testimonials></Testimonials>
           <Brand></Brand>
           <ReviewShow></ReviewShow>
        </div>
    );
};

export default Home;