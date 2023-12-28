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
	alt: string;
}

function useFlickrFeed(): {
	imagesFeed: TransformedFlickrFeedItem[];
	//isLoading: boolean;
	//error: null; // type better
} {
	// maybe dont use swr -> no point in caching
	const { data } = useSWRImmutable<{ items: FlickrFeedItem[] }>(
		"https://api.flickr.com/services/feeds/photos_public.gne?format=json",
		fetcher,
	);

	if (data) {
		return {
			imagesFeed: data.items.map((item) => {
				const parsedDescription = parseDescription(item.description);
				return {
					title: item.title,
					imageContentLink: item.media.m,
					alt: parsedDescription.alt,
					description: parsedDescription.descriptionText,
				};
			}),
		};
	} else {
		return {
			imagesFeed: [],
		};
	}
}

function parseDescription(description: string): {
	alt: string;
	descriptionText: string;
} {
	const parser = new DOMParser();
	const parsedDescription = parser.parseFromString(description, "text/html");
	const paragraphs = parsedDescription.getElementsByTagName("p");
	const altText =
		paragraphs[1].getElementsByTagName("img")?.[0].getAttribute("alt") ??
		"";
	const descriptionText = paragraphs[2]?.innerText ?? "";

	return {
		alt: altText,
		descriptionText,
	};
}
