import produce from 'immer';

const INITIAL_STATE = {
  payload: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/AUTH_SUCCESS': {
      return produce(state, (draft) => {
        draft.payload = action.payload;
        draft.signed = true;
      });
    }

    case '@login/LOG_OUT_SUCCESS': {
      return produce(state, (draft) => {
        draft.payload = null;
        draft.signed = false;
      });
    }

    default:
      return state;
  }
}
