import { getUserInfo } from "../user";

const generateRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateRequest = generateRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;
const TOKENS = "123456";

describe("user apis", () => {
  describe("getUserInfo", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a GET request", () => {
      getUserInfo(TOKENS);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(3);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "GET",
        `${API_HOST}/users/me`,
        TOKENS,
      ]);
    });
  });
});
