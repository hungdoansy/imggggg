import {
  REMOVE_USER_INFO,
  FETCH_USER_INFO,
  SHOW_MODAL,
  HIDE_MODAL,
} from "constants/action.types";
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

export const showModal = (modal) => {
  return {
    type: SHOW_MODAL,
    data: {
      modal,
    },
  };
};

export const hideModal = (modal) => {
  return {
    type: HIDE_MODAL,
    data: {
      modal,
    },
  };
};
