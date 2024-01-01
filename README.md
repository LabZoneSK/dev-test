# Running the project

1. Install dependencies with your favourite package manager, ex: `npm ci`
2. Run `dev` script, ex: `npm run dev`

To run the tests, just do `npm run test`

# Implementation and technical decisions

The project uses [vite](https://vitejs.dev) as bundler with react + typescript and [CSS modules](https://github.com/css-modules/css-modules) for styling.

The [Flickr Feed API](https://www.flickr.com/services/feeds/docs/photos_public/) doesn't return any `Access-Control-Allow-Origin` header so we are not allowed to access the response body in the browser. There are 2 ways of solving this:

1. Make a backend that forwards the requests to the API
2. Use [jsonp](https://en.wikipedia.org/wiki/JSONP)

Since this is not a real project I ended up picking option 2 even though it isn't safe, but also the API returns the body in a jsonp style so it was also way easier to do it in this way.

The requests are made with SWR and jsonp-fetch. I picked SWR even though there is no point in caching the requests, I am already familiar with it so it was simple to just use it.

If I had the choice of using any layout I wanted, I would use a [masonry layout](https://i.stack.imgur.com/Z25DI.png) due to the fact that this layout allow us to keep the original aspect ratio of the images (no need to crop) and also we would be able to have less blank space whenever an image doesn't have a description and/or title.
That said, the grid is done purely with CSS with the [auto-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fit) value.

The image description is extracted from the response HTML, filtering unnecessary strings and defaulting to empty if unable to or if the image doesn't have a description.

### Tests

You can run the tests with the `test` script, ex: `npm run test`.

Unfortunately [jsdom doesn't support the fetch API](https://github.com/jsdom/jsdom/issues/1724), so I had to mock the fetcher instead of using a request interceptor like [msw](https://mswjs.io) or [nock](https://github.com/nock/nock).

# Labzone - FE Developer Skill Test

A simple test app to ascertain developer skill-level.

The challenge is to create a basic app using HTML, CSS, JavasScript - React.js and the Flickr API.

The app should demonstate your ability to set up a React App, load in some photos from Flickr (JSON format) [public API](https://api.flickr.com/services/feeds/photos_public.gne?format=json) and display the photo, name and description in a card layout. The images should be clickable and link to the content. The app should have a header and a footer and ideally be responsive.

Bonus points will be awarded for a working search box, loading more photos on scroll and any other visual improvements or animations that you would like to add.

Please fork this repository and create pull request when you are done.

If you do wish to use other Flickr API feeds, be aware that some endpoints do require an API key. You can register for an API key [here](https://www.flickr.com/services/apps/create/).

More documentation on the API can be found on [this link](https://www.flickr.com/services/api/).

Pixel perfect mockup to design is a real focus for us at Labzone, the mockup for the test can be found @ https://www.figma.com/file/WnxpAKMFJkzvcrzf4h8vok/Flickr-App (you will need to login to see design details / sidebar)

### Good luck !
