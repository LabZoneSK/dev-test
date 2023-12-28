import "@fontsource-variable/rosario";
import "@fontsource/roboto";
import "./App.module.css";
import { FlickrFeed } from "./FlickrFeed";

/*
TODO:
3. Change the max-width, set some higher value and increase the number of card per row (max 5?)
4. Filters (see api docs)
5. Infinite scroll (add a button to enable the infinite scroll, limit to like 10 requests in total?)
*/

function App() {
	return (
		<>
			<header>
				<h1>Flick app</h1>
			</header>
			<main>
				<FlickrFeed />
			</main>
			<footer>
				<p>Images are from Flickr.</p>
			</footer>
		</>
	);
}

export default App;
