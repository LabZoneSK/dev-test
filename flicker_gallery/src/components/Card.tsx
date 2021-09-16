import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { m } from "framer-motion";

interface CardProps {
  title: string;
  imageSrc: string;
  linkToFlickPost: string;
  description: string;
}
function Card({ title, linkToFlickPost, imageSrc, description }: CardProps) {
  //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

  return (
    <m.article
      className="card"
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 10 }}
    >
      <img src={imageSrc} alt={description} />
      <div className="cardBody">
        <h3>{title}</h3>
        <p>{description.substr(0, 150) + "..."}</p>
      </div>
      <div className="cardExploreBtn">
        <a href={linkToFlickPost}>
          Explore <IoArrowForward />
        </a>
      </div>
    </m.article>
  );
}

export default Card;
