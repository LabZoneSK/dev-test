import { UIEvent } from "react";
import Card from "../../../shared/components/Card";
import { useGetFeed } from "../hooks/useGetFeed";

const Content = () => {
  const { items, isLoading, refetch } = useGetFeed();

  const handleScroll = (e: UIEvent) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLElement;
    const footerHeight = 65;

    if (scrollTop + clientHeight >= scrollHeight - footerHeight) {
      refetch();
    }
  };

  return (
    <main onScroll={handleScroll} className="flex-1 overflow-scroll ">
      <div className="container mx-auto">
        {isLoading && <div className="">Loading feed...</div>}

        <div className="p-8">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items?.map((item, index) => (
              <Card data={item} key={`${item.link}-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
