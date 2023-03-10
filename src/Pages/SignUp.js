import React, { useState } from "react";
import { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../Hooks/useToken";
import useType from "../Hooks/useType";
import Loading from "../Shared/Loading";

function SignUp() {
  const [role, setRole] = useState("Buyer");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);
  const [done] = useType(role);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInErrorMessage;

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token && done) {
      navigate(from, { replace: true });
    }
  }, [token, done, from, navigate]);

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInErrorMessage = (
      <p className="text-red-500 mb-2">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div>
      <div className="sign flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden py-20">
        <div className="h-auto w-full flex">
          <div className="hidden lg:w-1/2 lg:flex justify-end items-center text-7xl text-white">
            <h3>CryptoArt</h3>
          </div>
          <div
            data-aos="fade-left"
            className="lg:w-1/2 w-full flex justify-center items-center lg:mt-10 mt-20"
          >
            <div className="glass w-96 p-5 rounded-lg text-white">
              <h2 className="text-center text-3xl">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-sm">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered text-black w-full max-w-sm"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-sm">
                  <label className="label">
                    <span className="label-text">User Type</span>
                  </label>
                  <select
                    onChange={(e) => setRole(e.target.value)}
                    className="select select-bordered w-full max-w-sm"
                  >
                    <option defaultValue>Buyer</option>
                    <option>Seller</option>
                  </select>
                </div>
                {/* Email */}
                <div className="form-control w-full max-w-sm">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered text-black w-full max-w-sm"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Password */}
                <div className="form-control w-full max-w-sm">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered text-black w-full max-w-sm"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {/*  */}
                {signInErrorMessage}
                <input
                  className="btn btn-primary bg-gradient-to-r hover:bg-gradient-to-br from-purple-700 to-orange-400 duration-1000 text-white w-full max-w-sm"
                  value="Sign Up"
                  type="submit"
                />
              </form>
              <p>
                Already have an Account{" "}
                <Link to="/login" className="text-blue-500">
                  Go to login
                </Link>{" "}
              </p>
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn text-purple-400 hover:bg-purple-400 btn-outline w-full"
              >
                Sign Up with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
