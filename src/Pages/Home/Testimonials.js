import React from 'react';
import shape from '../../images/quote.svg'
import people1 from '../../images/person1.jpg'
import people2 from '../../images/person2.jpg'
import people3 from '../../images/person3.jpg'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'I had orderd a great product from here. this car products are great and looks all good.i really happy about the service that i got..thank you so much',
            location: 'New York',
            img: people1
        }, {
            _id: 2,
            name: 'Rica barayni',
            review: 'Best products i have ever seen..all products all low price and with good qualities. i really loved the way you gave my product..thaks for your service',
            location: 'california',
            img: people2
        }, {
            _id: 3,
            name: 'John dept',
            review: 'Wow.. never experinced so good product ever.. and all these products looks great and fine. i never thought that this website gives so good stuff..highy recommanded for those who want to but car parts',
            location: 'london',
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
            <h4 className="text-xl text-secondary font-bold">
                Reviews
            </h4>
            <h2 className='text-3xl'>What Our Custormer Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={shape} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;