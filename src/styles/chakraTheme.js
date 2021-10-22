import { extendTheme } from '@chakra-ui/react';

const colors = {
  // Use 500 for light, 700 for regular, 900 for dark
  'flick-green': {
    50: '#A4CEBA',
    100: '#92C4AC',
    200: '#6DB090',
    300: '#509574',
    400: '#3D7158',
    500: '#235C48',
    600: '#294C3B',
    700: '#1D362A',
    800: '#172C22',
    900: '#122119',
  },
  'flick-grey': {
    500: '#F5F5F5',
    600: '#e7e7e7',
    700: '#e7e7e7',
  },
};

const fonts = {
  fonts: {
    heading: 'DaikonFont',
    body: 'DaikonFont',
  },
};

const overrides = {
  colors,
  fonts,
};

export default extendTheme(overrides);
