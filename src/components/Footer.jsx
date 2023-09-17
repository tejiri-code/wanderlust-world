import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: info@wanderlustworld.com</p>
          <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Explore</h3>
          <ul className="text-gray-400">
            <li className="mb-2">Destinations</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Wanderlust World. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
