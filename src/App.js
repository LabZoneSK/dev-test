import { useEffect, useState } from "react";
import jsonp from "jsonp";

import "./App.css";
import { Header } from "./components/Header";
import { MyFooter } from "./components/Footer";
import { Main } from "./components/Main";

const baseURL =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json";

function App() {
  const [allData, setAllData] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    jsonp(baseURL, { name: "jsonFlickrFeed" }, (err, data) => {
      if (err) {
        console.error(err);
        return err;
      } else {
        setAllData(data);
        setImages(data.items);
        return data;
      }
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Main allImages={images}></Main>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
