import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  SetStatusSuccess,
  SendSignature,
  SendDeliveryEndSuccess,
  SendErrorSuccess,
} from './actions';
import api from '../../../services/api';

export function SetStatusRequest({ payload }) {
  put(SetStatusSuccess(payload));
}

export function* SendSignatureRequest({ payload }) {
  yield put(SendSignature(payload));
}

export function* SendDeliveryEnd({ payload }) {
  try {
    let response = yield call(api.post, '/signature', payload);
    const { data } = response;

    if (data?.status && data?.status !== 200) {
      throw data.message;
    }

    response = yield call(api.put, '/deliveryEnd', {
      id: payload.id,
      signature_id: data.id,
    });

    if (data?.status && data?.status !== 200) {
      throw data.message;
    }

    response = yield call(
      api.get,
      `/deliveryman/${payload?.deliveryManId}/deliveries?status=P`
    );

    yield put(
      SendDeliveryEndSuccess({
        message: 'Confirmação de entrega enviada com sucesso.',
      })
    );
  } catch (e) {
    yield put(
      SendDeliveryEndSuccess({
        message: 'Não foi possível enviar a confirmação de entrega.',
      })
    );
  }
}

export function* SendError({ payload }) {
  const response = yield call(api.post, '/deliveryissues', payload);
  const { data } = response;

  if (data?.status && data?.status !== 200) {
    yield put(
      SendErrorSuccess({
        message: 'Não foi possível enviar a informação.',
      })
    );
  }

  yield put(
    SendErrorSuccess({
      message: 'Informação de problema enviada com sucesso.',
    })
  );
}

export default all([
  takeLatest('@app/SET_STATUS_REQUEST', SetStatusRequest),
  takeLatest('@app/SEND_SIGNATURE_REQUEST', SendSignatureRequest),
  takeLatest('@app/DELIVERY_END_REQUEST', SendDeliveryEnd),
  takeLatest('@app/SEND_ERROR_REQUEST', SendError),
]);
