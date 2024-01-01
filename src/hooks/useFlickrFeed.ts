import useSWRImmutable from "swr/immutable";
import { fetcher } from "../utils/fetcher";

export interface FlickrFeedItem {
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

export interface TransformedFlickrFeedItem {
	title: string;
	imageContentLink: string;
	description: string;
	alt: string;
}

export default function useFlickrFeed(): {
	imagesFeed: TransformedFlickrFeedItem[];
	isLoading: boolean;
	error: unknown;
} {
	const { data, isLoading, error } = useSWRImmutable<
		{ items: FlickrFeedItem[] },
		unknown
	>(
		"https://api.flickr.com/services/feeds/photos_public.gne?format=json",
		fetcher,
	);

	if (error) {
		console.error(error);
	}

	if (data) {
		return {
			imagesFeed: data.items.map((item) => {
				const trimmedTitle = item.title.trim();
				const parsedDescription = parseDescription(item.description);
				return {
					title: trimmedTitle ? trimmedTitle : "Untitled",
					imageContentLink: item.media.m,
					alt: parsedDescription.alt,
					description: parsedDescription.descriptionText,
				};
			}),
			isLoading,
			error,
		};
	} else {
		return {
			imagesFeed: [],
			isLoading,
			error,
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
	const descriptionText = paragraphs[2]?.textContent ?? "";

	return {
		alt: altText,
		descriptionText: descriptionText.trim(),
	};
}
