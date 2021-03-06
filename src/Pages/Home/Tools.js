import React from "react";
import { useNavigate } from "react-router-dom";
import './Tools.css'
const Tools = ({ tools, setProducts }) => {
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
      <h2 className="mt-2">
        <>minimum order quantity: {minimumorderquantity}</>
      </h2> 
      <h2>
        <>available quantity: {availablequantity}</>
      </h2>
      <button
      onClick={() => naviagteToPurchase()}
       
        className="button-inv btn "
      >
        Order: {name}
      </button>
    </div>
  );
};

export default Tools;
