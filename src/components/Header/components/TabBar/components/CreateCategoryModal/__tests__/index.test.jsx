import React from "react";

import { render } from "@testing-library/react";

import CreateCategoryModal from "..";

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

const FromAuthContext = require("../../../../../../../context/auth");
FromAuthContext.useAuthContext = jest.fn().mockReturnValue("123456");

describe("CreateCategoryModal", () => {
  let showMockFn, hideMockFn;
  let getByText;
  let getByPlaceholderText;

  beforeEach(() => {
    showMockFn = jest.fn();
    hideMockFn = jest.fn();

    ({ getByPlaceholderText, getByText } = render(
      <CreateCategoryModal isOpen={true} show={showMockFn} hide={hideMockFn} />
    ));
  });

  afterEach(() => {
    showMockFn.mockClear();
    hideMockFn.mockClear();
  });

  it("should render a title", () => {
    expect(getByText(/Create a new categor/)).toBeInTheDocument();
  });

  it("should render an input for name", () => {
    expect(getByPlaceholderText(/The category's name/)).toBeInTheDocument();
  });

  it("should render an input for image url", () => {
    expect(
      getByPlaceholderText(/Link to a featuring photo/)
    ).toBeInTheDocument();
  });

  it("should render an input for description", () => {
    expect(getByPlaceholderText(/\.{3}/)).toBeInTheDocument();
  });

  it("should render a create button", () => {
    expect(document.querySelector("button.Button")).toBeInTheDocument();
  });
});
