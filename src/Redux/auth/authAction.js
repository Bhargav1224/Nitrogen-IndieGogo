import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./authActionTypes";

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const logoutSuccess = (payload) => {
  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
};
