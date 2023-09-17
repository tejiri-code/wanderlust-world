import React from "react";

const Navbar = () => {
    const headingStyle = {
        fontFamily: "Dancing Script, sans-serif", // Replace "Roboto" with the actual font name
        
      };
  return (
    <nav className="bg-gray-900 text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 style={headingStyle} className="text-2xl font-semibold">Wanderlust World</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-purple-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#destinations"
              className="hover:text-purple-400 transition duration-300"
            >
              Destinations
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-purple-400 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-purple-400 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
