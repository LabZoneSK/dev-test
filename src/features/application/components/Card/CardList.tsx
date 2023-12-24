import { FeedItem } from "../../models";
import Card from "./Card";

interface CardListProps {
  items: FeedItem[];
}
const CardList = ({ items }: CardListProps) => {
  return (
    <div className="p-8 md:px-0">
      {items.length === 0 ? (
        <p>No photo found</p>
      ) : (
        <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <Card data={item} key={`${item.link}-${index}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
