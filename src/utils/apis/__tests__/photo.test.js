import {
  getPhotos,
  submitPhoto,
  editPhoto,
  removePhoto,
  getPhotoDetail,
} from "../photo";
import { PHOTOS_PER_PAGE } from "../../../constants/settings";

const generateRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateRequest = generateRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;
const TOKENS = "123456";

describe("photo apis", () => {
  describe("getPhotos", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const categoryId = 10;
      const page = 5;

      const offset = (page - 1) * PHOTOS_PER_PAGE;
      const limit = PHOTOS_PER_PAGE;

      getPhotos(categoryId, page);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "GET",
        `${API_HOST}/categories/${categoryId}/items?offset=${offset}&limit=${limit}`,
      ]);
    });
  });

  describe("submitPhoto", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const categoryId = 10;
      const info = { description: "hehe", imageUrl: "somedomain.com" };

      const stringifiedBody = JSON.stringify({
        description: info.description,
        image_url: info.imageUrl,
      });

      submitPhoto(categoryId, info, TOKENS);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(4);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "POST",
        `${API_HOST}/categories/${categoryId}/items`,
        TOKENS,
        stringifiedBody,
      ]);
    });
  });

  describe("editPhoto", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a PUT request with stringified body", () => {
      const categoryId = 10;
      const info = { id: 100, description: "hehe", imageUrl: "somedomain.com" };

      const stringifiedBody = JSON.stringify({
        image_url: info.imageUrl,
        description: info.description,
      });

      editPhoto(categoryId, info, TOKENS);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(4);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "PUT",
        `${API_HOST}/categories/${categoryId}/items/${info.id}`,
        TOKENS,
        stringifiedBody,
      ]);
    });
  });

  describe("removePhoto", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a DELETE request", () => {
      const categoryId = 10;
      const photoId = 5;

      removePhoto(categoryId, photoId, TOKENS);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(3);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "DELETE",
        `${API_HOST}/categories/${categoryId}/items/${photoId}`,
        TOKENS,
      ]);
    });
  });

  describe("getPhotoDetail", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const categoryId = 10;
      const photoId = 5;

      getPhotoDetail(categoryId, photoId, TOKENS);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "GET",
        `${API_HOST}/categories/${categoryId}/items/${photoId}`,
      ]);
    });
  });
});
