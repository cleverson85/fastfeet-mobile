import { all, takeLatest, call, put } from 'redux-saga/effects';

import { loginSuccess, logOutSucess } from './actions';

export function* authLogin({ payload }) {
  yield put(loginSuccess(payload));
}

export function* logOut() {
  yield put(logOutSucess());
}

export default all([
  takeLatest('@login/AUTH_REQUEST', authLogin),
  takeLatest('@login/LOG_OUT', logOut),
]);
