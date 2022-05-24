import React from "react";

const Featured = ({ feature }) => {
  return (
    <div className="card ">
      <figure className="px-10 pt-10">
        <img width={100} src={feature.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2>Price: {feature.price}</h2>
        <p className="card-title">{feature.name}</p>
      </div>
    </div>
  );
};

export default Featured;
