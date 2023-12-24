import { ChangeEvent, UIEvent, useCallback, useMemo, useState } from "react";
import { useGetFeed } from "../hooks/useGetFeed";
import LoadingSpinner from "../../../shared/components/icons/LoadingSpinner";
import CardList from "./Card/CardList";
import { useDebounce } from "use-debounce";

const Content = () => {
  const { items, isLoading, error, refetch } = useGetFeed();
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 500);

  const filteredItems = useMemo(() => {
    if (debouncedSearch !== "") {
      return items.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    return items;
  }, [debouncedSearch, items]);

  /**
   * Watch main container scroll position
   * When scroll position almost reach bottom of container (right before last 100px)
   * Do a refetch, which increase page size
   * Update search result list with new items
   */
  const handleScroll = useCallback(
    (e: UIEvent) => {
      // Do not fetch while loading or searching
      if (isLoading) return;
      if (debouncedSearch) return;

      const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLElement;
      const fetchOffset = 100;

      if (scrollTop + clientHeight >= scrollHeight - fetchOffset) {
        refetch();
      }
    },
    [debouncedSearch, isLoading, refetch]
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <main onScroll={handleScroll} className="flex-1 overflow-scroll ">
      <div className="container mx-auto">
        {items.length !== 0 && !error && (
          <>
            <div className="p-8 md:px-0 pb-0 flex justify-end min-w-[300px] ">
              <input
                id="search"
                aria-label="search"
                name="search"
                type="text"
                placeholder="Search by title"
                className="w-full sm:w-1/3 rounded-xl border px-4 py-2 hover:border-secondary focus:outline-none focus:ring-secondary focus:border-secondary"
                onChange={handleSearch}
              />
            </div>
            <CardList items={filteredItems} />
          </>
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
