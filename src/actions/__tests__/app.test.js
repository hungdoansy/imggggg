import {
  REMOVE_USER_INFO,
  FETCH_USER_INFO,
  SHOW_MODAL,
  HIDE_MODAL,
} from "constants/action.types";

import { removeUserInfo, fetchUserInfo, showModal, hideModal } from "../app";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("App action creators", () => {
  describe("fetchUserInfo", () => {
    beforeEach(() => {
      fetch.mockClear();
    });

    it("should return action of type FETCH_CATEGORIES", () => {
      const action = fetchUserInfo();
      expect(action.type).toBe(FETCH_USER_INFO);
    });

    it("should have promise property", () => {
      const action = fetchUserInfo();

      expect(typeof action.promise).not.toBe("undefined");
      expect(typeof action.promise.then).toBe("function");
    });
  });

  describe("removeUserInfo", () => {
    it("should return action of type FETCH_USER_INFO", () => {
      const action = fetchUserInfo();
      expect(action.type).toBe(FETCH_USER_INFO);
    });
  });

  describe("showModal", () => {
    it("should return action of type SHOW_MODAL", () => {
      const action = showModal("somemodal");
      expect(action.type).toBe(SHOW_MODAL);
    });

    it("should return the modal as a property of data", () => {
      const action = showModal("somemodal");
      expect(action.data.modal).toBe("somemodal");
    });
  });

  describe("hideModal", () => {
    it("should return action of type HIDE_MODAL", () => {
      const action = hideModal("somemodal");
      expect(action.type).toBe(HIDE_MODAL);
    });

    it("should return the modal as a property of data", () => {
      const action = hideModal("somemodal");
      expect(action.data.modal).toBe("somemodal");
    });
  });
});
