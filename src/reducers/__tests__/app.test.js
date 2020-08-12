import {
  FETCH_USER_INFO_SUCCESS,
  REMOVE_USER_INFO,
  SHOW_MODAL,
  HIDE_MODAL,
  Modals,
} from "constants/action.types";

import { app, selectors } from "../app";

describe("app", () => {
  const initialState = {
    user: {
      id: -1,
      name: "",
    },
    modal: Modals.NONE,
  };

  it("should return the updated state on FETCH_USER_INFO_SUCCESS correctly", () => {
    const action = {
      type: FETCH_USER_INFO_SUCCESS,
      data: {
        id: 2,
        name: "two",
      },
    };
    const nextState = app(initialState, action);
    expect(nextState.user).toEqual({
      id: 2,
      name: "two",
    });
  });

  it("should return the updated state on REMOVE_USER_INFO correctly", () => {
    const action = {
      type: REMOVE_USER_INFO,
    };
    const nextState = app(initialState, action);
    expect(nextState.user).toEqual({});
  });

  it("should return the updated state on SHOW_MODAL correctly", () => {
    const action = {
      type: SHOW_MODAL,
      data: {
        modal: "someModal",
      },
    };
    const nextState = app(initialState, action);
    expect(nextState.modal).toBe("someModal");
  });

  it("should return the updated state on HIDE_MODAL correctly", () => {
    const action = {
      type: HIDE_MODAL,
      data: {
        modal: "someModal",
      },
    };

    const nextState = app(initialState, action);
    expect(nextState.modal).toEqual(Modals.NONE);
  });

  it("should return the current state by default", () => {
    const action = {
      type: "what_a_action",
      data: {
        id: 2,
        name: "two",
      },
    };

    const nextState = app(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
