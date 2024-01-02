

import React, { useState } from 'react';
import "./css/main.css";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import useFetch from "./components/hooks/useFetch";
import Search from "./components/search";
import useToTopButton from "./components/hooks/useObserver";
import CardListing from "./components/cardGallery";
import { flickrApiQuery } from "./constants";



function App() {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  // We use custom hooks specifically made to handle a certain logic in the app
  const { loading, error, list, noResults } = useFetch(flickrApiQuery, page, searchText, setPage);
  const { showButton, scrollToTop } = useToTopButton();

  // If there's an error with the app, show an error message and stop rendering
  if (error) return <div>Error: Server Problem</div>;

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Search setPage={setPage} setSearchText={setSearchText} />
          {noResults ? (
            <div className="noresult-found">No search results found.</div>
          ) : (
            <CardListing list={list} loading={loading} setPage={setPage} />
          )}
        </main>
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
