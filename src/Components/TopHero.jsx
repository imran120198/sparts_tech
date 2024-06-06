import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ThreeCircles } from "react-loader-spinner";

const TopHero = ({ academics }) => {
  const sliderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Assuming you set loading to false when data is fetched
    if (academics && academics.length > 0) {
      setLoading(false);
    }
  }, [academics]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className="w-full h-[450px] flex justify-center items-center">
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
    <div className="w-full h-[450px] bg-sky-300 p-8">
      <div className="w-[99%] m-auto mt-6">
        <h1 className="w-[220px] text-white font-sans text-3xl font-medium mx-2 overflow-hidden transition-all duration-1000 transform translate-x-0 lg:hover:translate-x-16 first-letter-color">
          Explore Our Top Academies
        </h1>

        <div className="mt-4">
          <Slider ref={sliderRef} {...settings}>
            {academics?.map((d) => (
              <div
                key={d.id}
                className="h-[33%] text-black rounded-xl group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-[100%] flex justify-center items-center rounded-t-xl overflow-hidden transform transition-transform ">
                  <img
                    src={d.image}
                    alt="Academies"
                    className="w-[95%] h-56 rounded-xl object-cover hover:scale-125 duration-1000"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
