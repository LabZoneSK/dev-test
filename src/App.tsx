import "@fontsource-variable/rosario";
import "@fontsource/roboto";
import "./App.module.css";
import { FlickrFeed } from "./FlickrFeed";
import SWRCacheProvider from "./utils/SWRCacheProvider";

function App() {
	return (
		<SWRCacheProvider>
			<header>
				<h1>Flick app</h1>
			</header>
			<main>
				<FlickrFeed />
			</main>
			<footer>
				<p>Images are from Flickr.</p>
			</footer>
		</SWRCacheProvider>
	);
}

export default App;
