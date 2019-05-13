import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer';

export interface AppState {
  version: string;
  environment: string;
}

export const appStateInitialState: AppState = {
  version: 'UNKNOWN',
  environment: 'development',
};

export class AppReducer extends ImmerReducer<AppState> {
  public initialize(payload: { version: string }) {
    this.draftState.version = payload.version;
  }
}

export const appReducer = createReducerFunction(AppReducer, appStateInitialState);
export const appActions = createActionCreators(AppReducer);
