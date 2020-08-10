import React from "react";
import { render } from "@testing-library/react";
// import { createMemoryHistory } from "history";
import App from "../App";

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

const FromCategoryContainer = require("../components/CategoryContainer");
FromCategoryContainer.default = jest.fn().mockImplementation(() => {
  return <p>CategoryContainer</p>;
});

const FromHomeContainer = require("../components/HomeContainer");
FromHomeContainer.default = jest.fn().mockImplementation(() => {
  return <p>HomeContainer</p>;
});

const FromPhotoContainer = require("../components/PhotoContainer");
FromPhotoContainer.default = jest.fn().mockImplementation(() => {
  return <p>PhotoContainer</p>;
});

const FromHeader = require("../components/Header");
FromHeader.default = jest.fn().mockImplementation(() => {
  return <p>Header</p>;
});

describe("App", () => {
  it("should render a header", () => {
    const { getByText } = render(<App />);
    const header = getByText(/Header/i);
    expect(header).toBeInTheDocument();
  });

  it("should render HomeContainer", () => {
    const { getByText } = render(<App />);
    const homeContainer = getByText(/HomeContainer/i);
    expect(homeContainer).toBeInTheDocument();
  });
});
