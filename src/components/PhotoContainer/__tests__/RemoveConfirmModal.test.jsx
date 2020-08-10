import React from "react";
import { render, fireEvent } from "@testing-library/react";

import RemoveConfirmModal from "../RemoveConfirmModal";

const actionOnConfirmMockFn = jest.fn();
const hideMockFn = jest.fn();

const props = {
  isOpen: true,
  hide: hideMockFn,
  actionOnConfirm: actionOnConfirmMockFn,
};

describe("RemoveConfirmModal", () => {
  let rendered;

  beforeEach(() => {
    actionOnConfirmMockFn.mockClear();
    hideMockFn.mockClear();

    rendered = render(<RemoveConfirmModal {...props} />);
  });

  afterEach(() => {
    actionOnConfirmMockFn.mockClear();
    hideMockFn.mockClear();
  });

  it("should render a title", () => {
    expect(
      rendered.getByText(/Please make sure this is serious/)
    ).toBeInTheDocument();
  });

  it("should render a Remove button", () => {
    const removeButton = rendered.getByText(/Remove/);
    expect(removeButton).toBeInTheDocument();

    expect(actionOnConfirmMockFn).toHaveBeenCalledTimes(0);
    fireEvent.click(removeButton);
    expect(actionOnConfirmMockFn).toHaveBeenCalledTimes(1);
  });

  it("should render a CANCEL button", () => {
    const cancelButton = rendered.getByText(/CANCEL/);
    expect(cancelButton).toBeInTheDocument();

    expect(hideMockFn).toHaveBeenCalledTimes(0);
    fireEvent.click(cancelButton);
    expect(hideMockFn).toHaveBeenCalledTimes(1);
  });
});
