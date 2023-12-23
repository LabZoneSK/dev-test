import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ item }: any) => {
  const date = new Date(item.date_taken);
  const regex = /\(\"(.*)\"\)/;
  const match = item.author.match(regex);
  const [show, setShow] = useState<boolean>(true);

  const handleClick = () => setShow((current) => !current);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <Link to={item.link}>
          <img
            className={`w-full h-80 object-cover relative ${
              show === false ? "blur-none" : "blur-lg"
            }`}
            src={item.media.m}
            alt="images item"
          />
        </Link>
        <div
          className={`absolute text-center text-white font-semibold rounded-full text-sm px-3 py-3 border border-white cursor-pointer hover:border-blue-300 hover:text-blue-300 ${
            show === false ? "hidden" : "flex"
          }`}
          onClick={handleClick}
        >
          See Image
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base font-semibold">
          Author: {match[1]}
        </p>
        <p className="text-gray-700 text-base">Date: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default ImageCard;
