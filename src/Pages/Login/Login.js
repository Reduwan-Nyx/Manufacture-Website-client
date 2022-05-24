import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import Loading from "../Shared/Loading";
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorMessage;

  const navigate = useNavigate()
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  useEffect( ()=>{
    if ( user || gUser) {
      navigate(from, { replace: true });
    }
  },[user, gUser, from, navigate])


  if(loading || gLoading){
      return <Loading></Loading>
  }

  if(error || gError){
    errorMessage= <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
  }

  

  if (error || gError) {
    console.log(error);
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">LOGIN</h2>
    {/* {email} */}
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <input className="btn w-full max-w-xs" type="submit" value="LOGIN" />
          </form>

          <p>
            <small>
              New To Monota Car Tools?{" "}
              <Link className="text-primary mx-2" to="/signup">
                Create New Account
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

export default Login;
