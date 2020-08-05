import { fetchCategories, fetchCategoryDetail } from "../category";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORY_DETAIL_REQUEST,
} from "../../constants/action.types";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("Category action creators", () => {
  describe("fetchCategories", () => {
    beforeEach(() => {
      fetch.mockClear();
    });

    it("should use the fallback value page = 1", () => {
      const action = fetchCategories();

      expect(action.extra.page).toBe(1);
    });

    it("should return action of type FETCH_CATEGORIES_REQUEST", () => {
      const action = fetchCategories();
      expect(action.type).toBe(FETCH_CATEGORIES_REQUEST);
    });

    it("should have promise property", () => {
      const action = fetchCategories();

      expect(typeof action.promise).not.toBe("undefined");
      expect(typeof action.promise.then).toBe("function");
    });
  });

  describe("fetchCategoryDetail", () => {
    beforeEach(() => {
      fetch.mockClear();
    });

    it("should be called with a defined categoryId", () => {
      const action = fetchCategoryDetail(2);

      expect(action.extra.categoryId).toBe(2);
    });

    it("should return action of type FETCH_CATEGORY_DETAIL_REQUEST", () => {
      const action = fetchCategoryDetail();
      expect(action.type).toBe(FETCH_CATEGORY_DETAIL_REQUEST);
    });

    it("should have promise property", () => {
      const action = fetchCategoryDetail(2);

      expect(typeof action.promise).not.toBe("undefined");
      expect(typeof action.promise.then).toBe("function");
    });
  });
});