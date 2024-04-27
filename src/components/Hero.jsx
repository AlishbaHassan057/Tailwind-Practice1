import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container sm:flex-col md:flex-row ml-[2rem] my-[1rem] md:ml-56 flex items-center justify-around mt-[8rem]">
        <div className="hero w-[50%]">
          <h1 className="text-[2.2rem] font-bold">Lessons and insights</h1>
          <h1 className="text-[2rem] font-semibold text-[#4CAF4F]">
            From 8 Years
          </h1>
          <p className="mt-1 ">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="sm: mb-[3rem] bg-[#4CAF4F] mt-5 text-white rounded-md px-8 py-1 hover:bg-white hover:text-black hover:border border-[#4CAF4F] transition-all">
            Register
          </button>
        </div>

        <div className="hero-img  w-[50%]">
          <img
            className="w-[320px] mr-[4srem]"
            src="https://nexcent-page.netlify.app/assets/Illustration.png"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
