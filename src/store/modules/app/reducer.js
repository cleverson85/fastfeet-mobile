import produce from 'immer';

const INITIAL_STATE = {};

export default function app(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@app/APP_CONFIRM_REQUEST': {
        draft.payload = action.payload;
        break;
      }

      case '@app/RELOAD': {
        draft.payload = action.payload;
        break;
      }

      default:
    }
  });
}
