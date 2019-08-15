// rxaction→	redux action template
import { UserActionTypes } from "./user.types";
// rxconst→	export const $1 = '$1'
// rxreducer→	redux reducer template
// rxselect→	redux selector template

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        // currentUser: {...payload}
        currentUser: payload
      };

    default:
      return state;
  }
};

export default userReducer;
