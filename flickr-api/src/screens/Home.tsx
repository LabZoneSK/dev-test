import React, { useState } from 'react';
import Footer from '../components/FooterComponent';
import ImageList from '../components/ImageList';
import Nav from '../components/NavComponent';

function Home() {
  const [searchText, setSearchText] = useState('');
  function callback(typo:string) {
    setSearchText(typo);
  }
  return (
    <>
      <Nav title="Flick app" search={callback} />
      <ImageList searchText={searchText} />

      <Footer footerText="Images are from Flickr." />
    </>
  );
}

export default Home;
