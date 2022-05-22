import React from "react";
import { useNavigate } from "react-router-dom";
import './Tools.css'
const Tools = ({ tools }) => {
  const {
    name,
    img,
    description,
    price,
    minimumorderquantity,
    availablequantity,
  } = tools;

  const navigate = useNavigate()

  const naviagteToPurchase = () =>{
    navigate(`/pruchase`)
}

  return (
    <div className="tools-container">
      <div className="tools-img">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <p>
        <small>minimum order quantity: {minimumorderquantity}</small>
      </p> 
      <p>
        <small>available quantity: {availablequantity}</small>
      </p>
      <button
      onClick={() => naviagteToPurchase()}
       
        className="button-inv btn btn-secondary"
      >
        Order: {name}
      </button>
    </div>
  );
};

export default Tools;
