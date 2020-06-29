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

export function clearRequest() {
  return {
    type: '@app/CLEAR_STATE',
  };
}

export function visibleRequest(visible) {
  return {
    type: '@button/IS_VISIBLE',
    payload: { visible },
  };
}

export function reload(payload) {
  return {
    type: '@app/RELOAD',
    payload,
  };
}

export function confirmRequest(open, id, messageConfirm, path) {
  return {
    type: '@app/APP_CONFIRM_REQUEST',
    payload: { open, id, messageConfirm, path },
  };
}
