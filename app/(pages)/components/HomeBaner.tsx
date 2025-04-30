"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeBaner = () => {
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <div className="max-w-4xl w-full mx-auto my-8 pb-6">
      <Slider {...settings} className="flex items-center justify-center ">
        <div className=" w-full h-full">
          <div className="w-full h-full flex items-center justify-center p-0">
            <Image
              src="/lic-desktop-banner.png"
              alt=""
              width={800}
              height={400}
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="w-full h-full">
            <Image
              src="/Home-fusion-desktop.svg"
              alt=""
              width={800}
              height={400}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6">
            <div className="flex items-center max-w-[80%] mx-auto gap-6]">
              <div className="w-28">
                <Image
                  src="/info-home-slider.webp"
                  alt=""
                  width={100}
                  height={300}
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between px-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-normal">
                    Get{" "}
                    <span
                      className="text-purple-700 font-semibold
                  "
                    >
                      Free Health Insurance Consultation
                    </span>{" "}
                    at Home
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-neutral-600 py-2">
                    <p className="inline-flex items-center">
                      <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full mr-2">
                        <Check size={16} className="text-green-600" />
                      </span>
                      ID Certified Expert
                    </p>
                    <p className="inline-flex items-center">
                      <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full mr-2">
                        <Check size={16} className="text-green-600" />
                      </span>
                      Life time claim support
                    </p>
                  </div>
                </div>
                <div className="w-1/5 ">
                  <Button className="bg-rose-600 px-3 h-12" size={"lg"}>
                    Book Home Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeBaner;
