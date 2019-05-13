import { combineReducers } from 'redux';
import { appReducer } from '../service';
import { routerReducer } from 'connected-next-router';

export const rootReducers = combineReducers({
  app: appReducer,
  router: routerReducer,
  // append more reducers
});
