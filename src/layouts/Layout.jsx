import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar onMenuClick={toggleSidebar} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 p-4 transition-all duration-300">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
