import { generateRequest } from "../generateRequest";

const fetchMockFn = jest.fn().mockReturnValue(
  new Promise((resolve, reject) => {
    resolve({
      status: 200,
      json: () => ({
        data: [],
      }),
    });
  })
);
global.fetch = fetchMockFn;

describe("generateRequest", () => {
  afterEach(() => {
    fetchMockFn.mockClear();
  });
  it("should return a fetch", () => {
    generateRequest("POST", "somedomain.com", 123456, "hehe");
    expect(fetchMockFn).toHaveBeenCalled();
  });
});
