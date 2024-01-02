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
  const { loading, error, list } = useFetch(flickrApiQuery, page, searchText, setPage);
  const { showButton, scrollToTop } = useToTopButton();

  // if theres an error with the app we Show an error message and stop rendring
  if (error) return <div>Error: Server Problem</div>;

return (
  <>
    <div className="App">
      <Header />
      <main>
        <Search setPage={setPage} setSearchText={setSearchText} />
        <CardListing list={list} loading={loading} setPage={setPage} />
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
