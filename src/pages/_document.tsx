import * as React from 'react';

import emotionCache from '../lib/emotion.cache';

import { ColorModeScript } from '@chakra-ui/react';
import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

const { extractCritical } = createEmotionServer(emotionCache);

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(' ')}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

          <link
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
