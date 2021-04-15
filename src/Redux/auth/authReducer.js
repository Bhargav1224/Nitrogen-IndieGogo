import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

const initState = {
  isAuth: false,
};

export const authReducer = (state = initState, action) => {
  switch (action?.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};
