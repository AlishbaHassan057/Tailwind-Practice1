import React from "react";
import { GoPeople } from "react-icons/go";
import { MdEventNote } from "react-icons/md";
import { FaHandPointUp } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";

const Achievements = () => {
  return (
    <>
      <div className="container w-[70%] mx-auto mb-14 ">
        <h1 className="text-[#4CAF4F] font-bold text-[21.5px] text-center mb-[10px] sm:mt-9">
          Achievements
        </h1>
        <div
          className="flex-col text-center mx-auto flex items-center justify-around lg:gap-0 sm:flex-col md:flex-col lg:flex-row 
          sm:mt-[-2rem] md:mt-[-3rem] lg:text-left lg:w-[100%]"
        >
          {/* LEFT */}
          <div className="order-first sm:w-[80%] sm:text-center lg:text-left  lg:w-[50%]  sm:order-first md:order-first">
            <h5 className="sm:mt-[2rem] md:mt-12 lg:mt-12">Helping a local</h5>
            <h1 className="w-[100%] text-[#4CAF4F] font-bold text-[25px]">
              business reinvent itself
            </h1>
            <h2 className="lg:w-[100%]">
              We reached here with our hard work and dedication
            </h2>
          </div>
          {/* RIGHT */}
          <div className="mt-[1rem] mx-auto order-last lg:mt-9 w-[100%] sm:order-last md:order-last">
            <div className="mx-auto flex items-center justify-around w-[100%] gap-20 mt-4">
              <div className="memberright">
                <div className="people">
                  <GoPeople color="green" size="1.3rem" />
                </div>
                <div className="number">2,245,341</div>
                <div className="contact">Members</div>
              </div>
              <div className="memberleft w-72">
                <div className="event">
                  <MdEventNote color="green" size="1.3rem" />
                </div>
                <div className="number">2,245,341</div>
                Event Bookings
              </div>
            </div>
            <div className="mx-auto flex items-center justify-around w-[100%] gap-20 mt-4">
              <div className="payright">
                <div className="log">
                  <FaHandPointUp color="green" size="1.3rem" />
                </div>
                <div className="number">46,328</div>
                <div className="contact">Payments</div>
              </div>
              <div className="payleft w-72">
                <div className="log">
                  <BsBuildings color="green" size="1.3rem" />
                </div>
                <div className="number">828,867</div>
                <div className="contact">Clubs </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
