import { CATEGORIES_PER_PAGE } from "constants/settings";

import {
  createCategory,
  getCategories,
  getCategoriesByPageNumber,
  getCategoriesByOffsetAndLimit,
  getCategoryDetail,
} from "../category";

const generateGetRequestMockFn = jest.fn();
const generatePostRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateGetRequest = generateGetRequestMockFn;
FromGenerateRequest.generatePostRequest = generatePostRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;

describe("category apis", () => {
  describe("createCategory", () => {
    afterEach(() => {
      generatePostRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const info = {
        name: "somebody",
        imageUrl: "somedomain.com",
        description: "hehe",
      };

      createCategory(info);

      expect(generatePostRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generatePostRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories`,
        {
          name: info.name,
          image_url: info.imageUrl,
          description: info.description,
        },
      ]);
    });
  });

  describe("getCategories", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      getCategories();

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories`,
      ]);
    });
  });

  describe("getCategoriesByOffsetAndLimit", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const page = 10;

      const offset = (page - 1) * CATEGORIES_PER_PAGE;
      const limit = CATEGORIES_PER_PAGE;

      getCategoriesByOffsetAndLimit(offset, limit);

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories?offset=${offset}&limit=${limit}`
      ]);
    });
  });

  describe("getCategoriesByPageNumber", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const page = 10;

      const offset = (page - 1) * CATEGORIES_PER_PAGE;
      const limit = CATEGORIES_PER_PAGE;

      getCategoriesByPageNumber(page);

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      ]);
    });
  });

  describe("getCategoryDetail", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const categoryId = 10;

      getCategoryDetail(categoryId);

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(1);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/categories/${categoryId}`,
      ]);
    });
  });
});
