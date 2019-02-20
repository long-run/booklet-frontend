/** @jsx jsx */ jsx;
import { Global, jsx } from '@emotion/core';
import Document, { Main, NextDocumentContext, NextScript } from 'next/document';
import { reset } from '../styles/reset';

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <body>
          <Global styles={reset} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
