/** @jsx jsx */ jsx;
import { Global, jsx } from '@emotion/core';
import Document, { Main, Head, NextDocumentContext, NextScript } from 'next/document';
import { reset } from '../styles/reset';
import { fontFace } from '../styles/fontFace';

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <body>
          <Global styles={[fontFace, reset]} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
