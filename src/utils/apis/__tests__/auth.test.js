import { signin, signup } from "../auth";

const generateRequestMockFn = jest.fn();

const FromGenerateRequest = require("../generateRequest");
FromGenerateRequest.generateRequest = generateRequestMockFn;

const API_HOST = process.env.REACT_APP_API_HOST;

describe("auth apis", () => {
  describe("signin", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const info = {
        email: "someone@somedomain.com",
        password: "somerandomtext",
      };

      const stringifiedBody = JSON.stringify(info);
      signin(info);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(4);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "POST",
        `${API_HOST}/auth`,
        undefined,
        stringifiedBody,
      ]);
    });
  });

  describe("signup", () => {
    afterEach(() => {
      generateRequestMockFn.mockClear();
    });

    it("should send a POST request with stringified body", () => {
      const info = {
        email: "someone@somedomain.com",
        password: "somerandomtext",
        name: "somebody",
      };

      const stringifiedBody = JSON.stringify(info);
      signup(info);

      expect(generateRequestMockFn.mock.calls[0]).toHaveLength(4);
      expect(generateRequestMockFn.mock.calls[0]).toEqual([
        "POST",
        `${API_HOST}/users`,
        undefined,
        stringifiedBody,
      ]);
    });
  });
});
