import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <div className={`min-h-screen transition-all duration-500 bg-gray-50`}>
      <Navbar onToggleSidebar={() => setIsSideBarOpen((a) => !a)} />
      <div className="flex">
        <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
