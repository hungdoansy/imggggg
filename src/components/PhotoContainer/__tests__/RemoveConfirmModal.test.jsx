import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import RemoveConfirmModal, { useRemoveModal } from "../RemoveConfirmModal";

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

describe("useRemoveModal", () => {
  const [IS_OPEN, SHOW, HIDE] = [0, 1, 2];
  let result;

  beforeEach(() => {
    ({ result } = renderHook(() => useRemoveModal()));
  });

  it("should return isOpen = false by default", () => {
    expect(result.current[IS_OPEN]).toBe(false);
  });

  it("should return set isOpen = true if triggering show function", () => {
    expect(result.current[IS_OPEN]).toBe(false);

    act(() => {
      result.current[SHOW]();
    });

    expect(result.current[IS_OPEN]).toBe(true);
  });

  it("should return set isOpen = false if triggering hide function", () => {
    expect(result.current[IS_OPEN]).toBe(false);

    act(() => {
      result.current[SHOW]();
    });

    expect(result.current[IS_OPEN]).toBe(true);

    act(() => {
      result.current[HIDE]();
    });

    expect(result.current[IS_OPEN]).toBe(false);
  });
});
