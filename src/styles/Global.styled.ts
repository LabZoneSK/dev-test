import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rosario:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
    font-size: 62.5%;
    overflow-x: hidden;
    font-family: 'Rosario', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`
