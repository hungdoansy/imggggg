import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";

import CreateCategoryModal from "../CreateCategoryModal";

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

const FromHooks = require("utils/hooks");
FromHooks.useAuthContext = jest.fn().mockReturnValue({ authTokens: "123456" });

const createCategoryMockFn = jest.fn().mockReturnValue(
  new Promise((resolve, reject) => {
    resolve({
      status: 400,
      data: {
        data: "Some strange error",
      },
    });
  })
);

const FromCategoryApis = require("utils/apis/category");
FromCategoryApis.createCategory = createCategoryMockFn;

describe("CreateCategoryModal", () => {
  let showMockFn, hideMockFn;
  let rendered;

  beforeEach(() => {
    showMockFn = jest.fn();
    hideMockFn = jest.fn();

    rendered = render(
      <CreateCategoryModal isOpen={true} show={showMockFn} hide={hideMockFn} />
    );
  });

  afterEach(() => {
    showMockFn.mockClear();
    hideMockFn.mockClear();
  });

  it("should render a title", () => {
    expect(rendered.getByText(/Create a new categor/)).toBeInTheDocument();
  });

  it("should render an input for name", () => {
    expect(
      rendered.getByPlaceholderText(/The category's name/)
    ).toBeInTheDocument();
  });

  it("should render an input for image url", () => {
    expect(
      rendered.getByPlaceholderText(/Link to a featuring photo/)
    ).toBeInTheDocument();
  });

  it("should render an input for description", () => {
    expect(rendered.getByPlaceholderText(/\.{3}/)).toBeInTheDocument();
  });

  it("should render a create button", () => {
    expect(document.querySelector("button.Button")).toBeInTheDocument();
  });

  it("should trigger createCategory api when clicking the create button", async () => {
    createCategoryMockFn.mockClear();

    const createButton = document.querySelector("button.Button");

    await wait(() => {
      act(() => {
        fireEvent.click(createButton);
      });
    });

    expect(createCategoryMockFn).toHaveBeenCalled();
    expect(document.querySelector("button.Button[disabled]")).not.toBeNull();
    expect(rendered.getByText(/Some strange error/)).toBeInTheDocument();
  });
});
