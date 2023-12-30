import styles from "./FlickrFeed.module.css";

import { ImageCard } from "./components/ImageCard";
import useFlickrFeed from "./hooks/useFlickrFeed";

export function FlickrFeed(): JSX.Element {
	const { imagesFeed } = useFlickrFeed();

	return (
		<div className={styles["feed-container"]}>
			{imagesFeed.map((image) => (
				<ImageCard
					key={image.imageContentLink}
					imageTitle={image.title}
					imageDescription={image.description}
					imageContentLink={image.imageContentLink}
					alt={image.alt}
				/>
			))}
		</div>
	);
}
