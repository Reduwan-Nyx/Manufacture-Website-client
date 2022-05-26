import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';


const stripePromise = loadStripe('pk_test_51L3jXvAtYTMGS6J9JCv8qQPWBynz5hDjaqdtZpesEd7KAILhk00Rjj8TylM9facNoLnKv4bCSWSFf8nZzDrDvsyR00scjiVkKn');

const Payment = () => {
    const{id} = useParams()

    const url = `http://localhost:5000/booking/${id}`


    const {data: appointment, isLoading} = useQuery(['booking', id], ()=> fetch(url).then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           
  <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
  <div class="card-body">
      <p className='text-success'>{appointment.ProductName}</p>
    <h2 class="card-title">pay for {appointment.booking}</h2>
    <p>{appointment.product}</p>
    <p>Please pay : ${appointment.price}</p>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div class="card-body">
        
        
      </div>
    </div>
  </div>

    );
};

export default Payment;