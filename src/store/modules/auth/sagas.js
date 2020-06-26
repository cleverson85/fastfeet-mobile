import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { loginSuccess, logOutSucess } from './actions';

import api from '~/services/api';

export function* authLogin({ payload }) {
  // const { id } = payload;
  yield put(loginSuccess(payload));
}

export function* logOut() {
  yield put(logOutSucess());
}

export default all([
  takeLatest('@login/AUTH_REQUEST', authLogin),
  takeLatest('@login/LOG_OUT', logOut),
]);
