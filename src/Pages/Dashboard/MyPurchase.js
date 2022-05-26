import React, {useState, useEffect} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../../firebase.init";
const MyPurchase = () => {
    const [bookings, setBookings] = useState([])
    const [user] = useAuthState(auth);

    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?product=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
       }
    },[user])
    return (
        <div>
            <h2>appointments: {bookings.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>

        <th>Product</th>
        <th>name</th>
        <th>user</th> 
        <th>Phone</th>
        <th>Payment</th>
       
      </tr>
    </thead>
    <tbody>
     {
         bookings.map(a => <tr>
            <th>1</th>
            <td>{a.booking}</td>
            <td>{a.product}</td>
            <td>{a.ProductName}</td>
            <td>{a.phone}</td>
            <td>{(a.price && !a.paid)&& <Link to={`/dashboad/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}</td> 
            <td>{(a.price && !a.paid)&& <span  className='btn btn-xs btn-success'>Paid</span>}</td>
          </tr> )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPurchase;