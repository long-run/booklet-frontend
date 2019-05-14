import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer';
import { ThemeType } from '../../components/Bookfeed/PostTheme';
import { PostStatus } from '../../components/Post/Summary';

// bookFeed

export interface BookFeedState {
  title: string;
  author: string;
  rating: number;
  coverImage: string;
  status: PostStatus;
  modifiedDate: string;
  backgroundTheme: ThemeType;
  note: string;
}

export const bookFeedInitialState: BookFeedState = {
  title: '',
  author: '',
  rating: 4,
  coverImage: '',
  status: PostStatus.CurrentlyReading,
  modifiedDate: 'Just now',
  backgroundTheme: ThemeType.Colorful,
  note: '',
};

export class BookFeedReducer extends ImmerReducer<BookFeedState> {}

export const bookFeedReducer = createReducerFunction(BookFeedReducer, bookFeedInitialState);
export const bookFeedActions = createActionCreators(BookFeedReducer);
