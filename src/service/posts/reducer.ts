import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer';
import { PostStatus } from '../../components/Post/Summary';
import { ProfileState } from '../profile/reducer';

export interface ActionState {
  liked: boolean;
  likeCount: number;
}

export interface HeaderState extends ProfileState {
  modifiedDate: string;
}

export interface SummaryState {
  title: string;
  author: string;
  rating: number;
  coverImage: string;
  backgroundImage: string;
  status: PostStatus;
}

export interface ReviewState {
  note: string;
}

export interface PostState extends SummaryState, ActionState, HeaderState, ReviewState {
  key: string;
}

export type PostsState = PostState[];

export const postsInitialState: PostsState = [];

export class PostsReducer extends ImmerReducer<PostsState> {}

export const postsReducer = createReducerFunction(PostsReducer, postsInitialState);
export const postsActions = createActionCreators(PostsReducer);
