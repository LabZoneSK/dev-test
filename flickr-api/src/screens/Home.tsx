import Footer from '../components/FooterComponent';
import ImageList from '../components/ImageList';
import Nav from '../components/NavComponent';

function Home() {
  return (
    <>
      <Nav title="Flick App" />
      <ImageList />

      <Footer footerText="Images are from Flickr." />
    </>
  );
}

export default Home;
