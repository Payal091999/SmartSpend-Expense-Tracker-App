import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple, FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";

export default function AuthForm({ isLogin = true, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-300 px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        {/* Logo + Title */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-indigo-600 text-3xl font-bold">
            <i className="fas fa-wallet" />
            <span>SmartSpend</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-sm text-gray-500">
            {isLogin
              ? "Login to continue tracking your finances"
              : "Register to start tracking your finances"}
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100 transition">
            <FaApple className="text-black" /> Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">or sign in with email</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
            <Link to="/forgot" className="text-indigo-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-semibold"
          >
            {isLogin ? "Sign in" : "Register"}
          </button>
        </form>

        {/* Toggle Auth Link */}
        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <Link
            to={isLogin ? "/register" : "/login"}
            className="text-indigo-500 hover:underline font-medium"
          >
            {isLogin ? "Register" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
}
