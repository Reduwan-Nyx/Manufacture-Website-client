import React, { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import './Purchase.css'
const Purchase = () => {
    const [inventory, setInventory] = useState({});
    const { inventoryId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/services/${inventoryId}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setInventory(data));
      }, []);
    
    return (
        <div className='purchase-container m-10'>
        <div className="tools-img">
        <img src={inventory.img} alt="" />
      </div>
      <div className='ml-10 mt-5'>
      <h2>{inventory.name}</h2>
      <p>price: {inventory.price}</p>
      <p>
        <small>{inventory.description}</small>
      </p>
      <h2 className="mt-2">
        <>minimum order quantity: {inventory.minimumorderquantity}</>
      </h2> 
      <h2>
        <>available quantity: {inventory.availablequantity}</>
      </h2>
      </div>
        </div>
    );
};

export default Purchase;