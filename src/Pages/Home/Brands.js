import React from "react";

const Brands = ({ brand }) => {
  return (
    <div className="card  ">
      <figure className="px-10 pt-10">
        <img width={200} src={brand.img} alt="Shoes" className="rounded-xl" />
      </figure>
    </div>
  );
};

export default Brands;
