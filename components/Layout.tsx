import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-100 transition-all duration-300 ml-20 sm:ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;
