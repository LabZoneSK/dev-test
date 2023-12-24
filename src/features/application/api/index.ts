import { PAGE_SIZE, DEFAULT_PAGE } from "../../../shared/constants/pagination";
import { FeedResponse } from "../models";
import fetchJsonp from "fetch-jsonp";

const baseUrl =
  import.meta.env.VITE_API_URL ??
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
const get = async (
  page = DEFAULT_PAGE,
  pageSize = PAGE_SIZE
): Promise<FeedResponse> => {
  const searchStr =
    "&" +
    new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });

  try {
    const response = await fetchJsonp(baseUrl + searchStr, {
      jsonpCallback: "jsoncallback",
      timeout: 3000,
    });
    const result = await response.json();

    return result as FeedResponse;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get feed photos");
  }
};

export const feedApi = {
  get,
};
