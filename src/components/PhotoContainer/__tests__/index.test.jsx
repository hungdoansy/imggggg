import React from "react";
import { render } from "@testing-library/react";

import PhotoContainer from "..";

const returnedCategoryInfo = {
  exist: true,
  totalPhotos: 100,
  name: "something",
  description: "someDescription",
};

const ReactRedux = require("react-redux");
ReactRedux.useSelector = jest.fn().mockReturnValue(returnedCategoryInfo);
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

const FromCategoryInfo = require("../CategoryInfo");
FromCategoryInfo.default = jest.fn().mockImplementation(() => {
  return <p>CategoryInfo</p>;
});

const FromHooks = require("utils/hooks");
FromHooks.useHashParams = jest.fn().mockReturnValue({
  getPage: () => 1,
});
FromHooks.useAuthContext = jest.fn().mockReturnValue({
  hasSignedIn: true,
});

const FromEditOrSubmitPhotoModal = require("../EditOrSubmitPhotoModal");
FromEditOrSubmitPhotoModal.useSubmitModal = jest
  .fn()
  .mockReturnValue([false, jest.fn(), jest.fn()]);

const FromPhotoGrid = require("../PhotoGrid");
FromPhotoGrid.default = jest.fn().mockImplementation(() => {
  return <p>PhotoGrid</p>;
});

const FromCategoryActions = require("actions/category");
FromCategoryActions.fetchCategoryDetail = jest.fn();

const FromPhotoActions = require("actions/photo");
FromPhotoActions.fetchPhotos = jest.fn();

const FromPagination = require("components/common/Pagination");
FromPagination.default = jest.fn().mockImplementation(() => {
  return <p>Pagination</p>;
});

const props = {
  match: {
    params: {
      categoryId: "1",
    },
  },
};

describe("PhotoContainer", () => {
  it("should render CategoryInfo", () => {
    const rendered = render(<PhotoContainer {...props} />);
    expect(rendered.queryByText(/CategoryInfo/)).toBeInTheDocument();
  });

  it("should render a submit button", () => {
    const rendered = render(<PhotoContainer {...props} />);
    expect(rendered.queryByText(/Submit a photo to/)).toBeInTheDocument();
  });

  it("should render a submit button", () => {
    const rendered = render(<PhotoContainer {...props} />);
    expect(rendered.queryByText(/Submit a photo to/)).toBeInTheDocument();
  });

  it("should render photo grid", () => {
    const rendered = render(<PhotoContainer {...props} />);
    expect(rendered.queryByText(/PhotoGrid/)).toBeInTheDocument();
  });

  it("should render pagination", () => {
    const rendered = render(<PhotoContainer {...props} />);
    expect(rendered.queryByText(/Pagination/)).toBeInTheDocument();
  });

  it("should NOT render photo grid if totalPhotos is not >= 1", () => {
    returnedCategoryInfo.totalPhotos = undefined;

    const rendered = render(<PhotoContainer {...props} />);
    expect(
      rendered.queryByText(/Be the first contributor/)
    ).toBeInTheDocument();
  });
});
