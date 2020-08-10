import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

import CategoryContainer from "..";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

let returnedPage = 1;
const hooks = require("utils/hooks");
hooks.useHashParams = jest.fn().mockImplementation(() => ({
  getPage: () => returnedPage,
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

const FromCategoryGrid = require("../CategoryGrid");
FromCategoryGrid.default = jest.fn().mockImplementation(() => {
  return <p>CategoryGrid</p>;
});

function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

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

  it("should redirect when page is not a number", () => {
    returnedPage = "hehe";

    const { history } = renderWithRouter(<CategoryContainer />);

    expect(history.location.pathname).toEqual("/categories");
  });
});
