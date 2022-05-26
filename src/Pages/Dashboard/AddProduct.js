import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  const imageStorageKey = '10e83300c088f076df96f1e13a3d4ea8'


  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result =>{
      if(result.success){
        const img = result.data.url;
        const product = {
          name: data.name,
          email: data.email,
          products: data.products,
          img: img
        }
         // send to your database
        fetch('http://localhost:5000/purchase', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(inserted => {
          if(inserted.insertedId){
            toast.success('Product added Successfully')
            reset();
          }
          else{
            toast.error('Failed to add the Doctor')
          }
        })
      }
     
    })


  };
  return (
    <div>
      <h2 className="text-2xl">Add A New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        {/* email */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provida a valid Email",
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        {/* passwprd */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Product name</span>
          </label>

          <select {...register('products')} class="select w-full input-bordered max-w-xs">
            {
              services.map(service => <option
              key={service._id}
              value={service.name}
              >{service.name}</option>)
            }
           
          </select>
        </div>
          
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Picture</span>
          </label>
          <input
            type="file"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "image is Required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>






        <input
          className="btn w-full max-w-xs"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
