import { FeedItem } from "../../features/application/models";
import ArrowRight from "./icons/ArrowRight";

interface CardProps {
  data: FeedItem;
  key: string;
}

const Card = ({ data }: CardProps) => {
  const descriptionWithoutImage = data.description.replace(/<img .*?>/g, "");
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
        <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
        <div
          className="text-gray-700 text-base mb-2 line-clamp-4 h-[6rem]"
          // TODO: Remove this in production grade code
          dangerouslySetInnerHTML={{ __html: descriptionWithoutImage }}
        />
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="w-full flex h-[44px] justify-center items-center px-3 py-2 text-sm font-medium text-secondary bg-explore hover:bg-explore-dark focus:ring-4 focus:outline-none focus:ring-blue-300"
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
