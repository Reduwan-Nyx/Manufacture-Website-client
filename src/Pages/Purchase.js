import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const Purchase = () => {
  const [services, setServices] = useState([])
  const [booking, setBooking] = useState(null)


  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            services.map(service => <Service 
            key={service._id}
            service={service}
            setBooking={setBooking}
            ></Service>)
          }
        </div>
        {booking && <BookingModal booking={booking}
        setBooking={setBooking}
        ></BookingModal>}
    </div>
  );
};

export default Purchase;