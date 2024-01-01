import styles from "./FlickrFeed.module.css";

import { ImageCard } from "./components/ImageCard/ImageCard";
import Loader from "./components/Loader/Loader";
import useFlickrFeed from "./hooks/useFlickrFeed";

export function FlickrFeed(): JSX.Element {
	const { imagesFeed, isLoading, error } = useFlickrFeed();

	if (error) {
		return (
			<>
				<p>Oops...</p>
				<p>An error occured when fetching images from the API :(</p>
			</>
		);
	}

	const feedContent = isLoading ? (
		<Loader />
	) : (
		imagesFeed.map((image) => (
			<ImageCard
				key={image.imageContentLink}
				imageTitle={image.title}
				imageDescription={image.description}
				imageContentLink={image.imageContentLink}
				alt={image.alt}
			/>
		))
	);

	return (
		<div
			className={styles["feed-container"]}
			aria-live="polite"
			aria-busy={isLoading}
		>
			{feedContent}
		</div>
	);
}
