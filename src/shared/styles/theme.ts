import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    purple: {
      '500': '#663399',
      '400': '#4B2076',
      '300': '#cb6ce6',
    },
    gray: {
      '900': '#000',
      '700': '#343A40',
      '600': '#6C757D',
      '500': '#adb5bd',
      '400': '#CED4DA',
      '300': '#DEE2E6',
      '200': '#F8F9FA',
    },
  },

  styles: {
    global: {
      fonts: {
        heading: 'Maven Pro',
        body: 'Roboto',
      },

      body: {
        bg: '#fff',
        color: 'black',
        overflowX: 'hidden',
      },
    },
  },
});
