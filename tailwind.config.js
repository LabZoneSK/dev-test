module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Use 300 for light, 500 for regular, 700 for dark
        'flick-grey': {
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
        'off-white': {
          DEFAULT: '#F8F7F7',
        },
      },
      fontFamily: {        
        daikon: ['DaikonFont'],
      },
      h: {
        9: '2.25rem'
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'navItemHover': '#E3EDE9',
      'navItemActive': '#E3EDE9',
      'lightGrey': '#E6E8E5',
      'softGreen': '#E3EDE9',
      'softGreen-100': '#D3DEDA',
      'softGreen-200': '#D2E3D5',
      'softGreen-300': 'rgba(211, 222, 218, 0.2)',
      'softGreen-400': '#F2F7F2',
      'lightGreen': '#235C48',
      'lightGreen-100': '#205241',
      'lightGreen-200': '#e3ede94d',
      'grey': '#939C9C',
      'facebook': '#3B5998',
      'twitter': '#00ACEE',
      'lightGrey-100': '#f2f2f2'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'lightGreen': '#E9EFED',
      'lightGrey': '#E6E8E5',
      'lightGreen-100': '#D2E3D5',
      'lightGreen-200': '#DEDFDD',
      'darkGreen': '#235C48'
    }),
    textColor: theme => ({
      ...theme('colors'),   
      'lightGreen': '#E3EDE9',
      'lightGreen-100': '#235C48',
      'darkGray': '#525D5F',
      'grey': '#939C9C',
      'darkGreen': '#102D29',
      'error': '#EB6237',
      'waiting': 'rgba(83, 99, 243, 1)',
      'light-grey': '#D3DEDA'
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
