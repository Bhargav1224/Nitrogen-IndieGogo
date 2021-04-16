import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./authActionTypes";

const initState = {
  isAuth: false,
  userName: "",
};

export const authReducer = (state = initState, action) => {
  switch (action?.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: action.payload.user,
        userName: action.payload.userName,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: action.payload.user,
        userName: action.payload.userName,
      };
    }
    default:
      return state;
  }
};
