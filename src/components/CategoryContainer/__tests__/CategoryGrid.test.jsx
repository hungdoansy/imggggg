import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import CategoryGrid from "../CategoryGrid";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

const ReactRedux = require("react-redux");
ReactRedux.useSelector = jest.fn().mockReturnValue([
  {
    id: "1",
    imageUrl: "http://somewhere1.com",
    name: "Something1",
    descriptiom: "Some random text1",
  },
  {
    id: "2",
    imageUrl: "http://somewhere2.com",
    name: "Something2",
    descriptiom: "Some random text2",
  },
]);
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => ({}));

describe("CategoryGrid", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CategoryGrid />
      </BrowserRouter>
    );
  });

  it("should render a list of category cells", () => {
    expect(document.querySelectorAll("img")).toHaveLength(2);
  });

  it("should render a paginator", () => {
    expect(document.querySelectorAll(".paginator")).toHaveLength(1);
  });
});
