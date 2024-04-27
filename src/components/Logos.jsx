import React from "react";

const Logos = () => {
  return (
    <>
      <div className="container w-[80%] mx-auto mt-20">
        <h1 className="mx-auto text-center text-2xl font-bold">Our Clients</h1>
        <p className="text-center text-bold">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="logos flex items-center justify-around mt-[2rem]">
          <img src="https://nexcent-page.netlify.app/assets/Logo%20(1).png" />
          <img src="https://nexcent-page.netlify.app/assets/Logo%20(2).png" />
          <img src="https://nexcent-page.netlify.app/assets/Logo%20(3).png" />
          <img src="https://nexcent-page.netlify.app/assets/Logo%20(4).png" />
          <img src="https://nexcent-page.netlify.app/assets/Logo%20(5).png" />
        </div>
        <h1 className="mx-auto text-center text-2xl font-bold mt-12 text-[#4CAF4F]">
          Our Community
        </h1>
        <p className="text-center mt-3">
          Manage your entire community in a single system
        </p>
        <p className="text-center mt-1">Who is Nextcent suitable for?</p>
      </div>
    </>
  );
};

export default Logos;
