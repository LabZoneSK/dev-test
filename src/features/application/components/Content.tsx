import { UIEvent, useCallback } from "react";
import Card from "./Card/Card";
import { useGetFeed } from "../hooks/useGetFeed";
import LoadingSpinner from "../../../shared/components/icons/LoadingSpinner";

const Content = () => {
  const { items, isLoading, error, refetch } = useGetFeed();

  const handleScroll = useCallback(
    (e: UIEvent) => {
      if (isLoading) return;

      const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLElement;
      const footerHeight = 65;

      if (scrollTop + clientHeight >= scrollHeight - footerHeight) {
        refetch();
      }
    },
    [isLoading, refetch]
  );

  return (
    <main onScroll={handleScroll} className="flex-1 overflow-scroll ">
      <div className="container mx-auto">
        {items.length !== 0 && (
          <div className="p-8">
            <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item, index) => (
                <Card data={item} key={`${item.link}-${index}`} />
              ))}
            </div>
          </div>
        )}

        {isLoading && (
          <div className="w-full inline-flex items-center justify-center my-8">
            <LoadingSpinner />
            <span className="ml-2">Loading photo feeds...</span>
          </div>
        )}

        {error && (
          <p className="text-red-700 p-8" role="alert">
            Something wrong, please try to reload...
          </p>
        )}
      </div>
    </main>
  );
};

export default Content;
