import React, { useEffect, useMemo, useState } from "react";
import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";
import useAppSelector from "../hooks/useAppSelector";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "@uidotdev/usehooks";
import { Data } from "../types/Data";

const Home = () => {
  const { data } = useAppSelector((state) => state.dataReducer);
  const { searchText } = useAppSelector((state) => state.dataReducer);
  const [items, setItems] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      const newItems = data.slice(items.length, items.length + 4);

      setItems([...items, ...newItems]);

      setLoading(false);

      if (items.length >= data.length) {
        setHasMore(false);
      }
    }, 1000);
  };

  useEffect(() => {
    loadMore();
  }, []);

  console.log(process.env.REACT_APP_FLICKR_API, "I am data");

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
