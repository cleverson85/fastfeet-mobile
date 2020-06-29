import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SetStatusSuccess } from './actions';

export function SetStatusRequest({ payload }) {
  put(SetStatusSuccess(payload));
}

export default all([takeLatest('@app/SET_STATUS_REQUEST', SetStatusRequest)]);
