import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-600 text-center">
          Login
        </h2>
        <p className="text-gray-500 text-center mt-1 mb-6">
          Welcome back, please sign in
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-3 rounded-lg border 
              ${errors.email ? "border-red-500" : "border-gray-300"}
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg border 
              ${errors.password ? "border-red-500" : "border-gray-300"}
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold
            bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to={"/register"}>
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
