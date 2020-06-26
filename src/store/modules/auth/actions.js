export function loginRequest(deliveryMan) {
  return {
    type: '@login/AUTH_REQUEST',
    payload: deliveryMan,
  };
}

export function loginSuccess(payload) {
  return {
    type: '@login/AUTH_SUCCESS',
    payload,
  };
}

export function logOutRequest() {
  return {
    type: '@login/LOG_OUT',
  };
}

export function logOutSucess() {
  return {
    type: '@login/LOG_OUT_SUCCESS',
  };
}
