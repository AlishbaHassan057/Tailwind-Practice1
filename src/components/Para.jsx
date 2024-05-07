import React from "react";
import { TbArrowBigRight } from "react-icons/tb";

const Para = () => {
  return (
    <>
      <div className="container w-[70%] mx-auto mb-6 flex items-center justify-around gap-0">
        <div className="left w-[50%]">
          <h1 className="font-semibold text-[19px]">
            {" "}
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="font-light text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className=" bg-[#4CAF4F] px-4 mt-3 py-1 text-white text-[15px] font-semibold">
            Learn More
          </button>
        </div>
        <div className="right w-[50%]">
          <img
            width="100%"
            src="https://nexcent-page.netlify.app/assets/Unlock1.png"
          />
        </div>
      </div>
      <div className="container w-[70%] mx-auto mb-6 text-center my-11">
        <h1 className="text-[1.9rem] font-bold">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className=" bg-[#4CAF4F] px-3 mt-3 py-[0.4rem] text-white text-[15px] font-semibold rounded-lg">
          <div className="flex items-center justify-around gap-0">
            <div className="get">Get a Demo</div>
            <div className="icon">
              <TbArrowBigRight size={21} />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Para;
