import React from "react";
import { render, fireEvent, wait, act } from "@testing-library/react";

import { EditPhotoModal, SubmitPhotoModal } from "../EditOrSubmitPhotoModal";

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});

const FromPhotoApis = require("utils/apis/photo");
const editPhotoMockFn = jest
  .fn()
  .mockImplementation((categoryId, { id, description, imageUrl }) => {
    return new Promise((resolve, reject) => {
      const failed = imageUrl.length < 30;

      if (failed) {
        resolve({
          status: 400,
          data: {
            data: {
              image_url: ["URL is not valid"],
            },
          },
        });
      } else {
        resolve({
          status: 200,
          data: {},
        });
      }
    });
  });
const submitPhotoMockFn = jest.fn().mockReturnValue(
  new Promise((resolve, reject) => {
    resolve(123);
  })
);
FromPhotoApis.editPhoto = editPhotoMockFn;
FromPhotoApis.submitPhoto = submitPhotoMockFn;

const FromPhotoActions = require("actions/photo");
FromPhotoActions.fetchPhotoDetail = jest.fn();
FromPhotoActions.fetchPhotos = jest.fn();

const FromHooks = require("utils/hooks");
FromHooks.useAuthContext = jest.fn().mockImplementation(() => {
  return { authTokens: "1234" };
});
FromHooks.useHashParams = jest.fn().mockImplementation(() => ({
  getPage: () => 2,
}));

describe("EditPhotoModal", () => {
  let rendered;

  const props = {
    isOpen: true,
    show: jest.fn(),
    hide: jest.fn(),
    categoryId: 4,
    categoryName: "four",
    photoInfo: {
      id: 1,
      description: "PhotoDescription",
      src: "PhotoSrc",
    },
  };

  beforeEach(() => {
    rendered = render(<EditPhotoModal {...props} />);
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

  it("should trigger editPhoto api on click", async () => {
    editPhotoMockFn.mockClear();

    const urlInput = document.getElementById("submitform.url");

    fireEvent.change(urlInput, {
      target: { value: "123456789" },
    });

    const actionButton = document.querySelector("button#actionButton");

    await wait(() => {
      act(() => {
        fireEvent.click(actionButton);
      });
    });

    expect(editPhotoMockFn).toHaveBeenCalled();
    expect(rendered.getByText(/URL is not valid/)).toBeInTheDocument();
  });
});

describe("SubmitPhotoModal", () => {
  let rendered;

  const props = {
    isOpen: true,
    show: jest.fn(),
    hide: jest.fn(),
    categoryId: 4,
    categoryName: "four",
  };

  beforeEach(() => {
    rendered = render(<SubmitPhotoModal {...props} />);
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

  it("should trigger submitPhoto api on click", () => {
    submitPhotoMockFn.mockClear();

    const button = document.querySelector("button#actionButton");

    fireEvent.click(button);

    expect(submitPhotoMockFn).toHaveBeenCalled();
  });
});
