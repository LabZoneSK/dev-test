import React from 'react';
import theme from './styles/chakraTheme';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => (
  <ChakraProvider theme={theme} resetCSS>
    <Header />
    <Container />
    <Footer />
  </ChakraProvider>
)

export default App;

