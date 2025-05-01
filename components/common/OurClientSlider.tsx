"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const OurClientSlider = () => {
  const settings: Settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
  };
  return (
    <div className="overflow-hidden max-w-6xl w-full mx-auto">
      <Slider
        {...settings}
        className="flex items-center justify-center w-full gap-3 "
      >
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div key={index} className="px-2 py-6">
              <div className="flex flex-col items-center justify-center p-2 max-w-sm h-[210px] w-full bg-zinc-50 rounded-md shadow-md">
                <div className="w-full h-36 flex items-center justify-center bg-gray-100">
                  <div className="w-40 h-auto">
                    <Image
                      src="/oriental.png"
                      alt=""
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1 py-4">
                  <h4 className="text-lg font-semibold text-gray-700">
                    Oriental Insurance
                  </h4>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default OurClientSlider;
