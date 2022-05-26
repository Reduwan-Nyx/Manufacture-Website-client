import React from 'react';

const Service = ({service, setBooking}) => {

    const {name, description, price, minimumorderquantity, availablequantity, img} = service
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
      <div>
          <img src={img} alt="" />
      </div>
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <p>Price: {price}</p>
    <p>minimumorderquantity: {minimumorderquantity}</p>
    <p>availablequantity: {availablequantity}</p>
    <div class="card-actions justify-center">
      <label for="booking-modal" onClick={()=> setBooking(service)} class="btn btn-primary">Open Order</label>
    </div>
  </div>
</div>
    );
};

export default Service;