import React from 'react';

const Brands = ({brand}) => {
    return (
        <div class="card  ">
        <figure class="px-10 pt-10">
          <img width={200}
            src={brand.img}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
    
      </div>
    );
};

export default Brands;