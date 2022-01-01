import Footer from '../components/FooterComponent';
import ImageList from '../components/ImageList';
import Nav from '../components/NavComponent';

function Home() {
  return (
    <>
      <Nav title="Labzone Flickr App" />
      <ImageList />

      <Footer footerText="© 2022" />
    </>
  );
}

export default Home;
