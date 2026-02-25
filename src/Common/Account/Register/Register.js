import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ onBackToLogin }) => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen w-full font-display">
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-background-light lg:w-1/2 relative">
        <Link
          to="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold text-sm"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Shop
        </Link>

        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-black tracking-tight text-[#0d1b10] mb-3">
              Create Account
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Sign up to track orders, save favorites, and earn loyalty points.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 h-12 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm font-bold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Google
            </button>
          </div>

          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">
              Or register with email
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-bold leading-6 text-[#0d1b10] mb-2"
              >
                Full Name
              </label>
              <div className="relative rounded-md shadow-sm">
                <span className="material-symbols-outlined absolute left-0 top-0 flex h-full items-center pl-3 text-gray-400 !text-[20px] pointer-events-none">
                  person
                </span>
                <input
                  id="fullName"
                  type="text"
                  required
                  className="block w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-[#0d1b10] bg-white focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                  placeholder="e.g. Jane Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-[#0d1b10] mb-2"
              >
                Email Address
              </label>
              <div className="relative rounded-md shadow-sm">
                <span className="material-symbols-outlined absolute left-0 top-0 flex h-full items-center pl-3 text-gray-400 !text-[20px] pointer-events-none">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  className="block w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-[#0d1b10] bg-white focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6 text-[#0d1b10] mb-2"
              >
                Password
              </label>
              <div className="relative rounded-md shadow-sm">
                <span className="material-symbols-outlined absolute left-0 top-0 flex h-full items-center pl-3 text-gray-400 !text-[20px] pointer-events-none">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  className="block w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-[#0d1b10] bg-white focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 font-medium"
              >
                I agree to the{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-2 h-12 flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 transition-transform hover:scale-[1.02] shadow-md text-[#0d1b10] text-base font-bold"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <button
              onClick={() =>
                onBackToLogin ? onBackToLogin() : navigate("/login")
              }
              className="text-primary font-bold hover:underline cursor-pointer"
            >
              Log In
            </button>
          </p>
        </div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block bg-[#ecf6ee]">
        <div className="absolute inset-0 bg-gradient-to-t from-background-light/40 to-transparent z-10"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzJoYFXp5Vuo6jrFHz0xwlgRUv5ybaa5XISoU77DwNHPC78-TjmCi0rxPSFNjy37FeKsNyqEK0RVp56tBuF_XiqVXVbDocvGjXPnaAEVBFsnVJvBaIH8oON145-uq3_h7FpNnpmCqadxqzaIvMpLQ_TwUVk1ZcPB6PN_2YYQovj-R7L3GO2zFeMiEhMv-ct3_afww2KaY1tpnMgf1-FVGPs1gDgAlP8DA2de90N3DexhyxXFGmXtK36GmN0IhOveI4PfbzSiDfAKiV"
          alt="Serene matcha tea setup"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />

        <div className="absolute bottom-12 left-12 right-12 z-20">
          <div className="backdrop-blur-md bg-white/90 p-8 rounded-2xl shadow-xl max-w-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-full text-primary">
                <span className="material-symbols-outlined !text-[32px]">
                  spa
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#0d1b10] mb-2">
                  Premium Quality Tea
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  "Join over 20,000 tea enthusiasts who have discovered their
                  perfect blend with us. Experience freshness like never
                  before."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
