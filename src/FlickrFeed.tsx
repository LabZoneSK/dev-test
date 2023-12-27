import styles from "./FlickrFeed.module.css";

import useSWRImmutable from "swr/immutable";
import { ImageCard } from "./components/ImageCard";
import { fetcher } from "./fetcher";

export function FlickrFeed(): JSX.Element {
	const { imagesFeed } = useFlickrFeed();

	return (
		<div className={styles["feed-container"]}>
			{imagesFeed.map((image) => (
				<ImageCard
					key={image.description}
					imageTitle={image.title}
					imageDescription={image.description}
					imageContentLink={image.imageContentLink}
				/>
			))}
		</div>
	);
}

interface FlickrFeedItem {
	title: string;
	link: string;
	media: { m: string };
	date_taken: string;
	description: string;
	published: string;
	author: string;
	author_id: string;
	tags: string;
}

interface TransformedFlickrFeedItem {
	title: string;
	imageContentLink: string;
	description: string;
}

function useFlickrFeed(): {
	imagesFeed: TransformedFlickrFeedItem[]; // transform these, return already what it transformed, maybe make 2 hooks, useFlickrPublicFeedAPI (fetches) and useFlickrPublicFeed (transforms)
	//isLoading: boolean;
	//error: null; // type better
} {
	// maybe dont use swr -> no point in caching
	const { data } = useSWRImmutable<{ items: FlickrFeedItem[] }>(
		"https://api.flickr.com/services/feeds/photos_public.gne?format=json",
		fetcher,
	);

	return {
		imagesFeed:
			data?.items.map((item) => ({
				title: item.title,
				imageContentLink: item.media.m,
				description: item.description,
			})) ?? [],
	};
}
