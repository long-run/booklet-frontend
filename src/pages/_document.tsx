/** @jsx jsx */ jsx;
import { Global, jsx } from '@emotion/core';
import Document, { Main, NextDocumentContext, NextScript } from 'next/document';
import { reset } from '../styles/reset';
import { fontFace } from '../styles/fontFace';

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
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
