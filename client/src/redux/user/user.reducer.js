// rxaction→	redux action template
import UserActionTypes from "./user.types";
// rxconst→	export const $1 = '$1'
// rxreducer→	redux reducer template
// rxselect→	redux selector template

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        // currentUser: {...payload}
        currentUser: payload
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: payload
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
