import React from "react";
import { GoPeople } from "react-icons/go";
import { MdEventNote } from "react-icons/md";
import { FaHandPointUp } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";

const Achievements = () => {
  return (
    <>
      <div className="container w-[70%] mx-auto mb-14 ">
        <h1 className="text-[#4CAF4F] font-bold text-[21.5px] text-center mb-[40px] sm:mt-9">
          Achievements
        </h1>
        <div className="business flex items-center justify-around gap-0">
          {/* LEFT */}
          <div className="leftb w-[50%]">
            <h5>Helping a local</h5>
            <h1 className="text-[#4CAF4F] font-bold text-[25px]">
              business reinvent itself
            </h1>
            <h2>We reached here with our hard work and dedication</h2>
          </div>
          {/* RIGHT */}
          <div className="rightb w-[50%]">
            <div className="members flex items-center justify-around w-[70%] gap-36">
              <div className="memberright text-center mx-auto">
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
            <div className="members flex items-center justify-around w-[70%] gap-36 mt-4">
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
