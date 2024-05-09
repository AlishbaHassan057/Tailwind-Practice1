import React from "react";

const Info = () => {
  return (
    <>
      <div className="container flex-col w-[70%] mx-auto lg:w-[70%]  lg:mt-20  flex items-center justify-around sm:flex-col md:flex-col lg:flex-row  sm:mt-[0rem] sm:mx-auto">
        <div className="sm:order-first md:order-first">
          <img
            className="sm:w-[90%] sm:mx-auto md:w-[100%] lg:w-[90%]"
            src="https://nexcent-page.netlify.app/assets/Frame%2035.png"
          />
        </div>
        <div className="text-center mb-14 lg:w-[50%] md:w-[80%] sm:order-last md:order-last sm:w-[90%] md:text-center sm:text-center">
          <h1 className=" text-center text-[2rem] lg:mt-[-4rem] lg:mb-[5px] lg:text-left font-semibold text-lg">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-justify font-extralight text-[14.5px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className=" text-center bg-[#4CAF4F] px-4 mt-3 py-1 text-white text-[15px] font-semibold ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
