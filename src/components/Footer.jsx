import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

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
    <>
      <div className="w-[80%] text-center mx-auto flex items-top justify-around bg-[#263238] text-white mb-[5rem] py-6 gap-0 mt-11">
        <div className="mr-[-9rem]">
          <h1 className="font-bold text-[19px] mt-4">Nexcent</h1>
          <h1>Copyright © 2020 Nexcent ltd.</h1>
          <h1>All rights reserved</h1>
          <div className="flex items-center justify-around mt-2">
            <div className="facbook">
              <FaFacebook />
            </div>
            <div className="twitter ml-[-3rem]">
              <FaTwitter />
            </div>
            <div className="messenger ml-[-3rem]">
              <FaFacebookMessenger />
            </div>
            <div className="youtube ml-[-3rem]">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="Second text-[14.5px] text-left ">
          <h1 className="font-bold">Company</h1>
          <h2>About Us</h2>
          <h2>Contact Us</h2>
          <h2>Blog</h2>
          <h2>Pricing</h2>
          <h2>Testimonials</h2>
        </div>
        <div className="Second text-[14.5px] text-left ml-[-12rem]">
          <h1 className="font-bold">Support</h1>
          <h2>Help Center</h2>
          <h2>Terms of service</h2>
          <h2>Legal</h2>
          <h2>Privacy policy</h2>
          <h2>Status</h2>
        </div>
        <div className="Second text-[14.5px] text-left">
          <h1 className="ml-[-14rem]">Stay up to date</h1>
          <form className="ml-[-14rem] bg-transparent" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              style={{ backgroundColor: "transparent" }}
              required
            />
            <button type="submit">
              <CiLocationArrow1 size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
