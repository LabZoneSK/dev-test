import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/mobile.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" w-full bg-[#34495e] bg-opacity-50 h-[200px] lg:h-[600px]  ">
      <div className="flex flex-row  max-w-[90%] lg:pt-12 m-auto  gap-2 justify-center items-center ">
        <div className="lg:mt-16 mt-8 flex flex-col  gap-4 mb-4 lg:gap-6 ">
          <h1 className="text-white font-bold lg:text-5xl text-4xl capitalize">
            Showcase
          </h1>
          <h1 className="text-white font-bold lg:text-5xl text-4xl capitalize">
            Your Photos
          </h1>
        </div>
        <div className="mt-0 hidden lg:inline-block">
          <Lottie options={defaultOptions} height={350} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
