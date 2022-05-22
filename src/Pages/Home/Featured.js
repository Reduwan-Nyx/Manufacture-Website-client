import React from 'react';

const Featured = ({feature}) => {
    return (
        <div class="card w-96 ">
        <figure class="px-10 pt-10">
          <img width={100}
            src={feature.img}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
            <h2>Price: {feature.price}</h2>
          <p class="card-title">{feature.name}</p>
        </div>
      </div>
    );
};

export default Featured;