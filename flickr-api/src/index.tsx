import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme, ThemeProvider } from '@chakra-ui/react';
import Home from './screens/Home';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
