import React from "react";

const UserProfile = ({ userName, userAvatar }) => (
  <div className="flex items-center">
    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
      <img
        src={userAvatar}
        alt="User Avatar"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="ml-2">{userName}</span>
  </div>
);

export default function HomePage() {
  return (
    <div className="flex flex-col ml-64 border-2 border-black w-full h-screen">
      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <header className="p-4 pb-[19px] flex justify-between items-center ">
          {/* Search Area */}
          <div className="w-[50%]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 bg-gray-700 rounded text-white"
            />
          </div>
          {/* User Profile */}
          <UserProfile userName="John Doe" userAvatar="path_to_avatar.jpg" />
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Main Content Area</h1>
          <p className="mt-4">
            Welcome to your dashboard. Here, you can manage your orders, view
            products, and more.
          </p>
          {/* Additional Content */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Recent Orders</h2>
            <ul className="mt-4 space-y-4">
              <li>Order 1 - June 20, 2024</li>
              <li>Order 2 - June 18, 2024</li>
              <li>Order 3 - June 15, 2024</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
