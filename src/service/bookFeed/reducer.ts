import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer';
import { PostStatus } from '../../components/Post/Summary';

// bookFeed

export enum ThemeType {
  Romantic = 'Romantic',
  Mysterious = 'Mysterious',
  Colorful = 'Colorful',
  Neutral = 'Neutral',
  Melancholy = 'Melancholy',
  Random = 'Random',
}

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

export class BookFeedReducer extends ImmerReducer<BookFeedState> {
  public setBookInfo(payload: { title: string; author: string; coverImage: string }) {
    this.draftState.title = payload.title;
    this.draftState.author = payload.author;
    this.draftState.coverImage = payload.coverImage;
  }

  public setRating(payload: number) {
    this.draftState.rating = payload;
  }

  public setStatus(payload: PostStatus) {
    this.draftState.status = payload;
  }

  public setBackgroundTheme(payload: ThemeType) {
    this.draftState.backgroundTheme = payload;
  }

  public setNote(payload: string) {
    this.draftState.note = payload;
  }
}

export const bookFeedReducer = createReducerFunction(BookFeedReducer, bookFeedInitialState);
export const bookFeedActions = createActionCreators(BookFeedReducer);
