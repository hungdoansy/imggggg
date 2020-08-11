import { getUserInfo } from "../user";

const generateGetRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateGetRequest = generateGetRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;

describe("user apis", () => {
  describe("getUserInfo", () => {
    afterEach(() => {
      generateGetRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      getUserInfo();

      expect(generateGetRequestMockFn.mock.calls[0]).toHaveLength(2);
      expect(generateGetRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/users/me`,
        true,
      ]);
    });
  });
});
