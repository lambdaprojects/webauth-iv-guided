import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  user: {},
  error: null,
  loggingIn: false,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false,
        isLoggedIn: true,
        user: action.payload.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        loggingIn: false
      };
    default: {
      return state;
    }
  }
};

export default reducer;
