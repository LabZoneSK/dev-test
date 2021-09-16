import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
interface FlickerResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: {
      id: string;
      owner: string;
      secret: string;
      server: string;
      farm: number;
      title: string;
      ispublic: number;
      isfriend: number;
      isfamily: number;
      is_primary: number;
      has_comment: number;
      description: {
        _content: string;
      };
    }[];
  };
  stat: string;
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // @ts-ignore
  const [images, setImages] = useState<Partial<FlickerResponse>>([]);

  useEffect(() => {
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2a33dd08ea58d2c86ccb995df5f1cf6b&gallery_id=66911286-72157647277042064&format=json&extras=description&nojsoncallback=1"
      )
      .then(
        (result) => {
          setIsLoaded(true);
          setImages(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    // @ts-ignore
    return <div>Error: {error!.message}</div>;
  } else {
    return (
      <div className="App">
        <Header />
        {!isLoaded && <div>Loading...</div>}
        <main>
          {isLoaded &&
            images.photos &&
            images.photos!.photo.map((p) => {
              return (
                <Card
                  key={p.id}
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
