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
    <div className=" w-full bg-[#34495e] bg-opacity-50  ">
      <div className="flex flex-row  max-w-[90%] m-auto  gap-2 justify-items-center justify-around  ">
        <div className="lg:mt-16 mt-4 flex flex-col gap-6 justify-items-center align-items-center ">
          <h1 className="text-white font-bold lg:text-5xl text-2xl capitalize">
            Showcase
          </h1>
          <h1 className="text-white font-bold lg:text-5xl text-2xl capitalize">
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
