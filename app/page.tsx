import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to My Dashboard
      </h1>
      <div className="space-x-4">
        <Link
          href="/dashboard"
          className="text-lg text-blue-500 hover:underline"
        >
          Go to Dashboard
        </Link>
        {/* <Link
          href="/settings"
          className="text-lg text-blue-500 hover:underline"
        >
          Go to Settings
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
