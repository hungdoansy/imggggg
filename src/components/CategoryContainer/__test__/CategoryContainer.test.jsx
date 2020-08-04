import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { CategoryContainer } from "../CategoryContainer";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

const hooks = require("../../../utils/hooks");
hooks.useHashParams = jest.fn().mockImplementation(() => ({
  getPage: () => 1,
}));

const initialState = {
  category: {
    totalRemoteCount: 10,
    allPageNumbers: [1],
    idsByPageNumber: {
      1: [1, 2],
    },
    byId: {
      1: {
        id: 1,
      },
      2: {
        id: 2,
      },
    },
  },
};

const ReactRedux = require("react-redux");
ReactRedux.useSelector = jest.fn().mockImplementation((fn) => fn(initialState));
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

describe("CategoryContainer", () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = render(
      <BrowserRouter>
        <CategoryContainer />
      </BrowserRouter>
    ));
  });

  it("should render the title Categories", () => {
    expect(getByText("Categories", { exact: true })).toBeInTheDocument();
  });

  it("should render total number of categories", () => {
    const matcher = (content, node) => {
      const hasText = (node) =>
        node.textContent === "There are a total of 10 categories";

      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    };
    expect(getByText(matcher)).toBeInTheDocument();
  });
});
