import { CATEGORIES_PER_PAGE } from "constants/settings";

const fromCategory = require("../category");

const initialState = {
  allPageNumbers: [],
  idsByPageNumber: {},
  byId: {},
  totalRemoteCount: 0,
  totalNumberOfRemotePages: 0,
};

const clone = (state) => JSON.parse(JSON.stringify(state));

describe("Category reducer", () => {
  describe("newStateOnFetchCategoriesSuccess", () => {
    const data = {
      total_categories: 21,
      categories: [
        {
          id: "1",
        },
        {
          id: "2",
        },
      ],
    };

    const extra = {
      page: 2,
    };

    let afterState;

    beforeEach(() => {
      afterState = fromCategory.newStateOnFetchCategoriesSuccess(
        initialState,
        data,
        extra
      );
    });

    it("should update totalNumberOfRemotePages", () => {
      expect(afterState.totalNumberOfRemotePages).toBe(
        Math.ceil(data["total_categories"] / CATEGORIES_PER_PAGE)
      );
    });

    it("should update totalRemoteCount", () => {
      expect(afterState.totalRemoteCount).toBe(data["total_categories"]);
    });

    it("should update allPageNumbers", () => {
      expect(afterState.allPageNumbers).toContain(2);
    });

    it("should update idsByPageNumber ", () => {
      expect(afterState.idsByPageNumber[extra.page]).toContain("1");
      expect(afterState.idsByPageNumber[extra.page]).toContain("2");
    });

    it("should update byId", () => {
      expect(afterState.byId[1]).toEqual({
        id: "1",
        exist: true,
      });
      expect(afterState.byId[2]).toEqual({
        id: "2",
        exist: true,
      });
    });
  });

  describe("newStateOnFetchPhotosSuccess", () => {
    const data = {
      total_items: 100,
    };

    const extra = {
      categoryId: 2,
    };

    it("should be update totalPhotos", () => {
      const afterState = fromCategory.newStateOnFetchPhotosSuccess(
        initialState,
        data,
        extra
      );

      expect(afterState.byId[2].totalPhotos).toBe(100);
    });
  });

  describe("newStateOnFetchCategoryDetailSuccess", () => {
    const data = {
      id: 2,
      name: "Something",
      description: "Some random text",
      image_url: "http://somewhere.com",
    };

    const extra = {
      categoryId: 2,
    };

    it("should update byId", () => {
      const afterState = fromCategory.newStateOnFetchCategoryDetailSuccess(
        initialState,
        data,
        extra
      );

      expect(afterState.byId[extra.categoryId]).toEqual({
        id: 2,
        name: "Something",
        description: "Some random text",
        imageUrl: "http://somewhere.com",
        exist: true,
      });
    });
  });

  describe("newStateOnFetchCategoryDetailFailure", () => {
    const data = {};

    const extra = {
      categoryId: 2,
    };

    it("should update byId", () => {
      const afterState = fromCategory.newStateOnFetchCategoryDetailFailure(
        initialState,
        data,
        extra
      );

      expect(afterState.byId[extra.categoryId]).toEqual({
        exist: false,
      });
    });
  });

  describe("newStateOnFetchPhotosFailure", () => {
    const data = {};

    const extra = {
      categoryId: 2,
    };

    it("should update byId", () => {
      const afterState = fromCategory.newStateOnFetchPhotosFailure(
        initialState,
        data,
        extra
      );

      expect(afterState.byId[extra.categoryId]).toEqual({
        exist: false,
      });
    });
  });

  describe("newStateOnFetchCategoriesForTabBar", () => {
    const data = { categories: [1, 2, 3, 4, 5], total_categories: 100 };

    const extra = {
      categoryId: 2,
    };

    it("should update byId", () => {
      const afterState = fromCategory.newStateOnFetchCategoriesForTabBar(
        initialState,
        data,
        extra
      );

      expect(afterState.forTabBar).toEqual([1, 2, 3, 4, 5]);
      expect(afterState.totalNumberOfRemotePages).toBe(
        Math.ceil(100 / CATEGORIES_PER_PAGE)
      );
    });
  });
});
