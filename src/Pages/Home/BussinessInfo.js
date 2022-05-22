import React from "react";

const BussinessInfo = ({bussinessInfo}) => {
  return (
    <div class="card w-96 ">
      <figure class="px-10 pt-10">
        <img
          src={bussinessInfo.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
       
        <h2>{bussinessInfo.number}</h2>
        <p class="card-title">{bussinessInfo.name}</p>
      </div>
    </div>
  );
};

export default BussinessInfo;
