import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ViewPhotoModal from "..";

const FromAuth = require("../../../../../context/auth");
FromAuth.useAuthContext = jest.fn().mockImplementation(() => {
  return {
    hasSignedIn: true,
    authTokens: "1234",
    profile: {
      id: 2,
      name: "Author2",
    },
  };
});

const returnedPhoto = {
  id: 100,
  author: {
    id: 2,
    name: "Author2",
  },
  description: "Description2",
  src: "Src2",
};

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});
ReactRedux.useSelector = jest.fn().mockReturnValue(returnedPhoto);

const showEditModalMockFn = jest.fn();
const FromEditOrSubmitPhotoModal = require("../../EditOrSubmitPhotoModal");
FromEditOrSubmitPhotoModal.useEditOrSubmitModal = jest
  .fn()
  .mockReturnValue([false, showEditModalMockFn, jest.fn()]);

const showRemoveConfirmModalMockFn = jest.fn();
const FromRemoveConfirmModal = require("../components/RemoveConfirmModal");
FromRemoveConfirmModal.useRemoveModal = jest
  .fn()
  .mockReturnValue([false, showRemoveConfirmModalMockFn, jest.fn()]);

const FromPhotoActions = require("../../../../../actions/photo");
FromPhotoActions.fetchPhotoDetail = jest.fn();
FromPhotoActions.fetchPhotos = jest.fn();

const props = {
  isOpen: true,
  show: jest.fn(),
  hide: jest.fn(),
  photoId: 100,
  categoryId: 2,
  page: 2,
};
describe("ViewPhotoModal", () => {
  let rendered;

  beforeEach(() => {
    showEditModalMockFn.mockClear();
    showRemoveConfirmModalMockFn.mockClear();

    rendered = render(<ViewPhotoModal {...props} />);
  });

  afterEach(() => {
    showEditModalMockFn.mockClear();
    showRemoveConfirmModalMockFn.mockClear();
  });

  it("should render an img with correct src", () => {
    expect(
      document.querySelector(`img[src="${returnedPhoto.src}"]`)
    ).not.toBeNull();
  });

  it("should render the edit button", () => {
    expect(document.querySelector(`button.edit-button`)).not.toBeNull();
  });

  it("should render the edit button", () => {
    const editButton = document.querySelector(`button.edit-button`);

    expect(editButton).not.toBeNull();

    fireEvent.click(editButton);

    expect(showEditModalMockFn).toHaveBeenCalledTimes(1);
  });

  it("should render the remove button", () => {
    expect(document.querySelector(`button.remove-button`)).not.toBeNull();
  });

  it("should render the remove button", () => {
    const removeButton = document.querySelector(`button.remove-button`);

    expect(removeButton).not.toBeNull();

    fireEvent.click(removeButton);

    expect(showRemoveConfirmModalMockFn).toHaveBeenCalledTimes(1);
  });

  it("should render the source", () => {
    expect(rendered.getByText(/Posted by you/)).toBeInTheDocument();
  });

  it("should render the description", () => {
    expect(
      rendered.getByText(new RegExp(returnedPhoto.description))
    ).toBeInTheDocument();
  });
});
