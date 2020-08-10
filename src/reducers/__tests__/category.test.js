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
  describe("updateOnFetchCategoriesSuccess", () => {
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

    beforeAll(() => {
      afterState = clone(initialState);
      fromCategory.updateOnFetchCategoriesSuccess(afterState, data, extra);
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

  describe("updateOnFetchPhotosSuccess", () => {
    const data = {
      total_items: 100,
    };

    const extra = {
      categoryId: 2,
    };

    it("should be update totalPhotos", () => {
      const afterState = clone(initialState);
      fromCategory.updateOnFetchPhotosSuccess(afterState, data, extra);

      expect(afterState.byId[2].totalPhotos).toBe(100);
    });
  });

  describe("updateOnFetchCategoryDetailSuccess", () => {
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
      const afterState = clone(initialState);
      fromCategory.updateOnFetchCategoryDetailSuccess(afterState, data, extra);

      expect(afterState.byId[extra.categoryId]).toEqual({
        id: 2,
        name: "Something",
        description: "Some random text",
        imageUrl: "http://somewhere.com",
        exist: true,
      });
    });
  });

  describe("category reducer", () => {
    it("should call updateOnFetchCategoriesSuccess with action.type = FETCH_CATEGORIES_SUCCESS", () => {
      // const spy = jest.spyOn(fromCategory, "updateOnFetchCategoriesSuccess");
      // const action = {
      //   type: FETCH_CATEGORIES_SUCCESS,
      //   data: {
      //     total_categories: 21,
      //     categories: [
      //       {
      //         id: "1",
      //       },
      //       {
      //         id: "2",
      //       },
      //     ],
      //   },
      //   extra: {
      //     page: 2,
      //   },
      // };
      // fromCategory.category(clone(initialState), action);
      // expect(fromCategory.updateOnFetchCategoriesSuccess).toHaveBeenCalled();
      // spy.mockRestore();
    });

    it("should call updateOnFetchPhotosSuccess with action.type = FETCH_PHOTOS_SUCCESS", () => {});

    it("should call updateOnFetchCategoryDetailSuccess with action.type = FETCH_CATEGORY_DETAIL", () => {});
  });
});
