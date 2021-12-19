import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { theme } from '../shared/styles/theme';
import Head from 'next/head';

import '../shared/styles/slider.scss';
import 'swiper/css';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawer';

import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';
import '@typeform/embed/build/css/popup.css';
import '@typeform/embed/build/css/widget.css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '@fontsource/baloo-bhaina-2';
import { TranslateProvider } from '../contexts/Translate';

const myTheme = extendTheme(theme);

const GlobalStyle = ({ children }: any) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={myTheme} resetCSS>
        <SidebarDrawerProvider>
          <TranslateProvider>
            <Component {...pageProps} />
          </TranslateProvider>
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
