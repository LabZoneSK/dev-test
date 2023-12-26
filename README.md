# Description:

This is a developer task done as an assignment. This is a web application titled Flickr which fetches images and data  uploaded by the user from Flickr API. 
The project is live at  (https://dev-test-beryl-iota.vercel.app/).

![Home Page](https://github.com/aln1234/dev-test/blob/main/public/gif/scroll.gif?raw=true)

# Name of the project:

Flickr
Showcase your images

![React](https://img.shields.io/badge/React-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-green)
![Tailwind](https://img.shields.io/badge/Tailwind-hotpink)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Basic Functionality](#basic-functionality)
- [Pages](#pages)
- [Testing](#testing)

## Getting Started
### Prerequisites
There is some error while fetching data using the Flickr API given in the test. It shows a CORS error while fetching data. Upon some research, there was a way to 
solve this issue and it was using a Chrome extension named CORS.
Extension link (https://chromewebstore.google.com/detail/lhobafahddgcelffkeicbaginigeejlf).

### Installation
Clone the repo using the `git clone URL`.
Starting the project
Install all the dependencies
### `yarn install`

In the project directory, you can install dependencies:

### `yarn start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Basic Functionality
Here is all the basic functionality added to the web application
- [X]  Fetch data using Flickr API.
- [X] Implement Search Features.
- [X] Implement Infinite Scroll Features.
- [X] Implement design as per the Figma design with minor modification
- [X] Added page responsiveness.

## Pages
- Home page
- Error Page
- Image Link Page

## Testing
Testing is done using React Testing Library and Jest.
All the functions written in the reducer and components are tested properly for  possible test cases.
Test cases are written for:
- Data Reducer
- Footer
- ImageCard
- Navbar
