import App, { AppComponentProps, Container, DefaultAppIProps, NextAppContext } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import makeStore, { StoreRootState } from '../store/config';

interface StoreAppProps extends AppComponentProps {
  store: Store<StoreRootState>;
  // tslint:disable-next-line
  pageProps: any;
}

class StoreApp extends App<StoreAppProps> {
  constructor(props: StoreAppProps) {
    super(props);
  }

  public static async getInitialProps({
    ctx,
    Component,
  }: NextAppContext): Promise<
    // tslint:disable-next-line
    DefaultAppIProps & { ctxPathname?: string; isPartials?: boolean; query: any }
  > {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const isPartials = !!ctx.pathname.match(/\/partials\//);
    return {
      pageProps,
      isPartials,
      query: ctx.query,
      ctxPathname: ctx.pathname,
    };
  }

  public render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
// @ts-ignore
export default withRedux(makeStore, { debug: false })(StoreApp);
