import React, { useEffect, useRef, useState, useCallback } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";
import { SpinnerDotted } from "spinners-react";
import Search from "./components/Search";
function App() {
  const [query, setQuery] = useState(
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2a33dd08ea58d2c86ccb995df5f1cf6b&tags=nature&format=json&extras=description&nojsoncallback=1&per_page=10&page="
  );
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const { loading, error, list } = useFetch(query, page, searchText);
  const loader = useRef<any>(null);
  const searchBar = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [searchType, setSearchType] = useState("text");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleChange = (e: any) => {
    let s = searchBar.current as any;
    setPage(0);
    setSearchText("&" + searchType + "=" + s.value);
  };
  const ChangeSearchType = (e: any) => {
    setSearchType(e.target.value);
  };
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  if (error) {
    // @ts-ignore
    return <div>Error: {error!.message}</div>;
  } else {
    return (
      <div className="App">
        <Header />

        <main>
          <Search
            searchBar={searchBar}
            handleChange={handleChange}
            ChangeSearchType={ChangeSearchType}
          />
          {list.map((p: any, i: any) => {
            return (
              <Card
                key={i}
                id={i}
                imageSrc={
                  "https://farm" +
                  p.farm +
                  ".staticflickr.com/" +
                  p.server +
                  "/" +
                  p.id +
                  "_" +
                  p.secret +
                  ".jpg"
                }
                linkToFlickPost={
                  "https://www.flickr.com/photos/" + p.owner + "/" + p.id
                }
                title={p.title}
                description={p.description._content}
              />
            );
          })}
          <div ref={loader} />
          {loading && (
            <>
              <br />
              <div className="loader">
                <SpinnerDotted enabled={true} />
              </div>
            </>
          )}
          {error && <p>Error!</p>}
        </main>
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;