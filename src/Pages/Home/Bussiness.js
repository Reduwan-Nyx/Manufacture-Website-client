import React from 'react';
import './Bussiness.css'
import country from '../../icons/country.png'
import project from '../../icons/project.png'
import clients from '../../icons/client.png'
import feedback from '../../icons/feedback.png'
import BussinessInfo from './BussinessInfo';
const Bussiness = () => {
    const bussiness = [
        {
            _id:1,
            name: 'Countries',
            number: '72',
            img: country
        }, {
            _id:2,
            name: 'Complete Projects',
            number: '535+',
            img: project
        }, {
            _id:3,
            name: 'Happy clients',
            number: '273+',
            img: clients
        }, {
            _id:4,
            name: 'Feedback',
            number: '432+',
            img: feedback
        },
    ]
    return (
        <div className='my-28 text-center text-3xl'>
            <h3 className='text-secondary'>Millions Bussiness Trust Us</h3>
            <p className='bussiness-title'>Try to understand users Expectation</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    bussiness.map(bussinessInfo => <BussinessInfo
                    key={bussinessInfo._id}
                    bussinessInfo={bussinessInfo}
                    ></BussinessInfo>)
                }
            </div>
        </div>
    );
};

export default Bussiness;