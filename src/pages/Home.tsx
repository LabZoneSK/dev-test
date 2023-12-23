import React, { useEffect, useState } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import { fetchAllData } from "../api/dataFetch";
import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";
import dataReducer from "./../redux/reducers/dataReducer";
import useAppSelector from "../hooks/useAppSelector";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const { data } = useAppSelector((state) => state.dataReducer);
  const { searchText } = useAppSelector((state) => state.dataReducer);
  const [items, setItems] = useState<any>([]);
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

  const filteredData = items.filter((item: any) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
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
            filteredData.map((item: any) => (
              <ImageCard item={item} key={item.author_id} />
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
