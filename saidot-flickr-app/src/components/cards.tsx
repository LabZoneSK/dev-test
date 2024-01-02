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
  const handleHoverStart = () => {
    controls.start({
      scale: 0.9, 
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      scale: 1, 
    });
  };
  const truncatedDescription = description.slice(0, 150) || "Description coming soon";

  return (
    <motion.article className="card" custom={id}  onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd} animate={controls} whileHover={{ scale: 0.9 }}>
      <a href={linkToFlickPost}>
        <img src={imageSrc} alt={description} />
      </a>

      <div className="cardBody">
        <h3 className='title'>{title}</h3>
        <p>{truncatedDescription}</p>
      </div>
      <div className="cardExploreBtn">
        <a className="anchorExploreBtn" href={linkToFlickPost}>
          Explore <IoArrowForward />
        </a>
      </div>
    </motion.article>
  );
}

export default Card;
