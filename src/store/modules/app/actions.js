export function SetStatusRequest(status) {
  return {
    type: '@app/SET_STATUS_REQUEST',
    payload: { status },
  };
}

export function SetStatusSuccess(status) {
  return {
    type: '@app/SET_STATUS_SUCCESS',
    payload: { status },
  };
}

export function Reload(payload) {
  return {
    type: '@app/RELOAD',
    payload,
  };
}

export function SendSignatureRequest(data, id, foto, deliveryManId) {
  return {
    type: '@app/SEND_SIGNATURE_REQUEST',
    payload: { data, id, foto, deliveryManId },
  };
}

export function SendSignature(payload) {
  return {
    type: '@app/SEND_SIGNATURE',
    payload,
  };
}

export function SendDeliveryEnd(payload) {
  return {
    type: '@app/DELIVERY_END_REQUEST',
    payload,
  };
}

export function SendDeliveryEndSuccess(payload) {
  return {
    type: '@app/DELIVERY_END_SUCCESS',
    payload,
  };
}

export function SendErrorRequest({ order_id, description }) {
  return {
    type: '@app/SEND_ERROR_REQUEST',
    payload: { order_id, description },
  };
}

export function SendErrorSuccess(payload) {
  return {
    type: '@app/SEND_ERROR_SUCCESS',
    payload,
  };
}
