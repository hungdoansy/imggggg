import { REMOVE_USER_INFO, FETCH_USER_INFO } from "constants/action.types";
import { getUserInfo } from "utils/apis/user";

export const removeUserInfo = () => {
  return {
    type: REMOVE_USER_INFO,
  };
};

export const fetchUserInfo = () => {
  return {
    type: FETCH_USER_INFO,
    promise: getUserInfo(),
  };
};
