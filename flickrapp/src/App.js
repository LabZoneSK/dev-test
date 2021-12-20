import { useEffect,useState} from 'react'
import Flickr from 'flickr-sdk/flickr-sdk.js'
import './App.css';

function App() {

  const flickr = new Flickr('06d7c684b3d84a1eaa880de627aff4c3');
  const [images,setImages] = useState([])
  const [curImages,setCurImages] = useState([])
  const [search,setSearch] = useState('')



   useEffect(() => {
      console.log(curImages)
   },[curImages])


    useEffect(() => {

      
      flickr.photos.search({
          text: 'expensive cars'
        }).then(function (res) {
            console.log(res.body);
            setImages([...res.body.photos.photo])
            setCurImages(res.body.photos.photo.slice(0,10))
          }).catch(function (err) {
              console.error('bonk', err);
            });
            
    },[])

  function searchImages (e) {
    setCurImages([])
    e.preventDefault()
    flickr.photos.search({
      text: search
    }).then(function (res) {
      console.log(res.body);
      setImages([...res.body.photos.photo])
      setCurImages(res.body.photos.photo.slice(0,10))
    }).catch(function (err) {
      console.error('bonk', err);
    });
    setSearch('')
  }

  function handleScroll(e) {
    // let cards = document.querySelector('.cards')
    // console.log(cards.scrollHeight , cards.clientHeight , e.target.scrollTop)
    if(e.target.scrollTop === e.target.scrollTopMax) {
      let length = curImages.length
      setCurImages(images.slice(0,length + 10))
    }
  }


  return (
    <div className="App">
        <header >
          Flick app
        </header>

        <main onScroll={handleScroll}>

          <form onSubmit={searchImages}>
            <label htmlFor="search">Search</label>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id='search' />
          </form>

          <section className="cards">
            {
              curImages.map((img,index) => {
                return (

                  <div key={index} className="card">
                    <img className="card-image" src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`} alt="" />
                    <h2 className="card-title">{img.title}</h2>
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
