import { fetchPhotos, fetchPhotoDetail } from "../photo";
import { FETCH_PHOTOS, FETCH_PHOTO_DETAIL } from "../../constants/action.types";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("Photo action creators", () => {
  describe("fetchPhotos", () => {
    beforeEach(() => {
      fetch.mockClear();
    });

    it("should use the fallback value page = 1", () => {
      const action = fetchPhotos();

      expect(action.extra.page).toBe(1);
    });

    it("should return action of type FETCH_CATEGORIES", () => {
      const action = fetchPhotos();
      expect(action.type).toBe(FETCH_PHOTOS);
    });

    it("should have promise property", () => {
      const action = fetchPhotos();

      expect(typeof action.promise).not.toBe("undefined");
      expect(typeof action.promise.then).toBe("function");
    });
  });

  describe("fetchPhotoDetail", () => {
    const categoryId = 5;
    const photoId = 10;
    beforeEach(() => {
      fetch.mockClear();
    });

    it("should return action of type FETCH_PHOTO_DETAIL", () => {
      const action = fetchPhotoDetail(categoryId, photoId);
      expect(action.type).toBe(FETCH_PHOTO_DETAIL);
    });

    it("should have promise property", () => {
      const action = fetchPhotoDetail(categoryId, photoId);

      expect(action.promise).toBeDefined();
      expect(typeof action.promise.then).toBe("function");
    });

    it("should have extra property", () => {
      const action = fetchPhotoDetail(categoryId, photoId);

      expect(action.extra).toEqual({ categoryId, photoId });
    });
  });
});
