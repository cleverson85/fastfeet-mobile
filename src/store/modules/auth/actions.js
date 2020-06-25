export function loginRequest(id) {
  return {
    type: '@login/AUTH_REQUEST',
    payload: { id },
  };
}

export function loginSuccess(id) {
  return {
    type: '@login/AUTH_SUCCESS',
    payload: { id },
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
