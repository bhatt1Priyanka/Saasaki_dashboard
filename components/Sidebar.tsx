import React, { useState } from "react";
import Link from "next/link";
import { FaTachometerAlt, FaCog } from "react-icons/fa";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const linkClasses = (path: string) =>
    `flex items-center p-3 rounded-lg ${
      router.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-300 hover:bg-blue-600 hover:text-white"
    }`;

  return (
    <aside
      className={`fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      style={{
        height: "100vh",
        backgroundColor: "#04049f",
        color: "white",
      }}
    >
      <div className="flex items-center justify-between p-4">
        <span
          className={`text-2xl font-bold transition-all duration-300 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          My Dashboard
        </span>
        <RxHamburgerMenu onClick={toggleSidebar} className="cursor-pointer" />
      </div>
      <nav className="flex flex-col flex-1 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className={linkClasses("/dashboard")}>
              <FaTachometerAlt className="mr-3" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className={linkClasses("/settings")}>
              <FaCog className="mr-3" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
