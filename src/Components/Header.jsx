import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import football from "../Assets/football.png";


const Header = () => {
  return (
    <div className="h-[600px] flex flex-col">
      <div className="w-full absolute ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F9E79F"
            fill-opacity="1"
            d="M0,288L34.3,266.7C68.6,245,137,203,206,165.3C274.3,128,343,96,411,85.3C480,75,549,85,617,106.7C685.7,128,754,160,823,192C891.4,224,960,256,1029,245.3C1097.1,235,1166,181,1234,133.3C1302.9,85,1371,43,1406,21.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="lg:flex  md:flex-row justify-between h-[100%] md:h-[80%] z-0">
        <div id="heading" className="w-[70%] mx-24">
          <h1 className="flex text-6xl text-start flex-col gap-2 mt-24 md:mt-44 lg:mt-20 xl:mt-24 overflow-hidden transition-all duration-1000 transform translate-x-0 hover:translate-x-20">
            Find the Best<span>Activity for your</span>
            <span className="flex items-center">
              Child
              <IoIosArrowDroprightCircle className="text-sky-300 sm:ml-4 md:ml-44  lg:ml-44 xl:ml-64 hover:text-sky-600" />
            </span>
          </h1>
        </div>

        <div className="hidden lg:flex gap-0 ">
          <img
            src={football}
            alt="football"
            className="w-[60%] hover:-translate-x-4"
          />
        </div>
      </div>
      <div className="sm:w-1/2 md:w-[60%] flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 lg:gap-10 sm:gap-2 mx-auto md:mt-10 z-0">
        <button className="bg-yellow-500 hover:bg-orange-500  p-2 px-12 hover:px-16 rounded-3xl text-white font-medium w-full md:w-full sm:w-1/2 lg:w-auto">
          For Academies
        </button>
        <button className="bg-yellow-500 hover:bg-orange-500  p-2 px-6 hover:px-10 rounded-3xl text-white font-medium w-full md:w-full sm:w-1/2 lg:w-auto">
          SpArts in your home
        </button>
      </div>
    </div>
  );
};

export default Header;
