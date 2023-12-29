import React from "react";

const Skeleton = () => {
  return (
    <div className="max-w-sm">
      <div className="w-full bg-gray-200  animate-pulse h-60   mb-4"></div>
      <div className="h-6 ml-4 bg-gray-200 rounded-md animate-pulse max-w-[200px]  mb-2.5"></div>
      <div className="h-6 ml-4 bg-gray-200 rounded-md animate-pulse max-w-[250px]  mb-2.5"></div>
      <div className="h-6 ml-4 bg-gray-200 rounded-md animate-pulse max-w-[100px]  mb-2.5"></div>
    </div>
  );
};

export default Skeleton;
