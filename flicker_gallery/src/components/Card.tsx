import React, { useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

interface CardProps {
  id: number;
  title: string;
  imageSrc: string;
  linkToFlickPost: string;
  description: string;
}

function Card({
  id,
  title,
  linkToFlickPost,
  imageSrc,
  description,
}: CardProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: -30,
      transition: { delay: i * 0.3 },
    }));
  }, [controls]);

  return (
    <motion.article className="card" custom={id} animate={controls}>
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
    </motion.article>
  );
}

export default Card;
