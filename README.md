# Topics and choices
Followed the instructions given by company. Instructions can be seen in README.dev-test-md

Chose to use TailwindCSS and Flowbite (and Flowbite React), as this is the technology used by the company.
Started out creating the base layout, with a header, footer and main components. In Main - split into the Search Component and Gallery. Gallery would be a map of Images.

Had trouble getting the data from Flickr public feed, because it was given in JSONP (JSON with padding). Had to learn about JSONP and then find a way to use the data. Originally used axios to get the data, but axios does not support JSONP. Used the suggestion from the COOKBOOK of axios to use the jsonp package to get the data.

Once the data was working correctly, made cards for the images, and then mapped the images into the Gallery and Image cards.

I assumed that the majority of the Flowbite/TailwindCSS components were responsive, but they were not. So had to rework the layout to be responsive from mobile first (suggested by TailwindCSS docs).
