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
  id: string;
}

export type PostsState = PostState[];

export const postsInitialState: PostsState = [];

export class PostsReducer extends ImmerReducer<PostsState> {
  public addPost(payload: { post: PostState }) {
    this.draftState.unshift(payload.post);
  }

  public updatePost(payload: { post: PostState }) {
    const { post } = payload;
    this.draftState.forEach((item, idx) => {
      if (item.id === post.id) {
        this.draftState[idx] = post;
      }
    });
  }
}

export const postsReducer = createReducerFunction(PostsReducer, postsInitialState);
export const postsActions = createActionCreators(PostsReducer);
