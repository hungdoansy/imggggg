import produce from "immer";

import {
  FETCH_USER_INFO_SUCCESS,
  SHOW_SIGNIN_MODAL,
  HIDE_SIGNIN_MODAL,
  Modals,
} from "constants/action.types";

const initialState = {
  user: {
    id: -1,
    name: "",
  },
  modal: Modals.NONE,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_SUCCESS: {
      return produce(state, (draftState) => {
        draftState.user.id = action.data.id;
        draftState.user.name = action.data.name;
      });
    }

    case SHOW_SIGNIN_MODAL: {
      return produce(state, (draftState) => {
        draftState.modal = Modals.SIGNIN;
      });
    }

    case HIDE_SIGNIN_MODAL: {
      if (state.modal === Modals.SIGNIN) {
        return produce(state, (draftState) => {
          draftState.modal = Modals.NONE;
        });
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
};

const getCurrentUserInfo = (wholestate) => wholestate.app.user;
const getOpenModal = (wholestate) => wholestate.app.modal;

const selectors = {
  getCurrentUserInfo,
  getOpenModal,
};

export { app, selectors };
