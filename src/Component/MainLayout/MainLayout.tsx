import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex h-full w-screen box-border overflow-y-auto ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
