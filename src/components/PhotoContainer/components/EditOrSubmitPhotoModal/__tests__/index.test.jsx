import React from "react";
import { render } from "@testing-library/react";

import EditOrSubmitPhotoModal, { Types } from "..";

const FromPhotoActions = require("../../../../../utils/apis/photo");
FromPhotoActions.editPhoto = jest.fn().mockImplementation(() => {});
FromPhotoActions.submitPhoto = jest.fn().mockImplementation(() => {});

const FromAuth = require("../../../../../context/auth");
FromAuth.useAuthContext = jest.fn().mockImplementation(() => {
  return { authTokens: "1234" };
});

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

const FromHooks = require("../../../../../utils/hooks");
FromHooks.useHashParams = jest.fn().mockImplementation(() => ({
  getPage: () => 2,
}));

const props = {
  type: Types.EDIT,
  isOpen: true,
  show: jest.fn(),
  hide: jest.fn(),
  categoryId: 4,
  categoryName: "four",
  photoInfo: {
    description: "PhotoDescription",
    src: "PhotoSrc",
  },
};

describe("EditOrSubmitPhotoModal", () => {
  let rendered;

  beforeEach(() => {
    rendered = render(<EditOrSubmitPhotoModal {...props} />);
  });

  it("should render a title", () => {
    expect(rendered.queryByText(/Edit your photo/)).toBeDefined();
  });

  it("should render a read-only input for category's name ", () => {
    const input = document.getElementById("submitform.category");
    expect(input).not.toBeNull();
    expect(input.getAttribute("readonly")).not.toBeNull();
  });

  it("should render an input for image's url", () => {
    const input = document.getElementById("submitform.url");
    expect(input).not.toBeNull();
  });

  it("should render an input for image's description", () => {
    const input = document.getElementById("submitform.description");
    expect(input).not.toBeNull();
  });

  it("should render a button to click", () => {
    const button = document.querySelector("button#actionButton");
    expect(button).not.toBeNull();
  });
});
