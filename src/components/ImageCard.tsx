import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../types/Data";

type ItemProps = {
  item: Data;
};

const ImageCard = ({ item }: ItemProps) => {
  const date = new Date(item.date_taken);
  const regex = /\(\"(.*)\"\)/;
  const match = item.author.match(regex);
  const [show, setShow] = useState<boolean>(true);

  //set inital image to blur and show only after user click show as some of image
  // fetch through api was NSFW content
  const handleClick = () => setShow((current) => !current);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-xl hover:-translate-y-2 transition duration-200 ease-in-out  ">
        <div className="flex items-center justify-center">
          <Link to={item.link}>
            <img
              className={`w-full h-60 lg:h-80 object-cover relative ${
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

        <div className="px-6 py-4 flex flex-col gap-2 mt-2">
          <div className="font-bold text-xl mb-2 text-[rgb(11,134,139)] ">
            {item.title}
          </div>
          <p className="text-gray-700 text-base font-semibold ">
            Author:{" "}
            <span className="text-[rgb(11,134,139)] ">{match && match[1]}</span>
          </p>
          <p className="text-gray-700 text-base">
            Date:{" "}
            <span className="text-[rgb(11,134,139)] ">
              {date.toDateString()}
            </span>
          </p>

          <button className="flex gap-2 justify-center items-center bg-[#dfe6e9] text-[rgb(11,134,139)] px-24 py-2 hover:border border-[rgb(11,134,139)] ">
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
