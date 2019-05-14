import { combineReducers } from 'redux';
import { appReducer } from '../service';
import { routerReducer } from 'connected-next-router';
import { bookFeedReducer } from '../service/bookFeed';
import { profileReducer } from '../service/profile';
import { postsReducer } from '../service/posts';

export const rootReducers = combineReducers({
  app: appReducer,
  router: routerReducer,
  profile: profileReducer,
  posts: postsReducer,
  bookFeed: bookFeedReducer,
} as any);
