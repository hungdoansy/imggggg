import { signin, signup } from "../auth";

const generatePostRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generatePostRequest = generatePostRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;

describe("auth apis", () => {
  describe("signin", () => {
    afterEach(() => {
      generatePostRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const info = {
        email: "someone@somedomain.com",
        password: "somerandomtext",
      };

      signin(info);

      expect(generatePostRequestMockFn.mock.calls[0]).toHaveLength(3);
      expect(generatePostRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/auth`,
        info,
        false,
      ]);
    });
  });

  describe("signup", () => {
    afterEach(() => {
      generatePostRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const info = {
        email: "someone@somedomain.com",
        password: "somerandomtext",
        name: "somebody",
      };

      signup(info);

      expect(generatePostRequestMockFn.mock.calls[0]).toHaveLength(3);
      expect(generatePostRequestMockFn.mock.calls[0]).toEqual([
        `${API_HOST}/users`,
        info,
        false,
      ]);
    });
  });
});
