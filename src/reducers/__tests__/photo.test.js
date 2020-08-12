import {
  photo,
  nextStateOnFetchPhotosSuccess,
  nextStateOnFetchPhotoDetailSuccess,
  selectors,
} from "../photo";

const initialState = {
  allCategoryIds: [],
  allPageNumbersByCategoryIds: {},
  allPhotoIdsByCatgoryIdsAndPageNumbers: {},
  byPhotoId: {},
};

describe("photo reducer", () => {
  describe("nextStateOnFetchPhotosSuccess", () => {
    const data = {
      items: [
        {
          id: 1,
          description: "photo1",
          image_url: "link1",
          author: {
            id: 2,
            name: "two",
          },
        },
        {
          id: 2,
          description: "photo2",
          image_url: "link2",
          author: {
            id: 2,
            name: "two",
          },
        },
      ],
    };

    const extra = {
      categoryId: 1,
      page: 1,
    };

    it("should return the correct next state", () => {
      const afterState = nextStateOnFetchPhotosSuccess(
        initialState,
        data,
        extra
      );
      expect(afterState).toEqual({
        allCategoryIds: [1],
        allPageNumbersByCategoryIds: { 1: [1] },
        allPhotoIdsByCatgoryIdsAndPageNumbers: { 1: { 1: [1, 2] } },
        byPhotoId: {
          1: {
            id: 1,
            description: "photo1",
            src: "link1",
            author: {
              id: 2,
              name: "two",
            },
          },
          2: {
            id: 2,
            description: "photo2",
            src: "link2",
            author: {
              id: 2,
              name: "two",
            },
          },
        },
      });
    });
  });

  describe("nextStateOnFetchPhotoDetailSuccess", () => {
    const data = {
      id: 1,
      description: "photo1",
      image_url: "link1",
      author: {
        id: 2,
        name: "two",
      },
      category_id: 100,
    };

    const afterState = nextStateOnFetchPhotoDetailSuccess(initialState, data);
    expect(afterState).toEqual({
      allCategoryIds: [],
      allPageNumbersByCategoryIds: {},
      allPhotoIdsByCatgoryIdsAndPageNumbers: {},
      byPhotoId: {
        "1": {
          id: 1,
          author: {
            id: 2,
            name: "two",
          },
          categoryId: 100,
          description: "photo1",
          src: "link1",
        },
      },
    });
  });
});
