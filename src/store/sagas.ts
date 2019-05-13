import { all } from 'redux-saga/effects';
import { appRootSaga } from '../service';

export default function* rootSaga() {
  yield all([
    // append more sagas
    appRootSaga(),
  ]);
}
