import fetchJsonp from "fetch-jsonp";

export function fetcher(url: string) {
	return fetchJsonp(url, {
		jsonpCallbackFunction: "jsonFlickrFeed",
	}).then((res) => res.json());
}
