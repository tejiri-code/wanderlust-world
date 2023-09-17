import React, { useState } from "react";
import { MdMenu } from "react-icons/md"; // You can import a menu icon if needed

const Navbar = () => {
    const headingStyle = {
        fontFamily: "Dancing Script, sans-serif",
    };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-purple-500  text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 style={headingStyle}  className="text-2xl font-semibold p-2">W</h1>
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {/* You can use a menu icon here */}
          <MdMenu size={32} />
        </button>
        {/* Desktop Menu */}
        <ul className={`hidden lg:flex space-x-6 ${isMobileMenuOpen ? 'hidden' : ''}`}>
          <li>
            <a
              href="#home"
              className="hover:text-purple-900 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="DestinationList.jsx"
              className="hover:text-purple-900 transition duration-300"
            >
              Destinations
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-purple-900 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-purple-900 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-900 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden  absolute top-0 left bg-gray-900 text-white p-3 py-4 h-50">
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-purple-900 transition duration-300 block">
                  Home
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-purple-900 transition duration-300 block">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-900 transition duration-300 block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-900 transition duration-300 block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-900 transition duration-300 block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
