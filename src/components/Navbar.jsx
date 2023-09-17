import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Wanderlust World
        </Link>

        <div className="space-x-4">
          <Link
            to="/destinations"
            className="text-white hover:underline hover:text-blue-300 transition duration-300"
          >
            Destinations
          </Link>
          <Link
            to="/about"
            className="text-white hover:underline hover:text-blue-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className="text-white hover:underline hover:text-blue-300 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/faq"
            className="text-white hover:underline hover:text-blue-300 transition duration-300"
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
