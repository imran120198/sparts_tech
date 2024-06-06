import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CgProfile } from "react-icons/cg";
import { ThreeCircles } from "react-loader-spinner";

const BottomHero = ({ parents }) => {
  const sliderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Assuming you set loading to false when data is fetched
    if (parents && parents.length > 0) {
      setLoading(false);
    }
  }, [parents]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 100,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMouseEnter = () => {
    sliderRef.current.slickPlay();
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPause();
  };

  if (loading) {
    return (
      <div className="w-full h-[430px] flex justify-center items-center bg-gray-200">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[430px] bg-gray-200 p-10">
      <div className="w-[99%] m-auto">
        <div className="flex justify-end text-end">
          <h1 className="w-[290px] text-yellow-500 font-sans text-4xl font-medium overflow-hidden transition-all duration-1000 transform translate-x-0 lg:hover:translate-x-8 first-letter-color">
            Happy Kids, Satisfied Parents!
          </h1>
        </div>
        <div className="mt-4">
          <Slider ref={sliderRef} {...settings}>
            {parents?.map((d) => (
              <div
                key={d.id}
                className="h-[33%] text-black rounded-xl group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-[100%] flex justify-center items-center rounded-t-xl overflow-hidden transform transition-transform">
                  <img
                    src={d.image}
                    alt="Student"
                    className="w-[95%] h-56 rounded-xl object-cover hover:scale-125 duration-1000"
                  />
                  <div className="absolute bottom-2 right-5 z-10">
                    <CgProfile className="text-3xl bg-gray-500 rounded-3xl text-white" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
