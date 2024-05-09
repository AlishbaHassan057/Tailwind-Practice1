import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  FaFacebook,
  FaTwitter,
  FaFacebookMessenger,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-gray-900 text-white py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between">
        <div className="w-full md:w-1/4 lg:w-1/5 text-center md:text-left lg:text-left">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
            Nexcent
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            All rights reserved
          </p>
          <div className="flex items-center justify-center md:justify-start lg:justify-start">
            <FaFacebook className="mr-2" />
            <FaTwitter className="mr-2" />
            <FaFacebookMessenger className="mr-2" />
            <FaYoutube />
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mt-8 md:mt-0 lg:mt-0">
          <div className="text-center md:text-left lg:text-left">
            <h2 className="font-bold text-base md:text-lg lg:text-xl mb-2">
              Company
            </h2>
            <ul>
              <li className="text-sm md:text-base lg:text-lg mb-2">About Us</li>
              <li className="text-sm md:text-base lg:text-lg mb-2">
                Contact Us
              </li>
              <li className="text-sm md:text-base lg:text-lg mb-2">Blog</li>
              <li className="text-sm md:text-base lg:text-lg mb-2">Pricing</li>
              <li className="text-sm md:text-base lg:text-lg mb-2">
                Testimonials
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mt-8 md:mt-0 lg:mt-0">
          <div className="text-center md:text-left lg:text-left">
            <h2 className="font-bold text-base md:text-lg lg:text-xl mb-2">
              Support
            </h2>
            <ul>
              <li className="text-sm md:text-base lg:text-lg mb-2">
                Help Center
              </li>
              <li className="text-sm md:text-base lg:text-lg mb-2">
                Terms of service
              </li>
              <li className="text-sm md:text-base lg:text-lg mb-2">Legal</li>
              <li className="text-sm md:text-base lg:text-lg mb-2">
                Privacy policy
              </li>
              <li className="text-sm md:text-base lg:text-lg mb-2">Status</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 mt-8 md:mt-0 lg:mt-0">
          <div className="text-center md:text-left lg:text-left">
            <h2 className="font-bold text-base md:text-lg lg:text-xl mb-2">
              Stay up to date
            </h2>
            <form className="bg-transparent" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
                className="py-2 px-3 w-full mb-2 md:mb-3 lg:mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <button
                type="submit"
                className="bg-green-500 py-2 px-4 rounded text-white focus:outline-none hover:bg-green-600"
              >
                <CiLocationArrow1 size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
