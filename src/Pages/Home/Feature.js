import React from 'react';
import feature1 from '../../images/feature1.jpg'
import feature2 from '../../images/feature2.jpg'
import feature3 from '../../images/feature3.jpg'
import feature4 from '../../images/feature4.jpg'
import Featured from './Featured';
const Feature = () => {
    const features = [
        {
            _id: 1,
            name: 'Shock absorber',
            price:" $92",
            img: feature1
        }, {
            _id: 2,
            name: 'pistons isolated',
            price:" $52",
            img: feature2
        }, {
            _id: 3,
            name: 'Various car parts',
            price:" $82",
            img: feature3
        },{
            _id: 4,
            name: 'Car lightbulb',
            price:" $23",
            img: feature4
        },
    ]
    return (
        <div className='feature-title my-28 text-center'>
            <p className="m-5 text-2xl text-red-500">TOP SALE IN THE WEEK</p>
            <h2 className='text-3xl font-bold'>FEATURED PRODUCTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        features.map(feature => <Featured
                        key={feature._id}
                        feature={feature}
                        ></Featured>)
                    }
                </div>  
            
        </div>
    );
};

export default Feature;