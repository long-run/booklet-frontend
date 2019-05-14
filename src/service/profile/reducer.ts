import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer';

export interface ProfileState {
  userName: string;
  userProfileImage: string;
}

export const profileInitialState: ProfileState = {
  userName: '',
  userProfileImage: '',
};

export class ProfileReducer extends ImmerReducer<ProfileState> {}

export const profileReducer = createReducerFunction(ProfileReducer, profileInitialState);
export const profileActions = createActionCreators(ProfileReducer);
