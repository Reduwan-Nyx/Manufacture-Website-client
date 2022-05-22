import React from 'react';
import banner from '../../images/banner1.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 class="text-5xl font-bold">Wide Selections of Auto Parts</h1>
      <p class="py-6">Enjoy and entirely new level of driving experinve with our in-dept selection of superior car bulbs,brake pads,spark plugs,and other automotive parts and accessories designed to keep your car running at its absolute best.</p>
      <button class="btn btn-secondary">Shop Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;