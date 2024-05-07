import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-around mx-auto lg:w-[70%] sm:flex-col   md:flex-row md:gap-8  lg:flex-row  my-[1rem] mt-[8rem] lg:gap-24 md:w-[90%]">
        <div className="hero w-[50%] mx-auto order-last sm:order-last md:order-first lg:order-first md:w-[50%] lg:w-[45%] sm:text-center sm:mt-4">
          <h1 className="text-[2.2rem] font-bold  ">Lessons and insights</h1>
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

        <div className="hero-img sm:mt-[-4rem] mx-auto order-first sm:order-first md:order-last lg:order-first">
          <img
            className="lg:w-[80%] md:w-[70%] mx-auto sm:w-[70%] "
            src="https://nexcent-page.netlify.app/assets/Illustration.png"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
