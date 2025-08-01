import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaApple,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import '../styles/auth.css';

export default function AuthForm({ isLogin = true, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10 space-y-6">
        {/* === Brand Logo & Heading === */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-3xl font-bold text-indigo-600">
            <i className="fas fa-wallet"></i>
            <span>SmartSpend</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-sm text-gray-500">
            {isLogin
              ? "Login to continue tracking your finances"
              : "Register to start managing your expenses"}
          </p>
        </div>

        {/* === Social Buttons === */}
        <div className="flex justify-center gap-4">
          <button className="w-1/2 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100 transition text-sm">
            <FaGoogle className="text-red-500" />
            Google
          </button>
          <button className="w-1/2 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100 transition text-sm">
            <FaApple className="text-black" />
            Apple
          </button>
        </div>

        {/* === Divider === */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <hr className="flex-1 border-gray-300" />
          <span>or sign in with email</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* === Form === */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 text-sm border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3.5 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
            <Link
              to="/forgot"
              className="text-indigo-500 hover:underline font-medium"
            >
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
