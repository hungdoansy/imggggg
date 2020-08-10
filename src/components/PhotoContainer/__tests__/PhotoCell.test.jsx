import React from "react";
import { render, fireEvent } from "@testing-library/react";

import PhotoCell from "../PhotoCell";

const FromAuth = require("context/auth");
FromAuth.useAuthContext = jest.fn().mockReturnValue({
  profile: {
    id: 100,
  },
});

const showViewModalMockFn = jest.fn();
const FromViewPhotoModal = require("../ViewPhotoModal");
FromViewPhotoModal.useViewModal = jest
  .fn()
  .mockReturnValue([false, showViewModalMockFn, jest.fn()]);

const props = {
  id: 3,
  src: "fromthissource.com",
  description: "some random text",
  categoryId: 5,
  categoryName: "Random",
  author: { id: 100, name: "Hung" },
  page: 2,
};

describe("PhotoCell", () => {
  beforeEach(() => {
    render(<PhotoCell {...props} />);
  });

  afterEach(() => {
    showViewModalMockFn.mockClear();
  });

  it("should render an img", () => {
    const img = document.querySelector('a > img[src="fromthissource.com"]');
    expect(img).not.toBeNull();
  });

  it("should open the view photo modal when clicked", () => {
    const link = document.querySelector('a[href="/"]');

    fireEvent.click(link);

    expect(showViewModalMockFn).toHaveBeenCalledTimes(1);
  });

  it("should render an overlay", () => {
    const postedBy = document.querySelector("div.posted-by");

    expect(postedBy).not.toBeNull();
    expect(postedBy.textContent).toBe("posted by you");
  });
});
