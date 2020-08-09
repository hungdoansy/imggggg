import {
  createCategory,
  getCategoriesByPageNumber,
  getCategoriesByOffsetAndLimit,
  getCategoryDetail,
} from "../category";
import { CATEGORIES_PER_PAGE } from "../../../constants/settings";

const generateRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateRequest = generateRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;
const TOKENS = "123456";

describe("category apis", () => {
  describe("createCategory", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const info = {
        name: "somebody",
        imageUrl: "somedomain.com",
        description: "hehe",
      };

      const stringifiedBody = JSON.stringify({
        name: info.name,
        image_url: info.imageUrl,
        description: info.description,
      });
      createCategory(info, TOKENS);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(4);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "POST",
        `${API_HOST}/categories`,
        TOKENS,
        stringifiedBody,
      ]);
    });
  });

  describe("getCategoriesByPageNumber", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const page = 10;

      const offset = (page - 1) * CATEGORIES_PER_PAGE;
      const limit = CATEGORIES_PER_PAGE;

      getCategoriesByPageNumber(page);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "GET",
        `${API_HOST}/categories?offset=${offset}&limit=${limit}`,
      ]);
    });
  });

  describe("getCategoriesByOffsetAndLimit", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const page = 10;

      const offset = (page - 1) * CATEGORIES_PER_PAGE;
      const limit = CATEGORIES_PER_PAGE;

      getCategoriesByOffsetAndLimit(offset, limit);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "GET",
        `${API_HOST}/categories?offset=${offset}&limit=${limit}`,
      ]);
    });
  });

  describe("getCategoryDetail", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      const categoryId = 10;

      getCategoryDetail(categoryId);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "GET",
        `${API_HOST}/categories/${categoryId}`,
      ]);
    });
  });
});
