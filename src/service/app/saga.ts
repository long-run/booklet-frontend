import { takeEvery, all } from 'redux-saga/effects';
import { appActions } from '../';

function* watchTestAction(action: ReturnType<typeof appActions.initialize>) {
  yield console.log(action);
}

export function* appRootSaga() {
  yield all([takeEvery(appActions.initialize.type, watchTestAction)]);
}

// immer-reducer Redux-saga 처리는 다음 Readme.md 참고
// https://github.com/epeli/immer-reducer
