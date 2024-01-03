import { Card, Badge } from "flowbite-react";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Tags } from "./Tags";

export const Image = ({ image, id }) => {
  const authorNameCorrected = (authorName) => {
    let result = authorName.split(/(")(.*)(")/g);
    return result[2];
  };

  return (
    <Card
      key={id}
      className="max-w-sm hover:bg-slate-50"
      imgAlt={image.title}
      imgSrc={image.media.m}
    >
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-balance">
        {image.title}
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Posted by: {authorNameCorrected(image.author)}
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <Button>
          <a
            href={image.link}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mr-2 h-5 w-5" />
            See more
          </a>
        </Button>
      </div>
      {image.tags.length > 0 ? <Tags tags={image.tags}></Tags> : ""}
    </Card>
  );
};
