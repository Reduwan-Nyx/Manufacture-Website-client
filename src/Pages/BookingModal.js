import React from 'react';
import './Booking.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { toast } from 'react-toastify';
const BookingModal = ({booking, setBooking}) => {
  const {_id, name, price} = booking

  const [user,loading,error] = useAuthState(auth)

  const handleBooking = event =>{
    event.preventDefault()
   const booking = {
      bookingId: _id,
      booking: name,
      price,
      product: user.email,
      ProductName: user.displayName,
      phone: event.target.phone.value
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
    setBooking(null)
  }
    return (
       <div>
           <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Booking for: {name}</h3>
   <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
   <input type="text" name='name' disabled value={user?.displayName || ''}  class="input input-bordered input-primary w-full max-w-xs" />
   <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered input-primary w-full max-w-xs" />
   <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
   <input type="text" value={user?.price} class="input input-bordered input-primary w-full max-w-xs" />
   <input type="submit" placeholder="submit" class="btn btn-secondary w-full max-w-xs" />
   </form>
  </div>
</div>
       </div>
    );
};

export default BookingModal;