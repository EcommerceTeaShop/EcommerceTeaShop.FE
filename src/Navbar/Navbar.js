import React from "react";

function Navbar({ onToggleSidebar }) {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
              TeaValaut
            </h1>
            <button
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-non mr-1"
              onClick={onToggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-2/3">
              <input
                type="search"
                placeholder="Search..."
                className="pl-20 pr-8 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
              <svg
                className="w-6 h-6 absolute left-4 top-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3 ml-4">
              <img
                src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff"
                alt="Admin"
                className="w-10 h-10 rounded-full ring-2 ring-blue-500"
              />
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-800">
                  Admin User
                </p>
                <p className="text-xs text-gray-500">admin@crm.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
