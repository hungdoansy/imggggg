import { PHOTOS_PER_PAGE } from "constants/settings";

import {
  getPhotos,
  submitPhoto,
  editPhoto,
  removePhoto,
  getPhotoDetail,
} from "../photo";

const generateGetRequestMockFn = jest.fn();
const generatePostRequestMockFn = jest.fn();
const generatePutRequestMockFn = jest.fn();
const generateDeleteRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateGetRequest = generateGetRequestMockFn;
FromGenerateRequest.generatePostRequest = generatePostRequestMockFn;
FromGenerateRequest.generatePutRequest = generatePutRequestMockFn;
FromGenerateRequest.generateDeleteRequest = generateDeleteRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;

describe("photo apis", () => {
  describe("getPhotos", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const categoryId = 10;
      const page = 5;

      const offset = (page - 1) * PHOTOS_PER_PAGE;
      const limit = PHOTOS_PER_PAGE;

      getPhotos(categoryId, page);

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories/${categoryId}/items?offset=${offset}&limit=${limit}`,
      ]);
    });
  });

  describe("submitPhoto", () => {
    afterEach(() => {
      generatePostRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const categoryId = 10;
      const info = { description: "hehe", imageUrl: "somedomain.com" };

      submitPhoto(categoryId, info);

      expect(generatePostRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generatePostRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories/${categoryId}/items`,
        {
          description: info.description,
          image_url: info.imageUrl,
        },
      ]);
    });
  });

  describe("editPhoto", () => {
    afterEach(() => {
      generatePutRequestMockFn.mockClear();
    });

    it("should send a PUT request with stringified body", () => {
      const categoryId = 10;
      const info = { id: 100, description: "hehe", imageUrl: "somedomain.com" };

      editPhoto(categoryId, info);

      expect(generatePutRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generatePutRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories/${categoryId}/items/${info.id}`,
        {
          image_url: info.imageUrl,
          description: info.description,
        },
      ]);
    });
  });

  describe("removePhoto", () => {
    afterEach(() => {
      generateDeleteRequestMockFn.mockClear();
    });

    it("should send a DELETE request", () => {
      const categoryId = 10;
      const photoId = 5;

      removePhoto(categoryId, photoId);

      expect(generateDeleteRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateDeleteRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories/${categoryId}/items/${photoId}`,
      ]);
    });
  });

  describe("getPhotoDetail", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const categoryId = 10;
      const photoId = 5;

      getPhotoDetail(categoryId, photoId);

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories/${categoryId}/items/${photoId}`,
      ]);
    });
  });
});
