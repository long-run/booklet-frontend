import { createRouterMiddleware, RouteState } from 'connected-next-router';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware, { Task } from 'redux-saga';
import { AppState } from '../service/app/reducer';
import { BookFeedState } from '../service/bookFeed/reducer';
import { PostsState } from '../service/posts/reducer';
import { ProfileState } from '../service/profile/reducer';
import { initialState } from './intialState';

import { rootReducers } from './reducers';
import rootSaga from './sagas';

// @ts-ignore
// import { Router } from 'server/routes';

export interface StoreRootState {
  app?: AppState;
  router?: RouteState;
  profile?: ProfileState;
  posts?: PostsState;
  bookFeed?: BookFeedState;
}

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
const makeStore = (preLoadedState = initialState()) => {
  const store = createStore(
    rootReducers,
    preLoadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware)),
  );

  (store as Store<StoreRootState> & { sagaTask: Task }).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default makeStore;
