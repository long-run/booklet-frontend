import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware, { Task } from 'redux-saga';
// import { AppState } from 'src/services/app/reducer';
import { createRouterMiddleware, RouteState } from 'connected-next-router';

import { rootReducers } from './reducers';
import rootSaga from './sagas';

// @ts-ignore
// import { Router } from 'server/routes';

// export interface StoreRootState {
//   app?: AppState;
//   router?: RouteState;
// }

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware({
  // Router,
  method: {
    push: 'pushRoute',
    replace: 'replaceRoute',
    prefetch: 'prefetchRoute',
  },
});

// next-redux-saga
// next-redux-wrapper
// connected-next-router
const makeStore = (preLoadedState = {}) => {
  const store = createStore(
    rootReducers,
    preLoadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware)),
  );

  (store as Store & { sagaTask: Task }).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default makeStore;
