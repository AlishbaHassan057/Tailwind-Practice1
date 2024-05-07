import React from "react";

const Cards = () => {
  return (
    <div className="container w-[70%] mt-4 flex mx-auto">
      <div className="flex flex-wrap mx-4 gap-20">
        <div className="w-[80%] sm:w-[70%] h-[16rem] mx-auto md:w-[18rem] px-2 mb-4 text-center">
          <div className="bg-white rounded-lg shadow-2xl p-6 h-full">
            <img
              src="https://nexcent-page.netlify.app/assets/Icon%20(1).png"
              className="w-16 h-16 mx-auto mb-4"
              alt="Icon"
            />
            <h3 className="text-[1rem] font-bold mb-2">
              Membership Organisations
            </h3>
            <p className="text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="w-[80%] sm:w-[70%] h-[16rem] mx-auto md:w-[18rem] px-2 mb-4 text-center">
          <div className="bg-white rounded-lg shadow-2xl p-6 h-full">
            <img
              src="https://nexcent-page.netlify.app/assets/Icon%20(2).png"
              className="w-16 h-16 mx-auto mb-4"
              alt="Icon"
            />
            <h3 className="text-[1rem] font-bold mb-2">
              National Associations
            </h3>
            <p className="text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="w-[80%] sm:w-[70%] h-[16rem] mx-auto md:w-[18rem] px-2 mb-4 text-center">
          <div className="bg-white rounded-lg shadow-2xl p-6 h-full">
            <img
              src="https://nexcent-page.netlify.app/assets/Icon%20(1).png"
              className="w-16 h-16 mx-auto mb-4"
              alt="Icon"
            />
            <h3 className="text-[1rem] font-bold mb-2">Clubs And Groups</h3>
            <p className="text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
