import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
