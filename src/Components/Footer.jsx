import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-500 h-72 font-serif flex justify-center items-center">
      <div className=" w-[50%]">
        <div className="text-center text-white mb-4">
          <h1 className="font-medium text-[2rem] duration-1000 hover:scale-125">
            Stay Updated
          </h1>
          <p className="text-[1.1rem] duration-1000 hover:scale-125">
            Get the latest updates on academics new you!
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-evenly  w-[90%] m-auto gap-2">
          <input
            type="email"
            placeholder="E-mail"
            className="w-[70%] sm:w-full h-10 hover:h-12 rounded-lg px-2 border-0 m-auto"
          />

          <button className="bg-sky-300 hover:bg-orange-300 hover:h-12 p-2 rounded-lg px-4 border-0 hover:text-lg text-white sm:w-1/2 m-auto lg:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
