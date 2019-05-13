import { Store } from 'redux';

export interface RouteProps<T> {
  query: T;
  pathname: string;
  asPath: string;
  req?: Request;
  res?: Response;
}

export interface ConnectedInitializeProps<QueryParams> extends RouteProps<QueryParams> {
  isServer: boolean;
  store: Store;
}
