import React, { useEffect, useMemo, useState } from "react";
import ImageCard from "../components/ImageCard";
import useAppSelector from "../hooks/useAppSelector";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "@uidotdev/usehooks";
import { Data } from "../types/Data";

// Lazy load Hero and Loader components
const Hero = React.lazy(() => import("../components/Hero"));
const Loader = React.lazy(() => import("../components/Loader"));

const Home = () => {
  const { data, loading, searchText } = useAppSelector(
    (state) => state.dataReducer
  );

  const [items, setItems] = useState<Data[]>([]);
  const [loader, setLoader] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoader(true);

    setTimeout(() => {
      const newItems = data.slice(items.length, items.length + 4);

      setItems([...items, ...newItems]);

      setLoader(false);

      if (items.length >= data.length) {
        setHasMore(false);
      }
    }, 1000);
  };

  useEffect(() => {
    loadMore();
  }, []);

  const debouncedSearchText = useDebounce(searchText, 500);
  const filteredData = useMemo(
    () =>
      items.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
      ),
    [debouncedSearchText, items]
  );

  return (
    <>
      {loading && <Loader />}
      <Hero />

      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<Loader />}
        onScroll={loadMore}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-8 my-12 gap-6 max-w-[80%] m-auto">
          {filteredData &&
            filteredData.map((item) => (
              <ImageCard item={item} key={item.author_id} />
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
