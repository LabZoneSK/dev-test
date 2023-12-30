import { render, screen, waitFor } from "@testing-library/react";
import { FlickrFeed } from "./FlickrFeed";
import { fetcher } from "./utils/fetcher";
import { FlickrFeedItem } from "./hooks/useFlickrFeed";

vi.mock("./utils/fetcher");

describe("FlickrFeed should", () => {
	const fetcherMock = fetcher;

	it("render images", async () => {
		const ctaText = "Explore ➔";
		const expectedImageAlt = "some Alt Text";
		const expectedDescriptionText = "this goes on the bottom of the card";
		const mockImage = createMockFlickrFeedItem({
			descriptionText: expectedDescriptionText,
			imageAlt: expectedImageAlt,
		});
		const expectedImageLink = mockImage.media.m;
		const mockResponseBody = createMockFetcherReturn([mockImage]);
		vi.mocked(fetcherMock).mockImplementation(() => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(mockResponseBody);
				}, 50);
			});
		});

		render(<FlickrFeed />);

		await waitFor(() => {
			expect(screen.queryByText(mockImage.title)).toBeInTheDocument();
			const img = screen.getByAltText(expectedImageAlt);
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute("src", expectedImageLink);
			expect(
				screen.queryByText(expectedDescriptionText),
			).toBeInTheDocument();
			const cta = screen.getByText(ctaText);
			expect(cta).toBeInTheDocument();
			expect(cta).toHaveAttribute("href", expectedImageLink);
		});
	});
});

function createMockFetcherReturn(items: FlickrFeedItem[]) {
	return {
		title: "Uploads from everyone",
		link: "https://www.flickr.com/photos/",
		description: "",
		modified: "2023-12-28T17:52:54Z",
		generator: "https://www.flickr.com",
		items: items,
	};
}

function createMockFlickrFeedItem({
	title = "A cute cat",
	contentLink = "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	descriptionText = "This image contains a really cute cat",
	imageAlt = "A cat with brown fur and green eyes",
}: Partial<{
	title: string;
	contentLink: FlickrFeedItem["media"]["m"];
	descriptionText: string;
	imageAlt: string;
}> = {}): FlickrFeedItem {
	return {
		title: title,
		link: "https://www.flickr.com/photos/196649425@N05/53425817452/",
		media: {
			m: contentLink,
		},
		date_taken: "2023-12-17T20:58:35-08:00",
		description: ` <p><a href="https://www.flickr.com/people/196649425@N05/">ferro.bapt.sud</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/196649425@N05/53425817452/" title="${title}"><img src="${contentLink}" width="240" height="160" alt="${imageAlt}" /></a></p> <p>${descriptionText}</p> `,
		published: "2023-12-28T17:54:04Z",
		author: 'nobody@flickr.com ("ferro.bapt.sud")',
		author_id: "196649425@N05",
		tags: "train trainenfrance traindanslesud trainenoccitanie sncf sncfr\u00e9seau groupesncf ma100 fret europorte prima e37500 e37501 e37521 e37500akiem traindeciternes traindefret lignedebordeauxsaintjean\u00e0s\u00e8teville transversalesud l\u00e9zignancorbi\u00e8res trainpassion trainspotting e37500europorte railpassion railways railfran\u00e7ais rail spotting spotteurdefrance spotteurferroviaire photographeferroviaire railwayphotography ferroviaire ferroviairefran\u00e7ais",
	};
}
