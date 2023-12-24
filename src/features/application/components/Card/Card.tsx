import { FeedItem } from "../../models";
import ArrowRight from "../../../../shared/components/icons/ArrowRight";

interface CardProps {
  data: FeedItem;
  key: string;
}

const Card = ({ data }: CardProps) => {
  // Remove image tag off description
  // Prevent render image twice
  const descriptionWithoutImageTag = data.description.replace(/<img .*?>/g, "");
  const title =
    !data.title || data.title.trim() === "" ? "No title" : data.title;

  return (
    <div className="min-w-[300px] rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-[154px] object-cover"
        src={data.media.m}
        alt={data.title}
      />
      <div className="px-6 py-4">
        <div className="text-[28px] mb-2 line-clamp-1">{title}</div>
        <div
          className="text-base mb-4 line-clamp-4 h-[6rem]"
          // TODO: Remove this in production grade code
          dangerouslySetInnerHTML={{ __html: descriptionWithoutImageTag }}
        />
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="w-full flex h-[44px] justify-center items-center px-3 py-2 text-sm font-medium text-secondary bg-explore focus:ring-4 focus:outline-none focus:ring-secondary hover:border-solid hover:border-secondary hover:border"
        >
          <>
            Explore
            <ArrowRight />
          </>
        </a>
      </div>
    </div>
  );
};

export default Card;
