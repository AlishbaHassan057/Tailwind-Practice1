import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between mt-5 sm: px-[60px] ">
        <div className="left flex justify-around items-center">
          <div className="logo-img">
            <img src="https://nexcent-page.netlify.app/assets/Icon%20(6).png" />
          </div>
          <h1 className="logo text-2xl font-bold">Nexcent</h1>
        </div>
        <div className="middle ">
          <ul className="hidden sm:hidden md:hidden  justify-around items-center gap-6 lg:flex">
            <li className="cursor-pointer hover:text-[#4CAF4F] transition-all">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#4CAF4F] transition-all">
              Service
            </li>
            <li className="cursor-pointer hover:text-[#4CAF4F] transition-all">
              Feature
            </li>
            <li className="cursor-pointer hover:text-[#4CAF4F] transition-all">
              Product
            </li>
            <li className="cursor-pointer hover:text-[#4CAF4F] transition-all">
              Testimonila
            </li>
          </ul>
        </div>
        <div className="hidden sm:hidden md:hidden items-center justify-around gap-2 lg:flex">
          <div className="button-right">
            <button className="bg-white text-black px-8 py-1 border border-[#4CAF4F] rounded-md hover:bg-[#4CAF4F] hover:text-white transition-all">
              Login
            </button>
          </div>
          <div className="btn-left">
            {" "}
            <button className="bg-[#4CAF4F] text-white rounded-md px-8 py-1 hover:bg-white hover:text-black hover:border border-[#4CAF4F] transition-all">
              Sign up
            </button>
          </div>
        </div>
        <GiHamburgerMenu className="sm:block  md:block lg:hidden size-6 hover:cursor-pointer " />
      </div>
    </>
  );
};

export default Navbar;
