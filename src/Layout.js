import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <div
      className={`min-h-screen transition-all duration-500 bg-gradient-to-br ${
        isSideBarOpen ? "from-gray-500 to-gray-200" : "from-gray-50 to-gray-100"
      }`}
    >
      <Navbar onToggleSidebar={() => setIsSideBarOpen((a) => !a)} />
      <div className="flex">
        <Sidebar isOpen={isSideBarOpen} setIsOpten={setIsSideBarOpen} />
      </div>
    </div>
  );
}

export default Layout;
