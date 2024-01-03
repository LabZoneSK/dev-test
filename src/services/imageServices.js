import jsonp from "jsonp";
const baseURL =
  "https://api.flickr.com/services/feeds/photos_public.gne?format=json";

export const getAll = () => {
  let response = "";
  jsonp(baseURL, { name: "jsonFlickrFeed" }, (err, data) => {
    if (err) {
      console.error(err);
      response = err;
    } else {
      console.log(data);
      response = data;
    }
  });
  console.log("response", response);
  return response;
};
