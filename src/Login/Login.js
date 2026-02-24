import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white  rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="bg-green-600 text-white p-8 flex flex-col items-center justify-center space-y-6">
          <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
            <svg viewBox="0 0 64 64" className="w-16 h-16" aria-hidden>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#34D399" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <g
                fill="none"
                stroke="url(#g)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M12 26c0 10 8 18 20 18s20-8 20-18H12z"
                  fill="#fff"
                  opacity="0.04"
                />
                <path d="M18 24c0-8 10-12 14-12 4 0 14 4 14 12" />
                <path d="M18 24v8c0 6 8 10 14 10s14-4 14-10v-8" />
                <path d="M40 34c0 3-3 5-6 5s-6-2-6-5" />
                <path d="M22 18c0-4 3-8 8-8" />
              </g>
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">TeaValaut</h2>
            <p className="mt-1 text-sm opacity-90">
              Fresh tea shop dashboard — sign in to continue
            </p>
          </div>

          <p className="text-xs bg-white/10 px-3 py-1 rounded-full">
            Green · Organic · Local
          </p>

          <div className="p-8">
            <h3 className="text-xl font-semibold text-white">Welcome back</h3>
          </div>
        </div>
        <div className="p-8 flex flex-col items-center justify-center space-y-6">
          <form className="space-y-3 w-full">
            <p className="font-medium">Email</p>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 border-gray-300 text-left"
            ></input>
            <p className="font-medium">Password</p>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 border-gray-300 text-left"
            ></input>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-500"
                  placeholder="••••••••"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-1 bg-gradient-to-r from-green-500 to-green-400 text-white py-2 rounded-lg font-medium hover:opacity-95 transition"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="my-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="text-xs text-gray-400">Or continue with</div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 rounded-lg border border-gray-200 hover:shadow-sm transition bg-blue-50 text-blue-700">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.4v-2.9h2.1V9.1c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 2.9H14.4v7A10 10 0 0022 12z" />
              </svg>
              Continue with Facebook
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 rounded-lg border border-gray-200 hover:shadow-sm transition">
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 8.21 3.6h5.08c-2.4-3.2-6.3-5.6-13.29-5.6-8.76 0-16 7.24-16 16s7.24 16 16 16c4.78 0 8.99-2.13 11.76-5.47h-5.08c-1.5 2.38-4.67 3.87-8.21 3.87-5.63 0-10-4.37-10-10s4.37-10 10-10z"
                />
                <path
                  fill="#34A853"
                  d="M7 14.25l-2.75 2.74c-2.66 2.66-4.25 6.3-4.25 10.01 0 7.31 5.97 13.29 13.29 13.29 3.71 0 7.15-1.59 9.51-4.15l-2.5-1.98c-1.86 1.41-4.12 2.13-6.62 2.13-5.63 0-10-4.37-10-10s4.37-10 10-10c2.28 0 4.42.75 6.15 2.05l2.5-2.5C31.5 7.1 28.4 5.5 24.5 5.5c-8.76 0-16 7.24-16 16z"
                />
                <path
                  fill="#4A90E2"
                  d="M24 15c3.87 0 6.13 1.86 7.15 3.48h4.42c-.91-2.6-3.85-5.48-11.57-5.48-8.76 0-16 7.24-16 16 0 2.64.67 5.14 1.85 7.31l3.02-2.36c-.67-1.86-1.04-3.86-1.04-5.95 0-5.63 4.37-10 10-10z"
                />
                <path
                  fill="#FBBC04"
                  d="M24 40.5c-2.5 0-4.75-.75-6.62-2.13l-2.5 2.5C16.5 42.9 19.6 44.5 24 44.5c6.97 0 13-3.85 16.21-9.53h-5.08c-1.5 2.38-4.67 3.87-8.21 3.87z"
                />
              </svg>
              Continue with Google
            </button>

            <div>
              <p className="text-xs text-gray-400 text-center">
                Don't have an account?{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
