import React from "react";

const BussinessInfo = ({ bussinessInfo }) => {
  return (
    <div className="card">
      <figure className="px-10 pt-10">
        <img src={bussinessInfo.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2>{bussinessInfo.number}</h2>
        <p className="card-title">{bussinessInfo.name}</p>
      </div>
    </div>
  );
};

export default BussinessInfo;
