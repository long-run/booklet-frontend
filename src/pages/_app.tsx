import App, { AppComponentProps, Container, DefaultAppIProps, NextAppContext } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import makeStore, { StoreRootState } from '../store/config';
import { Splash } from './Splash';

interface StoreAppProps extends AppComponentProps {
  store: Store<StoreRootState>;
  // tslint:disable-next-line
  pageProps: any;
}

interface StoreAppState {
  isFirst: boolean;
}

class StoreApp extends App<StoreAppProps, StoreAppState> {
  constructor(props: StoreAppProps) {
    super(props);
  }

  state = { isFirst: true };

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

  componentDidMount(): void {
    setTimeout(() => this.setState({ isFirst: false }), 2500);
  }

  public render() {
    const { Component, pageProps, store } = this.props;
    const { isFirst } = this.state;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
          {isFirst ? <Splash /> : null}
        </Provider>
      </Container>
    );
  }
}
// @ts-ignore
export default withRedux(makeStore, { debug: false })(StoreApp);
