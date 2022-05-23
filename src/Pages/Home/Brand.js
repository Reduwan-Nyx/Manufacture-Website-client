import React from 'react';
import brand1 from '../../images/Ferrari Logo Vector free.png'
import brand2 from '../../images/Ford Vector Logo.png'
import brand3 from '../../images/Toyota Vector Logo.png'
import brand4 from '../../images/Lexus Vector Logo.png'
import brand5 from '../../images/Hyundai Logo Vector free.png'
import Brands from './Brands';
const Brand = () => {
    const brands = [
        {
            _id: 1,
            img: brand1
        }, {
            _id: 2,
          
            img: brand2
        }, {
            _id: 3,
            
            img: brand3
        },{
            _id: 4,
            img: brand4
        },{
            _id: 5,
            img: brand5
        },
    ]
    return (
        <div className='feature-title my-28 text-center'>
        <p className="m-5 text-2xl text-secondary">Top Brands</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5'>
                {
                   brands.map(brand => <Brands
                   key={brand._id}
                   brand={brand}
                   ></Brands>)
                }
            </div>  
        
    </div>
    );
};

export default Brand;