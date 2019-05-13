declare module 'connected-next-router' {
  import { Middleware, Reducer } from 'redux';
  import * as React from 'react';

  export interface RouteState {
    action: string;
    location?: Location;
  }

  function routerReducer(): Reducer;
  function createRouterMiddleware({}): Middleware;
  function initialRouterState(path: string): RouteState;

  export class ConnectedRouter extends React.Component {}
}
