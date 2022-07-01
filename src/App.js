import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import {PhotoProvider} from "./context/photos.context";

function App() {
    return (
        <PhotoProvider>
            <div className={'font-primary flex flex-col bg-[#EFEFEF]'}>
                <Navbar/>
                <Cards/>
                <Footer/>
            </div>
        </PhotoProvider>
    );
}

export default App;
