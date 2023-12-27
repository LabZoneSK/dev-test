import React, { ChangeEvent, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import ImageCard from "../components/ImageCard";
import useAppSelector from "../hooks/useAppSelector";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "@uidotdev/usehooks";
import { Data } from "../types/Data";
import useAppDispatch from "../hooks/useAppDispatch";
import { setSearchText } from "../redux/reducers/dataReducer";

// Lazy load Hero and Loader components
const Hero = React.lazy(() => import("../components/Hero"));
const Loader = React.lazy(() => import("../components/Loader"));

const Home = () => {
  const { data, loading, searchText } = useAppSelector(
    (state) => state.dataReducer
  );
  
  const [items, setItems] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useAppDispatch();
  
  const loadMore = useCallback(() => {
    setTimeout(() => {
      const newItems = data.slice(items.length, items.length + 4);
      setItems([...items, ...newItems]);
      if (items.length >= data.length) {
        setHasMore(false);
      }
    }, 1000);
  }, [data, items]); 

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


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { target } = event;
    dispatch(setSearchText(target.value));
  };

  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<Loader />}
        onScroll={loadMore}
      >
        <div className="menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-3 mt-6">
        <div className="relative mx-auto text-gray-600 lg:block lg:mt-0 mt-4 ">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 w-96 rounded-lg text-sm focus:outline-none"
            type="text"
            name="search"
            onChange={handleChange}
            placeholder="Search By Title"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 lg:mr-2 mr-0"
          >
            <svg
              className="text-black h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-8 my-12 gap-6 max-w-[80%] m-auto">
       
          {filteredData &&
            filteredData.map((item) => (
              <ImageCard item={item} key={item.author_id} />
            ))}
        </div>
      </InfiniteScroll>
    </Suspense>
  );
};

export default Home;
