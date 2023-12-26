import * as React from "react";

import Lottie from "react-lottie";
import * as animationData from "../animation/loader.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-blue/30 flex justify-center items-center transition duration-300 ease-in-out z-10">
      <div className="flex flex-col items-center">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}
