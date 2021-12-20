import {useEffect, useState} from 'react'
import Flickr from 'flickr-sdk/flickr-sdk.js'
import './App.css';

function App() {

  const [images,setImages] = useState([])


  useEffect(() => {
    const flickr = new Flickr('06d7c684b3d84a1eaa880de627aff4c3');

    flickr.photos.search({
      text: 'expensive cars'
    }).then(function (res) {
      console.log(res.body);
      setImages([...res.body.photos.photo])
    }).catch(function (err) {
      console.error('bonk', err);
    });

  },[])


  return (
    <div className="App">
        <header >
          Flick app
        </header>

        <main>
          <section className="cards">
            {
              images.map((img) => {
                return (

                  <div className="card">
                    <img className="card-image" src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`} alt="" />
                    <h2 className="card-title">{img.title}</h2>
                    {/* <p className="card-desc">text</p>  */}
                    <a className="card-link" href={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`}>Explore ➔</a>
                  </div>
                      )
          })
            }
          </section>
        </main>

        <footer>
          Images are from Flickr.
        </footer>
    </div>
  );
}

export default App;
