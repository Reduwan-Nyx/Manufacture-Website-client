import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from '../../hooks/useToken';


import Loading from "../Shared/Loading";

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser)

  const navigate = useNavigate()

  let errorMessage;


  if(loading || gLoading || updating){
      return <Loading></Loading>
  }

  if(error || gError || updateError){
    errorMessage= <p className="text-red-500"><small>{error?.message || gError?.message || updateError?.message}</small></p>
  }

  if ( token ) {
   
    // navigate('/pruchase')
  }

  if (error || gError) {
    console.log(error);
  }

  const onSubmit = async (data) => {
    console.log(data);
   await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name });
    console.log('update done');
    
  };
    return (
        <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">SIGNUP</h2>
    {/* {name} */}
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
                    required:{
                        value: true,
                        message: 'Name is Required'
                    }
                  })} 
              />
              <label class="label">
              {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}      
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
                    required:{
                        value: true,
                        message: 'Email is Required'
                    },
                    pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provida a valid Email' 
                    }
                  })} 
              />
              <label class="label">
              {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>} 
              {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                
              
              </label>
            </div>
            {/* passwprd */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
               
              </label>
              <input
                type="password"
                placeholder="Your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required:{
                        value: true,
                        message: 'password is Required'
                    },
                    minLength: {
                        value: 6,
                        message: "must be 6 character or longer",
                      },
                    })} 
              />
              <label class="label">
              {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>} 
              {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                
              </label>
            </div>
            
            {errorMessage}

            <input className="btn w-full max-w-xs" type="submit" value="SIGNUP" />
          </form>

          <p>
            <small>
              ALready Have An Monota Account?{" "}
              <Link className="text-primary mx-2" to="/login">
                Please Login
              </Link>
            </small>{" "}
          </p>

          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;