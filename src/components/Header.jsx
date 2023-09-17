import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-purple-500 py-12 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Wanderlust World</h1>
        <p className="text-lg mb-8">
          Explore the Beauty of the World and Create Unforgettable Memories
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-gray-900 hover:bg-gradient-to-r from-gray-900 to-purple-500 hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Explore Destinations
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
