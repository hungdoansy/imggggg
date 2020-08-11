import produce from "immer";

import {
  FETCH_USER_INFO_SUCCESS,
  REMOVE_USER_INFO,
  SHOW_MODAL,
  HIDE_MODAL,
  Modals,
} from "constants/action.types";

import * as selectors from "./selector";

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

    case REMOVE_USER_INFO: {
      return produce(state, (draftState) => {
        draftState.user = {};
      });
    }

    case SHOW_MODAL: {
      return produce(state, (draftState) => {
        draftState.modal = action.data.modal;
      });
    }

    case HIDE_MODAL: {
      if (state.modal === action.data.modal) {
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

export { app, selectors };
