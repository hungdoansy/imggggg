import { fetchPhotos } from "../photo";
import { FETCH_PHOTOS } from "../../constants/action.types";

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
});
