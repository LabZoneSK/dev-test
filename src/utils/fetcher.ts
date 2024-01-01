import fetchJsonp from "fetch-jsonp";

export async function fetcher(url: string) {
	const response = await fetchJsonp(url, {
		jsonpCallbackFunction: "jsonFlickrFeed",
	});
	if (response.ok) {
		return response.json();
	} else {
		const error = await response.json<unknown>(); // there is no method to get the body as string unfortunately :/
		throw new Error(JSON.stringify(error));
	}
}
